import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import compareAsc from 'date-fns/compareAsc'

import GLOBAL from '@/config/global'
import API from '@/helpers/ApiHandler'

let apolloClient: ApolloClient<NormalizedCacheObject>
let previousToken = ''

function createApolloClient() {
  const link = new HttpLink({
    uri: GLOBAL.graphqlBaseURL,
    credentials: 'include',
  })

  const authLink = setContext(async (_, { headers }) => {
    // we import the token here to get the latest value
    const { token, expiry } = (await import('@/helpers/ApiHandler')).inMemoryToken
    let authorization = token ? `Bearer ${token}` : ''

    if (token && previousToken !== token) {
      previousToken = token
      authorization = `Bearer ${token}`

      const currentIsoDate = new Date().toISOString()
      const currentUTCDate = currentIsoDate.substr(0, 10)
      const currentUTCTime = currentIsoDate.substr(11, 8)

      const currentUTC = `${currentUTCDate} ${currentUTCTime}`
      const isTokenExpired = compareAsc(new Date(currentUTC), new Date(expiry)) >= 0

      if (isTokenExpired) {
        // silent refresh start here
        try {
          const { data: resToken } = await API.call({
            method: 'POST',
            url: '/user/refresh_token',
          })

          API.login(resToken.data.access_token, resToken.data.access_token_expiry_UTC)
          previousToken = resToken.data.access_token
          authorization = `Bearer ${resToken.data.access_token}`
        } catch (error) {
          authorization = ''
          previousToken = ''
          API.logout()
        }
      }
    } else if (!token) {
      authorization = ''
      previousToken = ''
      API.logout()
    }

    return {
      headers: {
        ...headers,
        authorization,
      },
    }
  })

  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: authLink.concat(link),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            searchMovies: {
              keyArgs: ['searchParams'], // use separate cache memory if list of this params exist
              merge(existing = { movies: [] }, incoming) {
                return {
                  currentPage: incoming.currentPage,
                  hasMore: incoming.hasMore,
                  movies: [...existing.movies, ...incoming.movies],
                  totalResult: incoming.totalResult,
                }
              },
            },
          },
        },
      },
    }),
  })
}

function initializeApollo(initialState = null): ApolloClient<NormalizedCacheObject> {
  const _apolloClient = apolloClient ?? createApolloClient()

  // If your page has NextJS data fetching methods that use Apollo Client,
  // the initial state gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract()

    // Restore the cache using the data passed from
    // getStaticProps/getServerSideProps combined with the existing cached data
    _apolloClient.cache.restore({ ...existingCache, ...(initialState ?? {}) })
  }

  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient

  // Create the Apollo Client once in the client
  if (!apolloClient) {
    apolloClient = _apolloClient
  }
  return _apolloClient
}

type Props = {
  initialState?: any
}

export const ApolloContextProvider: React.FC<Props> = ({ initialState, children }) => {
  const client = initializeApollo(initialState)

  return <ApolloProvider client={client}>{children}</ApolloProvider>
}

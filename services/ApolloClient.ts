import { useMemo } from 'react'
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client'
import GLOBAL from '@/config/global'

let apolloClient: ApolloClient<NormalizedCacheObject>

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({
      uri: GLOBAL.graphqlBaseURL,
    }),
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

export function initializeApollo(
  initialState = null
): ApolloClient<NormalizedCacheObject> {
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

export function useApollo(initialState = null): ApolloClient<NormalizedCacheObject> {
  const store = useMemo(() => initializeApollo(initialState), [initialState])
  return store
}

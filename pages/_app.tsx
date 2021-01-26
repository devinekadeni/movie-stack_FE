import type { AppProps } from 'next/app'
import { useEffect, ReactNode } from 'react'
import { ApolloProvider } from '@apollo/client'

import { MuteContextProvider } from '@/context/MuteContext'
import { MovieContextProvider } from '@/context/MovieContext'
import { useApollo } from '@/services/ApolloClient'

import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Layout from '../layout'
import MuiTheme from '@/styles/MUI-theme'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const MyApp = ({ Component, pageProps }: AppProps): ReactNode => {
  const apolloClient = useApollo(pageProps.initialApolloState)

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles)
    }
  }, [])

  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={MuiTheme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <MuteContextProvider>
          <MovieContextProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </MovieContextProvider>
        </MuteContextProvider>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default MyApp

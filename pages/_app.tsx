import type { AppProps } from 'next/app'
import { useEffect, ReactNode } from 'react'

import GlobalContextProvider from '@/context/GlobalContextProvider'

import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import MuiTheme from '@/styles/MUI-theme'
import Authentication from '@/containers/Authentication'
import Layout from '../layout'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const MyApp = ({ Component, pageProps }: AppProps): ReactNode => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles)
    }
  }, [])

  return (
    <ThemeProvider theme={MuiTheme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <GlobalContextProvider>
        <Authentication />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </GlobalContextProvider>
    </ThemeProvider>
  )
}

export default MyApp

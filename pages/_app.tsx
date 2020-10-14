import type { AppProps } from 'next/app'
import React, { useEffect, ReactNode } from 'react'

import { MuteContextProvider } from '@/context/MuteContext'

import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Layout from '../layout'
import MuiTheme from '@/styles/MUI-theme'
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
      <MuteContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MuteContextProvider>
    </ThemeProvider>
  )
}

export default MyApp

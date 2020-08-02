import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import GlobalStyles from 'styles/GlobalStyles'
import theme from 'styles/MUI-theme'

import RoutingComponent from './Routing'

const App = () => {
  return (
    <>
      <CssBaseline />
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <RoutingComponent />
      </ThemeProvider>
    </>
  )
}

export default App

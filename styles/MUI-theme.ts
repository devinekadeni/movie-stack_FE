import { createMuiTheme } from '@material-ui/core/styles'
import { BASIC_COLOR } from '@/styles/_colors'

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          /* will set the rem value = 10px on browser configuration font-size medium (recommended by browser) */
          fontSize: '0.625rem',
        },
        body: {
          fontFamily: "'Ubuntu', sans-serif",
          fontSize: '1.4rem',
          backgroundColor: '#fff',
        },
      },
    },
    MuiInputBase: {
      input: {
        fontSize: '1.4rem',
      },
    },
    MuiButton: {
      label: {
        fontSize: '1.4rem',
      },
    },
  },
  palette: {
    primary: {
      main: BASIC_COLOR.mainGreen,
      contrastText: BASIC_COLOR.white,
    },
    secondary: {
      main: BASIC_COLOR.white,
      contrastText: BASIC_COLOR.black,
    },
  },
  typography: {
    fontFamily: "'Ubuntu', sans-serif",
  },
})

export default theme

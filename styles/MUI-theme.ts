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
  },
  palette: {
    primary: {
      main: BASIC_COLOR.mainGreen,
    },
  },
})

export default theme

import { createMuiTheme } from '@material-ui/core/styles'
import { BASIC_COLOR } from '@/styles/_colors'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: BASIC_COLOR.mainGreen,
    },
  },
})

export default theme

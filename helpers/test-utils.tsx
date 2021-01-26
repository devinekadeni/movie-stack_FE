import { render, RenderResult } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThemeProvider } from '@material-ui/core/styles'
import MuiTheme from '@/styles/MUI-theme'
import '@testing-library/jest-dom'

const AllTheProviders: React.FC = ({ children }) => {
  return <ThemeProvider theme={MuiTheme}>{children}</ThemeProvider>
}

const customRender = (
  ui: React.ReactElement,
  options?: { [key: string]: unknown }
): RenderResult => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'

export { customRender as render, userEvent }

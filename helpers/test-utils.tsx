import { ReactElement, FC } from 'react'
import { render, RenderResult } from '@testing-library/react'
import { ThemeProvider } from '@material-ui/core/styles'
import MuiTheme from '@/styles/MUI-theme'
import '@testing-library/jest-dom'

const AllTheProviders: FC = ({ children }) => {
  return <ThemeProvider theme={MuiTheme}>{children}</ThemeProvider>
}

const customRender = (
  ui: ReactElement,
  options?: { [key: string]: unknown }
): RenderResult => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'

export { customRender as render }

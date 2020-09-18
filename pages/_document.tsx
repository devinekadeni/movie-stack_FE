import { ReactNode } from 'react'
import Document, { DocumentContext } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { ServerStyleSheets } from '@material-ui/core/styles'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): ReactNode {
    const StyledComponentsheet = new ServerStyleSheet()
    const MuiSheet = new ServerStyleSheets()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            StyledComponentsheet.collectStyles(MuiSheet.collect(<App {...props} />)),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {MuiSheet.getStyleElement()}
            {StyledComponentsheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      StyledComponentsheet.seal()
    }
  }
}

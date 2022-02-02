import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';
import { ThemeProvider } from '@emotion/react';
import theme from 'styles/themes';
import { renderStatic } from '../shared/renderer';
import GlobalStyles from 'styles/GlobalStyles';

export default class AppDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const page = await ctx.renderPage();
    const { css, ids } = await renderStatic(page.html);
    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style
            data-emotion={`css ${ids.join(' ')}`}
            dangerouslySetInnerHTML={{ __html: css }}
          />
        </>
      ),
    };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Main />
            <NextScript />
          </ThemeProvider>
        </body>
      </Html>
    );
  }
}

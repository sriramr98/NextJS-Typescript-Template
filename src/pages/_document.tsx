import React, { ReactElement } from 'react';
import NextDocument, {
  DocumentContext,
  DocumentInitialProps,
  Main,
  NextScript,
  Head,
} from 'next/document';
import { ServerStyleSheets } from '@material-ui/styles';

import theme from 'utils/theme';

export default class MyDocument extends NextDocument {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const styleSheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;
    try {
      // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => (props): ReactElement =>
            styleSheets.collect(<App {...props} />),
        });
      const initialProps = await NextDocument.getInitialProps(ctx);
      const finalInitProps: DocumentInitialProps = {
        ...initialProps,
        styles: [
          ...React.Children.toArray(initialProps.styles),
          styleSheets.getStyleElement(),
        ],
      };
      return finalInitProps;
    } finally {
    }
  }

  render(): JSX.Element {
    return (
      <html lang="en">
        <Head>
          {/* PWA primary color */}
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

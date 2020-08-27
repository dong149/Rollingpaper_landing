import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@material-ui/styles";
export default class RootDocument extends Document {
  render() {
    return (
      <html lang="ko">
        <Head>
          <meta charSet="UTF-8" />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/icons/main-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/icons/favicon-16x16.png"
          />
          <link rel="shortcut icon" href="/icons/favicon.ico" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/icons/main-icon.png" />
          <meta name="theme-color" content="#ffffff" />
          <link rel="canonical" href="https://rollingpaper.website/" />
          <meta property="og:title" content="롤링 페이퍼 만들기" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="/images/main.jpg" />
          <meta property="og:url" content="https://rollingpaper.website" />
          <meta property="site_title" content="롤링 페이퍼 만들기" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

RootDocument.getInitialProps = async (ctx) => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
};

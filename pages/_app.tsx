import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import Layout from "../components/Layout";
import { GlobalStyle } from "../styles/GlobalStyles";
import { theme } from "../styles/theme";
import img from "@optimizedAssets/orange-cover.png";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <DefaultSeo
        title="Orange Data Mining"
        description="Orange Data Mining Toolbox"
        openGraph={{
          type: "website",
          url: "https://orangedatamining.com",
          siteName: "Orange Data Mining",
          images: [
            {
              width: img.width,
              height: img.height,
              url: img.src,
            },
          ],
        }}
      />
      <Head>
        <meta
          name="author"
          content="Bioinformatics Laboratory, University of Ljubljana"
        />
      </Head>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

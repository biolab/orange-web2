import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import Layout from "../components/Layout";
import { GlobalStyle } from "../styles/GlobalStyles";
import { theme } from "../styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Layout>
        <Head>
          <title>Orange Data Mining</title>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

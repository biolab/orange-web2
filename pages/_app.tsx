import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import Layout from "../components/Layout";
import { GlobalStyle } from "../styles/GlobalStyles";
import { theme } from "../styles/theme";
import { Source_Sans_Pro } from "next/font/google";

const font = Source_Sans_Pro({
  style: "normal",
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <div className={font.className}>
        <Layout>
          <Head>
            <title>Orange Data Mining</title>
          </Head>
          <Component {...pageProps} />
        </Layout>
      </div>
    </ThemeProvider>
  );
}

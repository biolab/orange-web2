import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import Search from "@components/Search/Search";
import SearchContextProvider from "./Search/Search.context";
import styled from "styled-components";
import localFont from "next/font/local";
import CookieBanner from "./CookeiBanner/CookieBanner";

// Source Sans 3 (SIL OFL), self-hosted so builds don't depend on Google Fonts
const font = localFont({
  src: [
    { path: "../styles/fonts/SourceSans3-Regular.woff2", weight: "400" },
    { path: "../styles/fonts/SourceSans3-SemiBold.woff2", weight: "600" },
    { path: "../styles/fonts/SourceSans3-Bold.woff2", weight: "700" },
  ],
  style: "normal",
  fallback: ["sans-serif"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <StWrapper className={font.className}>
      <SearchContextProvider>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Search />
        <CookieBanner />
      </SearchContextProvider>
    </StWrapper>
  );
}

const StWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import Search from "@components/Search/Search";
import SearchContextProvider from "./Search/Search.context";
import styled from "styled-components";
import { Source_Sans_Pro } from "next/font/google";

const font = Source_Sans_Pro({
  style: "normal",
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <StWrapper className={font.className}>
      <SearchContextProvider>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Search />
      </SearchContextProvider>
    </StWrapper>
  );
}

const StWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

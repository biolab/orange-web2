import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import Search from "@components/Search/Search";
import SearchContextProvider from "./Search/Search.context";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SearchContextProvider>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Search />
      </SearchContextProvider>
    </>
  );
}

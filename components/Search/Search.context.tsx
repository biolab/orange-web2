import React from "react";

export const SearchContext = React.createContext({
  showSearch: false,
  setShowSearch: (val: boolean) => {},
});

const SearchContextProvider = ({ children }: any) => {
  const [showSearch, setShowSearch] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowSearch(false);
      }
      if (e.key === "/") {
        if (!showSearch) {
          e.preventDefault();
          setShowSearch(true);
        }
      }
    };

    document.addEventListener("keydown", down);
    return () => {
      document.removeEventListener("keydown", down);
    };
  }, [showSearch]);

  const contextValue = React.useMemo(
    () => ({
      showSearch,
      setShowSearch,
    }),
    [showSearch]
  );

  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;

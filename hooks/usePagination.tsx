import React from "react";

export default function usePagination(_items: any[] = [], itemsPerPage: number = 12) {
  const [items, setItems] = React.useState(_items);

  const noOfPages = React.useMemo(() => Math.ceil(items.length / itemsPerPage), [items.length, itemsPerPage]);
  const [page, setPage] = React.useState(0);

  const itemsOnPage = React.useMemo(
    () => items.slice(page * itemsPerPage, (page + 1) * itemsPerPage),
    [items, itemsPerPage, page]
  );

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return {
    itemsOnPage,
    noOfPages,
    page,
    setPage,
    setItems,
  };
}

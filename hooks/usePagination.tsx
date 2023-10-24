import { useRouter } from "next/router";
import React from "react";

export default function usePagination(
  _items: any[] = [],
  itemsPerPage: number = 12
) {
  const router = useRouter();

  const [items, setItems] = React.useState(_items);
  const noOfPages = React.useMemo(
    () => Math.ceil(items.length / itemsPerPage),
    [items.length, itemsPerPage]
  );

  const page = React.useMemo(() => {
    if (!router.query.page) {
      return 0;
    }
    return parseInt(router.query.page as string, 10) || 0;
  }, [router.query.page]);

  const setPage = React.useCallback(
    (page: number) => {
      router.push(
        {
          query: {
            ...router.query,
            page,
          },
        },
        undefined,
        { shallow: true }
      );
    },
    [router]
  );

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

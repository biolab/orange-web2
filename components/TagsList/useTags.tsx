import { useRouter } from "next/router";
import React from "react";

export default function useTags<T>(data: T[], tagProp: string, tags: string[]) {
  const router = useRouter();

  const selectedTag = React.useMemo(() => {
    if (!router.query.tag) {
      return null;
    }

    return router.query.tag as string;
  }, [router.query.tag]);

  const onTagClick = React.useCallback(
    (tag: string) => {
      const remove = selectedTag === tag;

      delete router.query.page;

      if (remove) {
        delete router.query.tag;

        router.push(
          {
            query: {
              ...router.query,
            },
          },
          undefined,
          { shallow: true },
        );

        return;
      }

      router.push(
        {
          query: {
            ...router.query,
            tag: tag,
          },
        },
        undefined,
        { shallow: true },
      );
    },
    [router, selectedTag],
  );

  const filteredData = React.useMemo(
    () =>
      selectedTag
        ? data.filter(
            (example: any) =>
              (example[tagProp] as string)?.includes(selectedTag),
          )
        : data,
    [data, selectedTag, tagProp],
  );

  const allTags = React.useMemo(() => {
    return [...new Set([...tags, ...(selectedTag ? [selectedTag] : [])])];
  }, [selectedTag, tags]);

  return {
    filteredData,
    selectedTag,
    onTagClick,
    allTags,
  };
}

import { useRouter } from "next/router";
import React from "react";

export default function useTags<T>(data: T[], tagProp: string) {
  const router = useRouter();
  const [selectedTag, setSelectedTag] = React.useState<string | null>(
    (router.query.tag as string) || null
  );

  React.useEffect(() => {
    setSelectedTag(router.query.tag as string);
  }, [router.query.tag]);

  const onTagClick = React.useCallback(
    (tag: string) => {
      const remove = selectedTag === tag;

      if (remove) {
        router.push(
          {
            query: {
              ...router.query,
              tag: undefined,
            },
          },
          undefined,
          { shallow: true }
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
        { shallow: true }
      );
    },
    [router, selectedTag]
  );

  const filteredData = React.useMemo(
    () =>
      selectedTag
        ? data.filter((example: any) =>
            (example[tagProp] as string)?.includes(selectedTag)
          )
        : data,
    [data, selectedTag, tagProp]
  );

  return {
    filteredData,
    selectedTag,
    onTagClick,
  };
}

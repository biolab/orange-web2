import React from "react";

export default function useTags<T>(data: T[], tagProp: string) {
  const [selectedTag, setSelectedTag] = React.useState<string | null>(null);

  const onTagClick = React.useCallback(
    (tag: string) =>
      setSelectedTag((selectedTag) => (selectedTag === tag ? null : tag)),
    []
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

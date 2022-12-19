import React from "react";
import Tag from "./Tag";

export default function TagsList({
  tags,
  selectedTag,
  onTagClick,
}: {
  tags: string[] | null;
  selectedTag: string | null;
  onTagClick: (tag: string) => void;
}) {
  if (!tags?.length) {
    return null;
  }

  return (
    <div>
      {tags.map((tag) => (
        <Tag onClick={() => onTagClick(tag)} $active={selectedTag === tag} key={tag}>
          {tag}
        </Tag>
      ))}
    </div>
  );
}

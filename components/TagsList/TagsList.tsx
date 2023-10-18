import React from "react";
import styled from "styled-components";
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
    <StTagsList>
      {tags.map((tag) => (
        <Tag
          onClick={() => onTagClick(tag)}
          $active={selectedTag === tag}
          key={tag}
        >
          {tag}
        </Tag>
      ))}
    </StTagsList>
  );
}

const StTagsList = styled.div`
  display: flex;
  gap: 8px;
  padding-bottom: 23px;
  flex-wrap: wrap;
`;

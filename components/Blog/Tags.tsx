import * as Styled from "./Blog.styled";

export default function BlogTags({
  tags,
  big,
  onTagClick,
}: {
  tags: string[];
  big?: boolean;
  onTagClick?: (tag: string) => void;
}) {
  return (
    <Styled.BlogTag $big={big}>
      {tags.map((tag: string, index: number) => (
        <span
          onClick={() => {
            onTagClick?.(tag);
          }}
          key={tag}
        >
          <span>{tag}</span>
          {index !== tags.length - 1 && ", "}
        </span>
      ))}
    </Styled.BlogTag>
  );
}

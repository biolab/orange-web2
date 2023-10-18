import * as Styled from "./Blog.styled";

export default function BlogTags({
  tags,
  big,
}: {
  tags: string[];
  big?: boolean;
}) {
  return (
    <Styled.BlogTag $big={big}>
      {tags.map((tag: string, index: number) => (
        <span key={tag}>
          <span>{tag}</span>
          {index !== tags.length - 1 && ", "}
        </span>
      ))}
    </Styled.BlogTag>
  );
}

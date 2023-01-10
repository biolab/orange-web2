import * as Styled from "./Blog.styled";

export default function BlogTags({ tags }: { tags: string[] }) {
  return (
    <Styled.BlogTag>
      {tags.map((tag: string, index: number) => (
        <span key={tag}>
          <span>{tag}</span>
          {index !== tags.length - 1 && ", "}
        </span>
      ))}
    </Styled.BlogTag>
  );
}

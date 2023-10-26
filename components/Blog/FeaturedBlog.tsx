import Link from "next/link";
import { BlogMetadata } from "pages/blog";
import Image from "@components/Image/Image";
import BlogTags from "./Tags";
import * as Styled from "./Blog.styled";
import { BodyText, Heading1 } from "@components/UiKit/Typography";
import formateDate from "@utils/formatDate";

export default function FeaturedBlog({
  blog,
  show,
  onTagClick,
}: {
  blog: BlogMetadata;
  show: boolean;
  onTagClick: (tag: string) => void;
}) {
  const { title, url, date, thumbImage, shortExcerpt, author, tags } = blog;

  if (!show) {
    return null;
  }
  return (
    <Styled.FeaturedBlog>
      <Styled.FBImageWrapper>
        {thumbImage && (
          <Link href={`blog/${url}`}>
            <Image
              priority
              src={thumbImage.src}
              width={thumbImage.width}
              height={thumbImage.height}
              alt={title}
            />
          </Link>
        )}
      </Styled.FBImageWrapper>

      <Styled.FBContentWrapper>
        <BlogTags tags={tags} big={true} onTagClick={onTagClick} />
        <Heading1>
          <Link href={`blog/${url}`}>{title}</Link>
        </Heading1>
        <BodyText>{shortExcerpt}</BodyText>
        <BodyText>
          <strong>{author}</strong>, {formateDate(date)}
        </BodyText>
      </Styled.FBContentWrapper>
    </Styled.FeaturedBlog>
  );
}

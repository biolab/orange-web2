import Link from "next/link";
import { BlogMetadata } from "pages/blog";
import Image from "@components/Image/Image";
import BlogTags from "./Tags";
import * as Styled from "./Blog.styled";
import { BodyText, Heading1 } from "@components/UiKit/Typography";

export default function FeaturedBlog({ blog, show }: { blog: BlogMetadata; show: boolean }) {
  const { title, url, date, thumbImage, shortExcerpt, author, tags } = blog;

  if (!show) {
    return null;
  }
  return (
    <Styled.FeaturedBlog>
      <div>
        <BlogTags tags={tags} />
        <Heading1>
          <Link href={`blog/${url}`}>{title}</Link>
        </Heading1>
        <BodyText>{shortExcerpt}</BodyText>
        <BodyText>
          <strong>{author}</strong>, {date}
        </BodyText>
      </div>

      <Styled.FBImageWrapper>
        {thumbImage && (
          <Link href={`blog/${url}`}>
            <Image src={thumbImage.src} width={thumbImage.width} height={thumbImage.height} alt="" />
          </Link>
        )}
      </Styled.FBImageWrapper>
    </Styled.FeaturedBlog>
  );
}

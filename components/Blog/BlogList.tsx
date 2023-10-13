import Link from "next/link";
import Image from "@components/Image/Image";
import { BlogMetadata } from "pages/blog";
import { BodyText, Heading2 } from "@components/UiKit/Typography";
import BlogTags from "./Tags";
import * as Styled from "./Blog.styled";

export default function BlogList({ blogs }: { blogs: BlogMetadata[] }) {
  return (
    <Styled.BlogList>
      {blogs.map(
        ({ title, url, date, thumbImage, shortExcerpt, author, tags }) => (
          <Styled.BlogListItem key={url}>
            {thumbImage && (
              <Styled.BlogListImageWrapper>
                <Link href={`blog/${url}`}>
                  <Image
                    src={thumbImage.src}
                    width={thumbImage.width}
                    height={thumbImage.height}
                    alt=""
                  />
                </Link>
              </Styled.BlogListImageWrapper>
            )}

            <BlogTags tags={tags} />
            <Heading2>
              <Link href={`blog/${url}`}>{title}</Link>
            </Heading2>
            <BodyText>{shortExcerpt}</BodyText>
            <BodyText>
              <strong>{author}</strong>, {date}
            </BodyText>
          </Styled.BlogListItem>
        )
      )}
    </Styled.BlogList>
  );
}

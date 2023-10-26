import Link from "next/link";
import Image from "@components/Image/Image";
import { BlogMetadata } from "pages/blog";
import { BodyText, Heading2 } from "@components/UiKit/Typography";
import BlogTags from "./Tags";
import * as Styled from "./Blog.styled";
import formateDate from "@utils/formatDate";

export default function BlogList({
  blogs,
  onTagClick,
}: {
  blogs: BlogMetadata[];
  onTagClick: (tag: string) => void;
}) {
  return (
    <Styled.BlogList>
      {blogs.map(
        (
          { title, url, date, thumbImage, shortExcerpt, author, tags },
          index,
        ) => (
          <Styled.BlogListItem key={url}>
            {thumbImage && (
              <Styled.BlogListImageWrapper>
                <Link href={`blog/${url}`}>
                  <Image
                    priority={index < 3}
                    src={thumbImage.src}
                    width={thumbImage.width}
                    height={thumbImage.height}
                    alt={title}
                  />
                </Link>
              </Styled.BlogListImageWrapper>
            )}

            <BlogTags tags={tags} onTagClick={onTagClick} />
            <Heading2 $mb6>
              <Link href={`blog/${url}`}>{title}</Link>
            </Heading2>
            <BodyText>{shortExcerpt}</BodyText>
            <BodyText>
              <strong>{author}</strong>, {formateDate(date)}
            </BodyText>
          </Styled.BlogListItem>
        ),
      )}
    </Styled.BlogList>
  );
}

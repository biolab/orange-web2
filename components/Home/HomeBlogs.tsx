import Link from "next/link";
import Image from "@components/Image/Image";
import { BodyText, Heading3 } from "@components/UiKit/Typography";
import { BlogMetadata } from "pages/blog";

export default function HomeBlogs({ blogs }: { blogs: BlogMetadata[] }) {
  const [lastBlog, ...restBlogs] = blogs;

  return (
    <div>
      <div>
        <Link href={`blog/${lastBlog.url}`}>
          <div>{lastBlog.date}</div>
          <Heading3>{lastBlog.title}</Heading3>
          <BodyText>{lastBlog.shortExcerpt}</BodyText>
          <Image {...lastBlog.thumbImage} alt="" />
        </Link>
      </div>

      {restBlogs.map(({ date, title, shortExcerpt, thumbImage, url }) => {
        return (
          <div key={title}>
            <Link href={`blog/${url}`}>
              <div>
                <div>{date}</div>
                <Heading3>{title}</Heading3>
                <BodyText>{shortExcerpt}</BodyText>
              </div>
              <div>
                <Image {...thumbImage} alt="" />
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

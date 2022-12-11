import Link from "next/link";
import React from "react";
import { getBlogsMetadata } from "../../scripts/getBlogPosts";

const BLOGS_PER_PAGE = 10;

export async function getStaticProps() {
  const posts = getBlogsMetadata();

  return {
    props: {
      posts,
    },
  };
}

export default function Blog({
  posts,
}: {
  posts: { oldSlug: string; title: string; url: string; date: string; thumbImage: string }[];
  postsLength: number;
}) {
  const noOfPages = React.useMemo(() => Math.ceil(posts.length / BLOGS_PER_PAGE), [posts]);
  const [page, setPage] = React.useState(0);
  const postsOnPage = React.useMemo(
    () => posts.slice(page * BLOGS_PER_PAGE, (page + 1) * BLOGS_PER_PAGE),
    [page, posts]
  );

  return (
    <div>
      <h1>Blog</h1>

      {Array.from({ length: noOfPages }).map((_, index) => (
        <button onClick={() => setPage(index)}>{index + 1}</button>
      ))}

      <ul>
        {postsOnPage.map(({ title, url, oldSlug, date, thumbImage }) => (
          <li style={{ padding: "20px", border: "1px solid" }} key={url}>
            <Link href={`blog/${url}`}>{title}</Link>
            <div>{oldSlug}</div>
            <div>{title}</div>
            <div>Date: {date}</div>
            {thumbImage && <img style={{ maxWidth: "260px" }} src={thumbImage} alt="" />}
          </li>
        ))}
      </ul>
    </div>
  );
}

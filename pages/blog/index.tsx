import Link from "next/link";
import { getBlogsMetadata } from "../../scripts/getBlogPosts";

export async function getStaticProps() {
  return {
    props: {
      posts: getBlogsMetadata(),
    },
  };
}

export default function Blog({ posts }: { posts: { oldSlug: string; title: string; url: string; date: string }[] }) {
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map(({ title, url, oldSlug, date }) => (
          <li style={{ padding: "20px", border: "1px solid" }} key={url}>
            <Link href={`blog/${url}`}>{title}</Link>
            <div>{oldSlug}</div>
            <div>{title}</div>
            <div>Date: {date}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

import React from "react";
import { getBlogsMetadata } from "../../scripts/getBlogPosts";
import Adapt from "@components/UiKit/Adapt";
import usePagination from "@hooks/usePagination";
import Pagination from "@components/Pagination/Pagination";
import FeaturedBlog from "@components/Blog/FeaturedBlog";
import BlogList from "@components/Blog/BlogList";

export interface BlogMetadata {
  title: string;
  url: string;
  date: string;
  thumbImage: any;
  shortExcerpt: string;
  author: string;
  tags: string[];
}

export async function getStaticProps() {
  return {
    props: {
      blogs: getBlogsMetadata() as BlogMetadata[],
    },
  };
}

export default function Blog({ blogs }: { blogs: BlogMetadata[] }) {
  const { itemsOnPage: blogsOnPage, setPage, page, noOfPages } = usePagination(blogs.slice(1));

  return (
    <Adapt>
      <h1>Blog</h1>
      <FeaturedBlog blog={blogs[0]} show={page === 0} />
      <BlogList blogs={blogsOnPage} />
      <Pagination noOfPages={noOfPages} page={page} setPage={setPage} />
    </Adapt>
  );
}

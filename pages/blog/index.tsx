import React from "react";
import { getBlogsMetadata } from "../../scripts/getBlogPosts";
import usePagination from "@hooks/usePagination";
import Pagination from "@components/Pagination/Pagination";
import FeaturedBlog from "@components/Blog/FeaturedBlog";
import BlogList from "@components/Blog/BlogList";
import MainLayout from "@components/UiKit/MainLayout";
import TagsList from "@components/TagsList/TagsList";
import useTags from "@components/TagsList/useTags";
import getTopTags from "@utils/getTopTags";

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
  const blogs = getBlogsMetadata() as BlogMetadata[];
  const tags = blogs.flatMap((blog) => blog.tags).filter(Boolean);

  return {
    props: {
      blogs,
      tags: getTopTags(tags),
    },
  };
}

export default function Blog({
  blogs,
  tags,
}: {
  blogs: BlogMetadata[];
  tags: string[];
}) {
  const { filteredData, selectedTag, onTagClick } = useTags(blogs, "tags");

  const {
    itemsOnPage: blogsOnPage,
    setPage,
    page,
    noOfPages,
    setItems,
  } = usePagination(blogs.slice(1));

  React.useEffect(() => {
    setItems(selectedTag ? filteredData : blogs.slice(1));
    setPage(0);
  }, [blogs, filteredData, selectedTag, setItems, setPage]);

  return (
    <MainLayout title="Blog">
      <TagsList tags={tags} selectedTag={selectedTag} onTagClick={onTagClick} />
      <FeaturedBlog blog={blogs[0]} show={page === 0 && !selectedTag} />
      <BlogList blogs={blogsOnPage} />
      <Pagination noOfPages={noOfPages} page={page} setPage={setPage} />
    </MainLayout>
  );
}

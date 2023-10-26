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
import { NextSeo } from "next-seo";

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
  const { filteredData, selectedTag, allTags, onTagClick } = useTags(
    blogs,
    "tags",
    tags,
  );

  const {
    itemsOnPage: blogsOnPage,
    setPage,
    page,
    noOfPages,
    setItems,
  } = usePagination(blogs.slice(1));

  React.useEffect(() => {
    setItems(selectedTag ? filteredData : blogs.slice(1));
  }, [blogs, filteredData, selectedTag, setItems]);

  return (
    <MainLayout title="Blog">
      <TagsList
        tags={allTags}
        selectedTag={selectedTag}
        onTagClick={onTagClick}
      />
      <FeaturedBlog
        blog={blogs[0]}
        show={page === 0 && !selectedTag}
        onTagClick={onTagClick}
      />
      <BlogList blogs={blogsOnPage} onTagClick={onTagClick} />
      <Pagination noOfPages={noOfPages} page={page} setPage={setPage} />
    </MainLayout>
  );
}

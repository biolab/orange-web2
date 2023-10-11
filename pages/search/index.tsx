import Link from "next/link";
import React, { useEffect } from "react";
import styled from "styled-components";
import lunr from "lunr";
import { getBlogsMetadata } from "../../scripts/getBlogPosts";
import Image from "../../components/Image/Image";
import { useRouter } from "next/router";
import usePagination from "@hooks/usePagination";
import Pagination from "@components/Pagination/Pagination";
import widgetCatalog from "@public/widget-catalog/widgets.json";
import slugify from "@utils/slugify";
import { Widget } from "pages/widget-catalog/[category]/[widget]";

const Wrapper = styled.div`
  padding: 100px 38px;
`;

const Item = styled.li`
  padding: 38px 0;

  & + & {
    border-top: 1px solid #ccc;
  }
`;

const ThumbImageWrapper = styled.div`
  max-width: 220px;
`;

export async function getStaticProps() {
  const posts = getBlogsMetadata();

  const widgets = widgetCatalog.flatMap(([_, widgets]: any) =>
    widgets
      .map((widget: Widget) =>
        widget.url
          ? {
              category: widget.category,
              title: widget.title,
              url: `${slugify(widget.category)}/${widget.url}`,
              _type: "widget",
            }
          : undefined
      )
      .filter(Boolean)
  );

  return {
    props: {
      posts: [...posts, ...widgets],
    },
  };
}

export default function Search({
  posts,
}: {
  posts: {
    oldSlug: string;
    title: string;
    url: string;
    date: string;
    longExcerpt: string;
    shortExcerpt: string;
    thumbImage: any;
    _type: string;
  }[];
}) {
  const router = useRouter();
  const [input, setInput] = React.useState("");

  const blogIndex = React.useMemo(() => {
    return lunr(function () {
      this.ref("url");

      this.field("title", {
        boost: 50,
      });
      this.field("categories", {
        boost: 30,
      });
      this.field("longExcerpt", {
        boost: 10,
      });
      this.field("type", {
        boost: 70,
      });
      this.field("author", {
        boost: 10,
      });
      this.field("content", {
        boost: 1,
      });

      posts.forEach((doc: any) => {
        this.add(doc);
      }, this);
    });
  }, [posts]);

  const searchResults = React.useMemo(() => {
    const query = input.toLowerCase();

    if (!query || !blogIndex) {
      return { blog: [] };
    }

    const lunrResults = blogIndex.search(query);

    const blog = posts
      .filter((post) => lunrResults.find((result) => result.ref === post.url))
      .sort((a, b) => {
        const aIndex = lunrResults.find(
          (result) => result.ref === a.url
        )!.score;
        const bIndex = lunrResults.find(
          (result) => result.ref === b.url
        )!.score;

        return bIndex - aIndex;
      });
    console.log(blog);
    return { blog };
  }, [input, blogIndex, posts]);

  const {
    itemsOnPage: postsOnPage,
    setPage,
    page,
    noOfPages,
    setItems,
  } = usePagination();

  React.useEffect(() => {
    setItems(searchResults.blog);
  }, [searchResults.blog, setItems]);

  return (
    <Wrapper>
      <h1>Search results</h1>
      <input
        type="text"
        placeholder="Search"
        value={input}
        onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInput(e.target.value)
        }
      />
      <ul>
        {postsOnPage.map(({ title, url, oldSlug, date, thumbImage, _type }) => (
          <Item key={url}>
            <Link href={`blog/${url}`}>{title}</Link>
            <div>{oldSlug}</div>
            <div>{title}</div>
            <div>Date: {date}</div>
            <b>type: {_type}</b>

            {thumbImage && (
              <ThumbImageWrapper>
                <Image
                  src={thumbImage.src}
                  loading="lazy"
                  width={thumbImage.width}
                  height={thumbImage.height}
                  alt=""
                />
              </ThumbImageWrapper>
            )}
          </Item>
        ))}
      </ul>

      <Pagination noOfPages={noOfPages} page={page} setPage={setPage} />
    </Wrapper>
  );
}

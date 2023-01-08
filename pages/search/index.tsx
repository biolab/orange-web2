import Link from "next/link";
import React, { useEffect } from "react";
import styled from "styled-components";
import lunr from "lunr";
import { getBlogsMetadata } from "../../scripts/getBlogPosts";
import Image from "../../components/Image/Image";
import { useRouter } from "next/router";

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

const BLOGS_PER_PAGE = 200;

export async function getStaticProps() {
  const posts = getBlogsMetadata();

  return {
    props: {
      posts,
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
  }[];
}) {
  const router = useRouter();

  const [page, setPage] = React.useState(0);
  const [index, setIndex] = React.useState<lunr.Index | null>(null);

  useEffect(() => {
    const index = lunr(function () {
      this.ref("url");
      this.field("title", {
        boost: 50,
      });
      this.field("categories", {
        boost: 30,
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

    setIndex(index);
  }, [posts, router.query.q]);

  const searchResults = React.useMemo(() => {
    const query = router.query.q?.toString().toLowerCase();

    if (!query || !index) {
      return [];
    }

    const lunrResults = index.search(query);

    return posts
      .filter((post) => lunrResults.find((result) => result.ref === post.url))
      .sort((a, b) => {
        const aIndex = lunrResults.find((result) => result.ref === a.url)!.score;
        const bIndex = lunrResults.find((result) => result.ref === b.url)!.score;

        return bIndex - aIndex;
      });
  }, [router.query.q, index, posts]);

  const noOfPages = React.useMemo(() => Math.ceil(searchResults.length / BLOGS_PER_PAGE), [searchResults]);
  const postsOnPage = React.useMemo(
    () => searchResults.slice(page * BLOGS_PER_PAGE, (page + 1) * BLOGS_PER_PAGE),
    [page, searchResults]
  );

  return (
    <Wrapper>
      <h1>Search results</h1>

      <ul>
        {postsOnPage.map(({ title, url, oldSlug, date, thumbImage }) => (
          <Item key={url}>
            <Link href={`blog/${url}`}>{title}</Link>
            <div>{oldSlug}</div>
            <div>{title}</div>
            <div>Date: {date}</div>

            {thumbImage && (
              <ThumbImageWrapper>
                <Image src={thumbImage.src} loading="lazy" width={thumbImage.width} height={thumbImage.height} alt="" />
              </ThumbImageWrapper>
            )}
          </Item>
        ))}
      </ul>

      {Array.from({ length: noOfPages }).map((_, index) => (
        <button key={index} onClick={() => setPage(index)}>
          {index + 1}
        </button>
      ))}
    </Wrapper>
  );
}

import Link from "next/link";
import React from "react";
import styled from "styled-components";
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
  postsLength: number;
}) {
  const router = useRouter();

  const [page, setPage] = React.useState(0);

  const searchResults = React.useMemo(() => {
    const query = router.query.q?.toString().toLowerCase();

    if (!query) {
      return [];
    }

    return posts.filter((post) => {
      return (
        post.title.toLowerCase().includes(query) ||
        post.longExcerpt.toLowerCase().includes(query) ||
        post.shortExcerpt.toLowerCase().includes(query)
      );
    });
  }, [posts, router.query.q]);

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
        <button onClick={() => setPage(index)}>{index + 1}</button>
      ))}
    </Wrapper>
  );
}

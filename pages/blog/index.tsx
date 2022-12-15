import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { getBlogsMetadata } from "../../scripts/getBlogPosts";
import Image from "../../components/Image/Image";

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

export default function Blog({
  posts,
}: {
  posts: { oldSlug: string; title: string; url: string; date: string; thumbImage: any }[];
  postsLength: number;
}) {
  const noOfPages = React.useMemo(() => Math.ceil(posts.length / BLOGS_PER_PAGE), [posts]);
  const [page, setPage] = React.useState(0);
  const postsOnPage = React.useMemo(
    () => posts.slice(page * BLOGS_PER_PAGE, (page + 1) * BLOGS_PER_PAGE),
    [page, posts]
  );

  return (
    <Wrapper>
      <h1>Blog</h1>

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

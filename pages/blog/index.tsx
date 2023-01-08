import Link from "next/link";
import React from "react";
import { getBlogsMetadata } from "../../scripts/getBlogPosts";
import Image from "../../components/Image/Image";
import Adapt from "@components/UiKit/Adapt";
import device from "@styles/utils/breakpoints";
import styled from "styled-components";
import { Heading3, BodyText } from "@components/UiKit/Typography";

const BlogWrapper = styled.div``;
const BlogList = styled.ul`
  display: inline-grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 70px;
  border-top: 1px solid ${({ theme }) => theme.borderColor};

  @media ${device.L} {
    column-gap: 35px;
  }

  @media ${device.M} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.XS} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const BlogListItem = styled.li`
  padding-top: 30px;
  padding-bottom: 40px;

  &:nth-child(n + 4) {
    border-top: 1px solid ${({ theme }) => theme.borderColor};
  }

  @media ${device.M} {
    &:nth-child(n + 3) {
      border-top: 1px solid ${({ theme }) => theme.borderColor};
    }
  }
  @media ${device.XS} {
    &:nth-child(n + 2) {
      border-top: 1px solid ${({ theme }) => theme.borderColor};
    }
  }
`;

const BlogListImageWrapper = styled.figure`
  margin-bottom: 20px;

  img {
    aspect-ratio: 1.79;
    object-fit: cover;
    width: 100%;
  }
`;

const BlogTag = styled.p`
  font-size: 1rem;
  line-height: 1.25;
  font-weight: 600;
  color: ${({ theme }) => theme.violet};
  margin-bottom: 10px;
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
    <BlogWrapper>
      <Adapt>
        <h1>Blog</h1>

        <BlogList>
          {postsOnPage.map(({ title, url, oldSlug, date, thumbImage }) => (
            <BlogListItem key={url}>
              {thumbImage && (
                <BlogListImageWrapper>
                  <Link href={`blog/${url}`}>
                    <Image
                      src={thumbImage.src}
                      loading="lazy"
                      width={thumbImage.width}
                      height={thumbImage.height}
                      alt=""
                    />
                  </Link>
                </BlogListImageWrapper>
              )}

              <BlogTag>Tag1, Tag2</BlogTag>
              <Heading3>
                <Link href={`blog/${url}`}>{title}</Link>
              </Heading3>
              <BodyText>
                To je statična vsebina, testna vsebina. To je <a href="">testni link</a>. To je statična vsebina, testna
                vsebina.
              </BodyText>
              <BodyText>
                <strong>Janez Demšar</strong>, {date}
              </BodyText>

              <div>({oldSlug})</div>
            </BlogListItem>
          ))}
        </BlogList>

        {Array.from({ length: noOfPages }).map((_, index) => (
          <button onClick={() => setPage(index)}>{index + 1}</button>
        ))}
      </Adapt>
    </BlogWrapper>
  );
}

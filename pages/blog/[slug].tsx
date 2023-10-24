import matter from "gray-matter";
import fs from "fs";
import { serialize } from "next-mdx-remote/serialize";
import { getBlogsMetadata } from "@scripts/getBlogPosts";
import remarkGfm from "remark-gfm";
import remarkUnwrapImages from "remark-unwrap-images";
import styled, { css } from "styled-components";
import { getImageData } from "@utils/images/getImageData";
import MdContent from "@components/MdContent/MdContent";
import addRelativePathToImages from "@utils/images/addRelativePathToImages";
import Adapt from "@components/UiKit/Adapt";
import { Heading1 } from "@components/UiKit/TypographyHomepage";
import device from "@styles/utils/breakpoints";
import formatDate from "@utils/formatDate";
import MainLayout from "@components/UiKit/MainLayout";
import rehypeHighlight from "rehype-highlight";

const BlogDetailWrapper = styled.div`
  padding: 80px 0;

  @media ${device.M} {
    padding: 60px 0;
  }
  @media ${device.S} {
    padding: 40px 0;
  }
`;

const BlogDetailHeader = styled.div`
  margin-bottom: 30px;
`;

const BlogDetailContent = styled.div`
  position: relative;
`;

const Author = styled.div`
  position: absolute;
  top: 0;
  right: 100%;
  width: 200px;
  margin-right: 50px;
  text-align: right;

  @media ${device.L} {
    position: unset;
    width: auto;
    text-align: left;
    margin: 0 0 30px 0;
  }
`;

const Text = styled.p<{ $colorPurple?: boolean; $capitalize?: boolean }>`
  font-size: 20px;
  line-height: 1.25;
  color: ${({ theme }) => theme.blackLight1};

  @media ${device.M} {
    font-size: 18px;
  }

  ${({ $capitalize }) =>
    $capitalize &&
    css`
      text-transform: capitalize;
    `}
  ${({ $colorPurple, theme }) =>
    $colorPurple &&
    css`
      color: ${theme.purple};
    `}
`;

export async function getStaticPaths() {
  const paths = getBlogsMetadata().map((post: any) => ({
    params: { slug: post.url },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const { fullFilePath, publicFilePath, thumbImage } = getBlogsMetadata().find(
    (post: any) => post.url === slug
  );
  const mdFile = fs.readFileSync(fullFilePath, "utf-8");
  const { data: frontmatter, content } = matter(mdFile);

  const mdxSource = await serialize(
    addRelativePathToImages(content, publicFilePath),
    {
      mdxOptions: {
        remarkPlugins: [remarkGfm, remarkUnwrapImages], // Add remarkGfm to support MD tables
        rehypePlugins: [rehypeHighlight as any, getImageData], // Adds webp src, width and height to images
      },
    }
  );

  return {
    props: {
      frontmatter,
      content: mdxSource,
      thumbImage,
    },
  };
}

export default function BlogPost({
  frontmatter,
  content,
  thumbImage,
}: {
  frontmatter: any;
  content: any;
  thumbImage: any;
}) {
  return (
    <MainLayout
      title={frontmatter.title}
      justSEO
      $width714
      openGraph={{
        type: "article",
        article: {
          publishedTime: frontmatter.date,
          authors: [frontmatter.author],
          tags: frontmatter.blog,
        },
        description: frontmatter.shortExcerpt,
        images: thumbImage
          ? [
              {
                width: thumbImage.width,
                height: thumbImage.height,
                url: thumbImage.src,
              },
            ]
          : [],
      }}
    >
      <BlogDetailWrapper>
        <Adapt $width714 $mb>
          <BlogDetailHeader>
            <Text $colorPurple $capitalize>
              <strong>{frontmatter.blog.join(", ")}</strong>
            </Text>
            <Heading1 $colorBlack>{frontmatter.title}</Heading1>
          </BlogDetailHeader>
          <BlogDetailContent>
            <Author>
              <Text>
                <strong>{frontmatter.author}</strong>
              </Text>
              <Text>{formatDate(frontmatter.date)}</Text>
            </Author>

            <MdContent content={content} />
          </BlogDetailContent>
        </Adapt>
      </BlogDetailWrapper>
    </MainLayout>
  );
}

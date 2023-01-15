import matter from "gray-matter";
import fs from "fs";
import { serialize } from "next-mdx-remote/serialize";
import { getBlogsMetadata } from "@scripts/getBlogPosts";
import remarkGfm from "remark-gfm";
import remarkUnwrapImages from "remark-unwrap-images";
import styled from "styled-components";
import { getImageData } from "@utils/images/getImageData";
import MdContent from "@components/MdContent/MdContent";
import addRelativePathToImages from "@utils/images/addRelativePathToImages";

const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export async function getStaticPaths() {
  const paths = getBlogsMetadata().map((post: any) => ({ params: { slug: post.url } }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }: { params: { slug: string } }) {
  const { fullFilePath, publicFilePath } = getBlogsMetadata().find((post: any) => post.url === slug);
  const mdFile = fs.readFileSync(fullFilePath, "utf-8");
  const { data: frontmatter, content } = matter(mdFile);

  const mdxSource = await serialize(addRelativePathToImages(content, publicFilePath), {
    mdxOptions: {
      remarkPlugins: [remarkGfm, remarkUnwrapImages], // Add remarkGfm to support MD tables
      rehypePlugins: [getImageData], // Adds webp src, width and height to images
    },
  });

  return {
    props: {
      frontmatter,
      content: mdxSource,
    },
  };
}

export default function BlogPost({ frontmatter, content }: { frontmatter: any; content: any }) {
  return (
    <Wrapper>
      <h1>{frontmatter.title}</h1>
      <MdContent content={content} />
    </Wrapper>
  );
}

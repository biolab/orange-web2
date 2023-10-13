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
import Adapt from "@components/UiKit/Adapt";
import { Heading1 } from "@components/UiKit/TypographyHomepage";
import device from "@styles/utils/breakpoints";

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

const Text = styled.p<{ $colorViolet?: boolean; $capitalize?: boolean }>`
  font-size: 20px;
  line-height: 1.25;
  color: ${({ theme }) => theme.blackLight};

  @media ${device.M} {
    font-size: 18px;
  }

  ${({ $capitalize }) => $capitalize && "text-transform: capitalize;"}
  ${({ $colorViolet }) => $colorViolet && "color: #837FEB"}
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
  const { fullFilePath, publicFilePath } = getBlogsMetadata().find(
    (post: any) => post.url === slug
  );
  const mdFile = fs.readFileSync(fullFilePath, "utf-8");
  const { data: frontmatter, content } = matter(mdFile);

  const mdxSource = await serialize(
    addRelativePathToImages(content, publicFilePath),
    {
      mdxOptions: {
        remarkPlugins: [remarkGfm, remarkUnwrapImages], // Add remarkGfm to support MD tables
        rehypePlugins: [getImageData], // Adds webp src, width and height to images
      },
    }
  );

  return {
    props: {
      frontmatter,
      content: mdxSource,
    },
  };
}

export default function BlogPost({
  frontmatter,
  content,
}: {
  frontmatter: any;
  content: any;
}) {
  return (
    <BlogDetailWrapper>
      <Adapt $width714>
        <BlogDetailHeader>
          <Text $colorViolet $capitalize>
            <strong>{frontmatter.blog.join(", ")}</strong>
          </Text>
          <Heading1 $colorBlack>{frontmatter.title}</Heading1>
        </BlogDetailHeader>
        <BlogDetailContent>
          <Author>
            <Text>
              <strong>{frontmatter.author}</strong>
            </Text>
            <Text>
              {new Date(frontmatter.date).toLocaleDateString("en-EN", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              })}
            </Text>
          </Author>

          <MdContent content={content} />
        </BlogDetailContent>
      </Adapt>
    </BlogDetailWrapper>
  );
}

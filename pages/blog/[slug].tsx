import matter from "gray-matter";
import fs from "fs";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { getBlogsMetadata } from "@scripts/getBlogPosts";
import remarkGfm from "remark-gfm";
import styled from "styled-components";
import Image from "next/image";
import { rehypeImageSize } from "@utils/rehypeImageSize";

const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const ScreenshotImage = styled(Image)`
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const VideoResponsive = styled.div`
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 0;

  iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
  }
`;

function addRelativePathToImages(content: string, imgRelativePath: string): string {
  if (!imgRelativePath || !content) {
    return content;
  }

  // Add relative path IF img src does NOT start with 'http' OR '/'
  return content
    .replace(/src="(?!(http)|(\/))/g, `src="${imgRelativePath}`)
    .replace(/\]\((?!(http)|(\/))/g, `](${imgRelativePath}`);
}

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
      remarkPlugins: [remarkGfm], // Add remarkGfm to support MD tables
      rehypePlugins: [rehypeImageSize], // Add rehypeImageSize to add width and height to images
    },
  });

  return {
    props: {
      frontmatter,
      content: mdxSource,
    },
  };
}
type ImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

const Video = ({ src }: { src: string }) => (
  <video controls>
    <source src={src} type="video/mp4" />
  </video>
);
const WindowScreenshot = ({ src, alt, width, height }: ImageProps) => (
  <ScreenshotImage loading="lazy" src={src} alt={alt} width={width} height={height} />
);

const Figure = ({ src, alt, width, height }: ImageProps) => (
  <Image loading="lazy" src={src} alt={alt} width={width} height={height} />
);
const LinkNew = ({ url, name }: { url: string; name: string }) => {
  return (
    <a href={url} target="_blank">
      {name}
    </a>
  );
};
const YouTube = ({ embedId }: { embedId: string }) => (
  <VideoResponsive>
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </VideoResponsive>
);

export default function BlogPost({ frontmatter, content }: { frontmatter: any; content: any }) {
  return (
    <Wrapper>
      <h1>{frontmatter.title}</h1>
      <MDXRemote
        {...content}
        components={{
          Video,
          YouTube,
          Figure,
          LinkNew,
          WindowScreenshot,
          WorkflowScreenshot: WindowScreenshot,
        }}
      />
    </Wrapper>
  );
}

import matter from "gray-matter";
import fs from "fs";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

function addRelativePathToImages(
  content: string,
  imgRelativePath: string
): string {
  if (!imgRelativePath || !content) {
      return content;
  }

  // Add relative path IF img src does NOT start with 'http' OR '/'
  return content
      .replace(/src="(?!(http)|(\/))/g, `src="/${imgRelativePath}`)
      .replace(/\]\((?!(http)|(\/))/g, `](/${imgRelativePath}`);
}


export async function getStaticPaths() {
  const { blogPosts } = require("../../cache/blogPosts");
  const paths = blogPosts.map((post: any) => ({ params: { slug: post.url } }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }: { params: { slug: string } }) {
  const { blogPosts } = require("../../cache/blogPosts");

  const {fullFilePath, publicFilePath} = blogPosts.find((post: any) => post.url === slug);
  const mdFile = fs.readFileSync(fullFilePath, "utf-8");
  const { data: frontmatter, content } = matter(mdFile);
  
  const mdxSource = await serialize(addRelativePathToImages(content, publicFilePath));

  return {
    props: {
      frontmatter,
      content: mdxSource,
    },
  };
}

const Figure = ({ src }: { src: string }) => <img src={src} />;
const LinkNew = ({ url, name }: { url: string; name: string }) => {
  return (
    <a href={url} target="_blank">
      {name}
    </a>
  );
};

const components = {
  Figure: Figure,
  LinkNew: LinkNew,
};

export default function BlogPost({ frontmatter, content }: { frontmatter: any; content: any }) {
  return (
    <div>
      <h1>{frontmatter.title}</h1>
      <MDXRemote {...content} components={components} />
    </div>
  );
}

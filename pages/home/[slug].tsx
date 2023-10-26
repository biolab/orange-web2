import matter from "gray-matter";
import fs from "fs";
import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";
import remarkUnwrapImages from "remark-unwrap-images";
import { getImageData } from "@utils/images/getImageData";
import MdContent from "@components/MdContent/MdContent";
import addRelativePathToImages from "@utils/images/addRelativePathToImages";
import getAllMdFilesInDir from "@utils/getAllMdFilesInDir";
import path from "path";
import getPublicFilePath from "@utils/getPublicFilePath";
import slugify from "@utils/slugify";
import MainLayout from "@components/UiKit/MainLayout";

function getHomeContent() {
  const mdFiles = getAllMdFilesInDir(path.join("public", "home", "[slug]"));

  return mdFiles.map((postPath) => {
    const fileContents = fs.readFileSync(postPath, "utf8");
    const {
      data: { title },
    } = matter(fileContents);

    return {
      slug: slugify(title),
      title,
      postPath,
      fullFilePath: postPath,
      publicFilePath: getPublicFilePath(postPath),
    };
  });
}

export async function getStaticPaths() {
  return {
    paths: getHomeContent().map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const pageData = getHomeContent().find((post: any) => post.slug === slug);

  const mdFile = fs.readFileSync(pageData!.fullFilePath, "utf-8");
  const { data: frontmatter, content } = matter(mdFile);

  const mdxSource = await serialize(
    addRelativePathToImages(content, pageData!.publicFilePath),
    {
      mdxOptions: {
        remarkPlugins: [remarkGfm, remarkUnwrapImages], // Add remarkGfm to support MD tables
        rehypePlugins: [getImageData], // Adds webp src, width and height to images
      },
    },
  );

  return {
    props: {
      ...frontmatter,
      mdxSource,
    },
  };
}

export default function BlogPost({
  title,
  mdxSource,
}: {
  title: string;
  mdxSource: any;
}) {
  return (
    <MainLayout title={title} $width650 titleLeft>
      <MdContent content={mdxSource} />
    </MainLayout>
  );
}

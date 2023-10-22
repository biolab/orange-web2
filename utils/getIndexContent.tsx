import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import fs from "fs";

export default async function getIndexContent(filePath: string) {
  const mdFile = fs.readFileSync(filePath);

  const { data: frontmatter, content } = matter(mdFile);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      format: "mdx",
    },
  });

  return {
    props: { mdxSource, frontmatter },
  };
}

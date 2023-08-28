import React from "react";
import Adapt from "@components/UiKit/Adapt";
import getAllMdFilesInDir from "@utils/getAllMdFilesInDir";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import MdContent from "@components/MdContent/MdContent";

export async function getStaticProps() {
  const mdFiles = getAllMdFilesInDir(path.join("public", "docs"));

  const sections = [];
  let index = null;

  for (const file of mdFiles) {
    const mdFile = fs.readFileSync(file, "utf-8");
    const { data: frontmatter, content } = matter(mdFile);

    const mdxSource = await serialize(content);

    if (file.includes("_index.md")) {
      index = {
        ...frontmatter,
        mdxSource,
      };
      continue;
    }

    sections.push({
      ...frontmatter,
      mdxSource,
    });
  }

  return {
    props: {
      sections,
      index,
    },
  };
}

export default function Docs({ sections, index }: { sections: any[]; index: any }) {
  return (
    <Adapt $mt>
      <h1>{index.title}</h1>

      {sections.map(({ title, mdxSource, image }) => (
        <React.Fragment key={title}>
          <h2>{title}</h2>
          <MdContent key={title} content={mdxSource} />
        </React.Fragment>
      ))}

      <MdContent content={index.mdxSource} />
    </Adapt>
  );
}

import HomeSections from "@components/Home/Sections";
import Adapt from "@components/UiKit/Adapt";
import getAllMdFilesInDir from "@utils/getAllMdFilesInDir";
import getImageSize from "@utils/images/getImageSize";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import fs from "fs";

export async function getStaticProps() {
  const mdFiles = getAllMdFilesInDir(path.join("public", "getting-started"));

  const sections = [];

  for (const file of mdFiles) {
    const mdFile = fs.readFileSync(file, "utf-8");
    const { data: frontmatter, content } = matter(mdFile);

    const mdxSource = await serialize(content);

    sections.push({
      ...frontmatter,
      mdxSource,
      image: frontmatter.image ? getImageSize(path.join(path.sep, "getting-started", frontmatter.image)) : null,
    });
  }

  return {
    props: { sections },
  };
}

export default function GettingStarted({ sections }: { sections: any }) {
  return (
    <Adapt>
      <HomeSections sections={sections} />
    </Adapt>
  );
}

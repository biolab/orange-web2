import getAllMdFilesInDir from "@utils/getAllMdFilesInDir";
import matter from "gray-matter";
import fs from "fs";
import path from "path";
import getImageSize from "@utils/images/getImageSize";
import { serialize } from "next-mdx-remote/serialize";
import HomeSections from "@components/Home/Sections";

export async function getStaticProps() {
  const sections = getAllMdFilesInDir(path.join("public", "home", "sections"));
  const sectionsData = [];

  for (const file of sections) {
    const mdFile = fs.readFileSync(file, "utf-8");
    const { data: frontmatter, content } = matter(mdFile);

    const mdxSource = await serialize(content);

    sectionsData.push({
      ...frontmatter,
      excerpt: frontmatter.excerpt || null,
      mdxSource: mdxSource || null,
      image: frontmatter.image ? getImageSize(path.join(path.sep, "home", "sections", frontmatter.image)) : null,
    });
  }

  return {
    props: {
      sections: sectionsData,
    },
  };
}

export default function Home({ sections }: { sections: any }) {
  return (
    <div>
      <HomeSections sections={sections} />
    </div>
  );
}

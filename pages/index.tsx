import getAllMdFilesInDir from "@utils/getAllMdFilesInDir";
import matter from "gray-matter";
import fs from "fs";
import path from "path";
import getImageSize from "@utils/images/getImageSize";
import { serialize } from "next-mdx-remote/serialize";
import HomeSections from "@components/Home/Sections";
import HomeHeader from "@components/Home/Header";
import UsersSection from "@components/Home/UsersSection";
import DonateSection from "@components/Home/DonateSection";

export async function getStaticProps() {
  const mdFiles = getAllMdFilesInDir(path.join("public", "home"));

  const sections = mdFiles.filter((file) => file.includes("section_"));
  console.log(mdFiles);
  console.log(sections);
  const sectionsData = [];

  for (const file of sections) {
    const mdFile = fs.readFileSync(file, "utf-8");
    const { data: frontmatter, content } = matter(mdFile);

    const mdxSource = await serialize(content);

    sectionsData.push({
      ...frontmatter,
      mdxSource,
      image: frontmatter.image ? getImageSize(path.join(path.sep, "home", frontmatter.image)) : null,
    });
  }

  const donateMdFile = mdFiles.find((file) => file.includes("donate.md"));
  const { data: donateFrontmatter } = matter(fs.readFileSync(donateMdFile!, "utf-8")!);

  const usersMdFile = mdFiles.find((file) => file.includes("orange_users.md"));
  const { data: usersFrontmatter } = matter(fs.readFileSync(usersMdFile!, "utf-8")!);

  const testimonials = mdFiles.filter((file) => file.includes("testimonials"));
  const testimonialsData = [];

  for (const file of testimonials) {
    const mdFile = fs.readFileSync(file, "utf-8");
    const { data: frontmatter } = matter(mdFile);

    testimonialsData.push({
      ...frontmatter,
      image: frontmatter.image ? getImageSize(path.join(path.sep, "home", frontmatter.image)) : null,
    });
  }

  return {
    props: {
      sections: sectionsData,
      usersSection: {
        ...usersFrontmatter,
        testimonials: testimonialsData,
      },
      donateSection: donateFrontmatter,
    },
  };
}

export default function Home({
  sections,
  usersSection,
  donateSection,
}: {
  sections: any;
  usersSection: any;
  donateSection: any;
}) {
  return (
    <div>
      <HomeHeader />
      <HomeSections sections={sections} />
      <UsersSection {...usersSection} />
      <DonateSection {...donateSection} />
    </div>
  );
}

import React from "react";
import Adapt from "@components/UiKit/Adapt";
import getAllMdFilesInDir from "@utils/getAllMdFilesInDir";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import MdContent from "@components/MdContent/MdContent";
import MainLayout from "@components/UiKit/MainLayout";
import styled from "styled-components";
import device from "@styles/utils/breakpoints";

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

export default function Docs({
  sections,
  index,
}: {
  sections: any[];
  index: any;
}) {
  return (
    <MainLayout title={index.title}>
      <StSectionsWrapper>
        {sections.map(({ title, mdxSource }) => (
          <div key={title}>
            <h2>{title}</h2>
            <MdContent key={title} content={mdxSource} />
          </div>
        ))}
      </StSectionsWrapper>

      <MdContent content={index.mdxSource} />
    </MainLayout>
  );
}

const StSectionsWrapper = styled.div`
  padding: 0 30px;
  max-width: 1000px;
  margin: 80px auto;
  display: flex;
  justify-content: space-between;
  column-gap: 40px;
  row-gap: 60px;
  flex-wrap: wrap;

  h2 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 20px;
  }

  a {
    font-size: 18px;
    font-weight: 600;
    display: block;
    width: fit-content;
  }

  a + a {
    margin-top: 10px;
  }
`;

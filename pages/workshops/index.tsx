import HeroHeader from "@components/HeroHeader/HeroHeader";
import Adapt from "@components/UiKit/Adapt";
import MainLayout from "@components/UiKit/MainLayout";
import img from "@public/home/orange_illustration_landing.webp";
import getAllMdFilesInDir from "@utils/getAllMdFilesInDir";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import Link from "next/link";
import path from "path";
import styled, { css } from "styled-components";
import fs from "fs";
import MdContent from "@components/MdContent/MdContent";
import Button from "@components/UiKit/Button";
import React from "react";

export async function getStaticProps() {
  const mdFiles = getAllMdFilesInDir(path.join("public", "workshops"));

  const sections = [];

  for (const file of mdFiles) {
    const mdFile = fs.readFileSync(file, "utf-8");
    const { data: frontmatter, content } = matter(mdFile);

    const mdxSource = await serialize(content);

    sections.push({
      ...frontmatter,
      mdxSource,
    });
  }

  return {
    props: {
      sections,
    },
  };
}

export default function Workshops({
  sections,
}: {
  sections: { title: string; mdxSource: any }[];
}) {
  const [active, setActive] = React.useState(sections[0].title);

  return (
    <>
      <HeroHeader
        title={"Classroom Training"}
        img={img}
        bodyText={
          "After only a few hours of in-class training you will understand key machine learning algorithms and be able to apply them to a wide range of problems. No coding, no math - just visualizations and interactive data exploration!"
        }
      />
      <MainLayout title="Pick the right course for you">
        <Adapt $width924>
          <StSubtitle>
            or <Link href={"/training-inquiry"}>contact us</Link> for a
            custom-designed course
          </StSubtitle>

          <StTabs>
            {sections.map(({ title }) => {
              return (
                <StTab
                  onClick={() => setActive(title)}
                  key={title}
                  $active={active === title}
                >
                  {title}
                </StTab>
              );
            })}
          </StTabs>
          <StBox>
            <Adapt $width650 $mb>
              {sections.map((section) => {
                if (section.title !== active) {
                  return null;
                }

                return (
                  <StMdContent>
                    <MdContent
                      key={section.title}
                      content={section.mdxSource}
                    />
                  </StMdContent>
                );
              })}

              <Button as="a" href={"/training-inquiry"}>
                Get in touch
              </Button>
            </Adapt>
          </StBox>
        </Adapt>
      </MainLayout>
    </>
  );
}

const StSubtitle = styled.p`
  font-size: 22px;
  text-align: center;

  a {
    color: ${({ theme }) => theme.orange};
  }
`;

const StBox = styled.div`
  padding-top: 80px;
  border-radius: 0px 0px 6px 6px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-top: none;
  background: #fff;
  box-shadow: 0px 6px 20px 6px rgba(0, 0, 0, 0.04);
`;

const StTabs = styled.div`
  display: flex;
  align-items: end;
`;

const StTab = styled.div<{ $active?: boolean }>`
  display: flex;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 8px;
  background: ${({ theme }) => theme.purple};
  color: #fff;
  margin-top: 68px;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.purple};

  &:last-child {
    border-top-right-radius: 6px;
  }
  &:first-child {
    border-top-left-radius: 6px;
  }

  ${({ $active }) =>
    $active &&
    css`
      padding: 16px 8px;
      border: 1px solid ${({ theme }) => theme.borderColor};
      border-bottom: none;
      border-radius: 6px 6px 0px 0px;
      background: #fff;
      color: #000;
    `}
`;

const StMdContent = styled.div`
  margin-bottom: 50px;

  h3 {
    font-weight: 700;
  }
`;

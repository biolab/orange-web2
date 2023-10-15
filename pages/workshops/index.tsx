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
import Image from "@components/Image/Image";
import getImageSize from "@utils/images/getImageSize";
import TestimonialImage from "@public/workshops/janez.webp";
import device from "@styles/utils/breakpoints";

export async function getStaticProps() {
  const relativePath = path.join("public", "workshops");
  const mdFiles = getAllMdFilesInDir(relativePath);

  const sections = [];

  for (const file of mdFiles) {
    const dirInPublic = path.dirname(path.relative("public", file));

    const mdFile = fs.readFileSync(file, "utf-8");
    const { data: frontmatter, content } = matter(mdFile);

    const mdxSource = await serialize(content);

    sections.push({
      ...frontmatter,
      image: frontmatter.image
        ? getImageSize(path.join(path.sep, dirInPublic, frontmatter.image))
        : null,
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
  sections: { title: string; image: any; mdxSource: any }[];
}) {
  const [active, setActive] = React.useState(sections[0].title);

  const activeSection = React.useMemo(
    () => sections.find((s) => s.title === active),
    [active, sections]
  );

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
        <StSubtitle>
          or <Link href={"/training-inquiry"}>contact us</Link> for a
          custom-designed course
        </StSubtitle>
        <StAdapt $width924>
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
            {activeSection && (
              <>
                <Adapt $width650 $mb>
                  <StMdContent key={activeSection.title}>
                    <MdContent
                      key={activeSection.title}
                      content={activeSection.mdxSource}
                    />
                  </StMdContent>
                  <Button as="a" href={"/training-inquiry"}>
                    Get in touch
                  </Button>
                </Adapt>
                {activeSection.image && (
                  <StImage
                    src={activeSection.image.src}
                    width={activeSection.image.width}
                    height={activeSection.image.height}
                    alt={activeSection.title}
                  />
                )}
              </>
            )}
          </StBox>

          <StTestimonialWrapper>
            <p>
              “Playing with data is fun. It&apos;s like a detective story, where
              data gives you clues and you dig ever deeper into the mystery
              until finding the hidden treasure, the cunning murderer, or the
              mischievous gene.”
            </p>

            <StAuthorWrapper>
              <Image
                src={TestimonialImage.src}
                width={TestimonialImage.width}
                height={TestimonialImage.height}
                alt="Janez Demšar"
              />
              <div>
                <p>
                  <b>Janez Demšar, prof. dr.</b>
                </p>
                <p>Lecturer</p>
              </div>
            </StAuthorWrapper>
          </StTestimonialWrapper>
        </StAdapt>
      </MainLayout>
    </>
  );
}

const StAdapt = styled(Adapt)`
  @media ${device.S} {
    padding-left: 0;
    padding-right: 0;
  }
`;

const StAuthorWrapper = styled.div`
  margin-top: 42px;
  display: flex;
  align-items: center;
  gap: 30px;

  @media ${device.S} {
    margin-top: 32px;
    /* gap: 40px; */
  }

  > div {
    p + p {
      margin-top: 6px;
    }
  }
`;

const StTestimonialWrapper = styled.div`
  background: #fff;
  position: relative;
  left: 50%;
  transform: translate(-50%, -39%);
  box-shadow: 0px 6px 20px 0px rgba(0, 0, 0, 0.06);
  border: 1px solid ${({ theme }) => theme.borderColor};
  padding: 60px;
  border-radius: 6px;
  max-width: 655px;
  font-size: 20px;

  @media ${device.M} {
    padding: 48px;
  }

  @media ${device.S} {
    padding: 32px;
    max-width: 92%;
    font-size: 16px;
    transform: translate(-50%, -12%);
  }

  img {
    width: 94px;
    height: 94px;

    @media ${device.S} {
      width: 82px;
      height: 82px;
    }
  }
`;

const StSubtitle = styled.p`
  font-size: 22px;
  text-align: center;
  margin: -40px auto 0;

  @media ${device.M} {
    font-size: 20px;
    max-width: 240px;
    text-align: center;
  }

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
  margin-top: 68px;
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
  font-weight: 600;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.purple};
  text-align: center;
  font-size: 18px;

  @media ${device.L} {
    font-size: 16px;
  }
  @media ${device.S} {
    font-size: 14px;
  }

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

const StImage = styled(Image)`
  width: 100%;
`;

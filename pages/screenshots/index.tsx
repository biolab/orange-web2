import React from "react";
import styled from "styled-components";
import { readFileSync } from "fs";
import matter from "gray-matter";
import getAllMdFilesInDir from "@utils/getAllMdFilesInDir";
import Image from "@components/Image/Image";
import getOptimizedImageAttributes, {
  ImageProps,
} from "@utils/images/getOptimizedImageAttributes";
import path from "path";
import MainLayout from "@components/UiKit/MainLayout";
import device from "@styles/utils/breakpoints";
import ImageGallery from "@components/ImageGallery/ImageGallery";
import sortByWeight from "@utils/sortByWeight";

interface IScreenshots {
  title: string;
  image: ImageProps;
  thumbnailImage: ImageProps;
  weight: number;
}

export async function getStaticProps() {
  const examplesMdFiles = getAllMdFilesInDir("public/screenshots");

  const screenshots: IScreenshots[] = [];

  for (const file of examplesMdFiles) {
    const dirInPublic = path.dirname(path.relative("public", file));
    const mdFile = readFileSync(file, "utf-8");
    const { data: frontmatter } = matter(mdFile);

    screenshots.push({
      ...frontmatter,
      image: getOptimizedImageAttributes(
        path.join(path.sep, dirInPublic, frontmatter.image),
      ) as ImageProps,
      thumbnailImage: getOptimizedImageAttributes(
        path.join(path.sep, dirInPublic, frontmatter.thumbnailImage),
      ) as ImageProps,
    } as IScreenshots);
  }

  return {
    props: {
      screenshots: sortByWeight(screenshots),
    },
  };
}

export default function Examples({
  screenshots,
}: {
  screenshots: IScreenshots[];
}) {
  return (
    <MainLayout title="Screenshots">
      <ImageGallery selector="[data-gallery]">
        <StyledListWrapper>
          {screenshots.map(({ title, image, thumbnailImage }) => (
            <Item key={title}>
              <a href={image.src} data-gallery>
                <Image
                  key={thumbnailImage.src}
                  {...thumbnailImage}
                  alt={title}
                />
              </a>

              <h2>{title}</h2>
            </Item>
          ))}
        </StyledListWrapper>
      </ImageGallery>
    </MainLayout>
  );
}

const StyledListWrapper = styled.ul`
  display: grid;
  gap: 62px;
  grid-template-columns: auto auto auto;
  padding-top: 30px;
  border-top: 1px solid ${({ theme }) => theme.borderColor};

  @media ${device.M} {
    grid-template-columns: auto auto;
    gap: 48px;
  }

  @media ${device.XS} {
    grid-template-columns: auto;
    gap: 48px;
  }
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 12px;

  h2 {
    text-align: center;
    font-weight: 600;
    margin-top: auto;
    font-size: 18px;

    @media ${device.M} {
      font-size: 16px;
      grid-template-columns: auto auto;
      gap: 48px;
    }
  }

  img {
    width: 100%;
  }
`;

const ItemImage = styled.div`
  flex: 30;

  img {
    width: 100%;
  }
`;

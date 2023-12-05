import React from "react";
import styled from "styled-components";
import { readFileSync } from "fs";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import remarkGfm from "remark-gfm";
import { getImageData } from "@utils/images/getImageData";
import remarkUnwrapImages from "remark-unwrap-images";
import { serialize } from "next-mdx-remote/serialize";
import matter from "gray-matter";
import getAllMdFilesInDir from "@utils/getAllMdFilesInDir";
import Image from "@components/Image/Image";
import TagsList from "@components/TagsList/TagsList";
import getOptimizedImageAttributes, {
  ImageProps,
} from "@utils/images/getOptimizedImageAttributes";
import path from "path";
import MainLayout from "@components/UiKit/MainLayout";
import useTags from "@components/TagsList/useTags";
import getTopTags from "@utils/getTopTags";
import usePagination from "@hooks/usePagination";
import Pagination from "@components/Pagination/Pagination";
import BlogTags from "@components/Blog/Tags";
import device from "@styles/utils/breakpoints";
import Button from "@components/UiKit/Button";

interface IExample {
  title: string;
  images: ImageProps[];
  workflows: string[];
  content: MDXRemoteSerializeResult;
  download: string;
}

export async function getStaticProps() {
  const examplesMdFiles = getAllMdFilesInDir("public/examples");

  const examples: IExample[] = [];

  for (const file of examplesMdFiles) {
    const dirInPublic = path.dirname(path.relative("public", file));
    const mdFile = readFileSync(file, "utf-8");
    const { data: frontmatter, content } = matter(mdFile);

    const mdxSource = await serialize(content, {
      mdxOptions: {
        remarkPlugins: [remarkGfm, remarkUnwrapImages], // Add remarkGfm to support MD tables
        rehypePlugins: [getImageData], // Add getImageData to add width and height to images
      },
    });

    examples.push({
      ...(frontmatter as IExample),
      download:
        path.join(path.sep, dirInPublic, frontmatter.download),
      images:
        frontmatter.images?.map((image: string) =>
          getOptimizedImageAttributes(path.join(path.sep, dirInPublic, image)),
        ) || [],
      content: mdxSource,
    });
  }

  const tags = examples.flatMap((example) => example.workflows).filter(Boolean);

  return {
    props: {
      examples,
      tags: getTopTags(tags),
    },
  };
}

export default function Examples({
  examples,
  tags,
}: {
  examples: IExample[];
  tags: string[];
}) {
  const { filteredData, selectedTag, allTags, onTagClick } = useTags(
    examples,
    "workflows",
    tags,
  );

  const { itemsOnPage, setPage, page, noOfPages, setItems } = usePagination(
    examples,
    5,
  );

  React.useEffect(() => {
    setItems(selectedTag ? filteredData : examples);
  }, [examples, filteredData, selectedTag, setItems]);

  return (
    <MainLayout title="Examples">
      <TagsList
        tags={allTags}
        selectedTag={selectedTag}
        onTagClick={onTagClick}
      />
      <StyledListWrapper>
        {itemsOnPage.map(
          ({ title, images, content, workflows: workflowTags, download }) => (
            <Item key={title}>
              <ItemContent>
                <BlogTags tags={workflowTags} onTagClick={onTagClick} />
                <h2>{title}</h2>

                <StContentWrapper>
                  <MDXRemote {...content} />
                </StContentWrapper>

                <Button
                  as="a"
                  href={download}
                >
                  Download
                </Button>
              </ItemContent>

              <ItemImage>
                {images &&
                  images.map((image: any) => (
                    <Image key={image.src} {...image} alt="" />
                  ))}
              </ItemImage>
            </Item>
          ),
        )}
      </StyledListWrapper>

      <Pagination noOfPages={noOfPages} page={page} setPage={setPage} />
    </MainLayout>
  );
}

const StyledListWrapper = styled.ul`
  padding-top: 30px;
  border-top: 1px solid ${({ theme }) => theme.borderColor};
`;

const StContentWrapper = styled.div`
  p {
    font-size: 20px;
    letter-spacing: 0.2px;
  }
`;

const Item = styled.li`
  display: flex;
  gap: 60px;

  @media ${device.M} {
    flex-direction: column;
    gap: 30px;
  }

  h2 {
    font-size: 34px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  a {
    margin-top: 30px;
  }

  & + & {
    margin-top: 130px;
  }

  img {
    width: 250px;
  }
`;

const ItemContent = styled.div`
  flex: 20;
`;
const ItemImage = styled.div`
  flex: 30;

  img {
    width: 100%;
  }
`;

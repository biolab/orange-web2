import MdContent from "@components/MdContent/MdContent";
import MainLayout from "@components/UiKit/MainLayout";
import widgetCatalog from "@public/widget-catalog/widgets.json";
import device from "@styles/utils/breakpoints";
import { getImageData } from "@utils/images/getImageData";
import slugify from "@utils/slugify";
import fs from "fs";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import Link from "next/link";
import path from "path";
import React from "react";
import remarkGfm from "remark-gfm";
import remarkUnwrapImages from "remark-unwrap-images";
import styled, { css } from "styled-components";
import rehypeHighlight from "rehype-highlight";
import rehypeAttrs from "rehype-attr";

export interface Widget {
  title: string;
  category: string;
  keywords: string[];
  background: string;
  icon: string;
  url: string;
}

export async function getStaticPaths() {
  const paths = widgetCatalog.flatMap(([_, widgets]: any) =>
    widgets
      .map((widget: Widget) =>
        widget.url
          ? {
              params: {
                category: slugify(widget.category),
                widget: widget.url,
              },
            }
          : undefined
      )
      .filter(Boolean)
  );

  return {
    paths,
    fallback: false,
  };
}

function preprocessMarkdown(content: string): string {
  /* Replace, e.g. ![](image.jpg){width="300"}
     with ![](image.jpg)<!--rehype:width=300-->
    so that rehype-attr will process it.

    We may add other attributes in the future.

    I'd prefer remark-attr instead of rehype-attr,
    but it is broken and unmaintained since 2020. */
  return content.replace(/(!\[\]\([^)]+\))\{width="([^"]+)"\}/g, (_, img, width) => {
    return `${img}<!--rehype:width=${width}-->`;
  });
}

export async function getStaticProps({ params }: any) {
  const dir = path.join("public", "widget-catalog", params.category);
  const mdFile = path.join(dir, `${params.widget}.md`);
  const fileContents = fs.readFileSync(mdFile, "utf8");

  const { content } = matter(fileContents);

  const processedContent = preprocessMarkdown(content);
  const mdxSource = await serialize(processedContent, {
    mdxOptions: {
      remarkPlugins: [remarkGfm, remarkUnwrapImages], // Add remarkGfm to support MD tables
      rehypePlugins: [
        [rehypeAttrs, { properties: 'attr' }],
        rehypeHighlight as any,
        getImageData], // Add getImageData to add width and height to images
      format: "md",
    },
  });

  return {
    props: {
      mdxSource,
      widgetCatalog,
      category: params.category,
      widget: params.widget,
    },
  };
}

export default function Home({
  mdxSource,
  widgetCatalog,
  category,
  widget,
}: any) {
  const [openedCategory, setOpenedCategory] = React.useState(category);

  const toggleCategory = React.useCallback(
    (category: string) => {
      setOpenedCategory(openedCategory === category ? "" : category);
    },
    [openedCategory]
  );

  return (
    <MainLayout>
      <StWrapper>
        <StSidebar>
          <StH3>Widgets</StH3>
          {widgetCatalog.map(([category, widgets]: any) => {
            return (
              <React.Fragment key={category}>
                <StCategory onClick={() => toggleCategory(slugify(category))}>
                  {category}
                </StCategory>

                {openedCategory === slugify(category) && (
                  <StUl>
                    {widgets.map((w: any) => {
                      if (!w.url) {
                        return null;
                      }
                      return (
                        <li key={w.url}>
                          <StLink
                            href={`/widget-catalog/${slugify(category)}/${
                              w.url
                            }`}
                            $active={widget === w.url}
                          >
                            {w.title}
                          </StLink>
                        </li>
                      );
                    })}
                  </StUl>
                )}
              </React.Fragment>
            );
          })}
        </StSidebar>
        <StMainWrapper>
          <MdContent content={mdxSource} />
        </StMainWrapper>
      </StWrapper>
    </MainLayout>
  );
}

const StH3 = styled.h3`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const StCategory = styled.h4`
  cursor: pointer;
  user-select: none;
  margin-top: 8px;
  font-size: 18px;

  &:hover {
    text-decoration: underline;
  }
`;

const StUl = styled.ul`
  padding-left: 12px;
  margin-top: 6px;
  li + li {
    margin-top: 4px;
  }
`;

const StLink = styled(Link)<{ $active?: boolean }>`
  ${(props) =>
    props.$active &&
    css`
      font-weight: 600;
    `}

  &:hover {
    text-decoration: underline;
  }
`;

const StWrapper = styled.div`
  display: flex;
  @media ${device.M} {
    justify-content: center;
  }
`;

const StMainWrapper = styled.div`
  width: 714px;
`;

const StSidebar = styled.nav`
  width: 356px;
  margin-top: 28px;

  @media ${device.M} {
    display: none;
  }
`;

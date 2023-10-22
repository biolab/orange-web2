import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import fs from "fs";
import MainLayout from "@components/UiKit/MainLayout";
import { MDXRemote } from "next-mdx-remote";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import styled from "styled-components";
import Link from "next/link";
import { Heading2 } from "@components/UiKit/Typography";
import getIndexContent from "@utils/getIndexContent";

export async function getStaticProps() {
  return await getIndexContent(path.join("public", "faq", "_index.mdx"));
}

export default function GettingStarted({ mdxSource, frontmatter }: any) {
  return (
    <MainLayout title={frontmatter.title}>
      <MDXRemote
        {...mdxSource}
        components={{
          Accordion: ({ children }) => (
            <Accordion transition allowMultiple transitionTimeout={250}>
              {children}
            </Accordion>
          ),
          AccordionItem: AccordionItem,
          Link: ({ url, name }) => <Link href={url}>{name}</Link>,
          h2: StHeading2,
        }}
      />
    </MainLayout>
  );
}

const StHeading2 = styled(Heading2)`
  margin-top: 30px;
`;

const AccordionItem = styled(Item)`
  border: 1px solid ${(props) => props.theme.borderColor};
  border-top-width: 1px;
  border-top: none;
  overflow: hidden;

  &:first-of-type {
    border-top: 1px solid ${(props) => props.theme.borderColor};
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }
  &:last-of-type {
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }

  .szh-accordion__item {
    &-btn {
      cursor: pointer;
      display: flex;
      align-items: center;
      width: 100%;
      margin: 0;
      padding: 16px;
      font-size: 18px;
      font-weight: 400;
      text-align: left;

      background-color: transparent;
      border: none;

      &[aria-expanded="true"] {
        background-color: #f6f6f6d3 !important;
        box-shadow: inset 0 -1px 0 0 ${(props) => props.theme.borderColor};
      }

      &:hover {
        background-color: #f6f6f6b7 !important;
      }
    }

    &--expanded {
    }

    &-content {
      transition: height 0.25s cubic-bezier(0, 0, 0, 1);
      font-size: 18px;

      a {
        text-decoration: underline;
      }

      pre {
        font-size: 16px;
        margin-top: 8px;
      }
    }

    &-panel {
      padding: 1rem;
    }
  }

  .chevron-down {
    margin-left: auto;
    transition: transform 0.25s cubic-bezier(0, 0, 0, 1);
  }

  &.szh-accordion__item--expanded {
    .szh-accordion__item-btn {
      background-color: #e7e7e7;
    }
    .chevron-down {
      transform: rotate(180deg);
    }
  }
`;

import React from "react";
import styled from "styled-components";
import { readFileSync } from "fs";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import remarkGfm from "remark-gfm";
import { rehypeImageSize } from "@utils/images/rehypeImageSize";
import remarkUnwrapImages from "remark-unwrap-images";
import { serialize } from "next-mdx-remote/serialize";
import matter from "gray-matter";
import getAllMdFilesInDir from "@utils/getAllMdFilesInDir";
import Image from "@components/Image/Image";
import TagsList from "@components/TagsList/TagsList";

const Wrapper = styled.div`
  padding: 100px 38px;
`;

const Item = styled.li`
  padding: 38px 0;

  & + & {
    border-top: 1px solid #ccc;
  }

  img {
    width: 250px;
  }
`;

interface IWorkflow {
  title: string;
  images: string[];
  workflows: string[];
  content: MDXRemoteSerializeResult;
  download: string;
}

export async function getStaticProps() {
  const workflowsMdFiles = getAllMdFilesInDir("content/workflows");

  const workflows: IWorkflow[] = [];
  let page = null;

  for (const file of workflowsMdFiles) {
    const mdFile = readFileSync(file, "utf-8");
    const { data: frontmatter, content } = matter(mdFile);

    const mdxSource = await serialize(content, {
      mdxOptions: {
        remarkPlugins: [remarkGfm, remarkUnwrapImages], // Add remarkGfm to support MD tables
        rehypePlugins: [rehypeImageSize], // Add rehypeImageSize to add width and height to images
      },
    });

    if (file.endsWith("_index.md")) {
      page = frontmatter;
    } else {
      workflows.push({
        ...(frontmatter as IWorkflow),
        content: mdxSource,
      });
    }
  }

  const tags = [...new Set(workflows.flatMap((workflow) => workflow.workflows).filter(Boolean))];

  return {
    props: {
      page,
      workflows,
      tags,
    },
  };
}

export default function Workflows({
  page,
  workflows,
  tags,
}: {
  page: { title: string };
  workflows: IWorkflow[];
  tags: string[];
}) {
  const [selectedTag, setSelectedTag] = React.useState<string | null>(null);
  const onTagClick = React.useCallback(
    (tag: string) => setSelectedTag((selectedTag) => (selectedTag === tag ? null : tag)),
    []
  );
  const filteredWorkflows = React.useMemo(
    () => (selectedTag ? workflows.filter((workflow) => workflow.workflows?.includes(selectedTag)) : workflows),
    [workflows, selectedTag]
  );

  return (
    <Wrapper>
      <h1>{page.title}</h1>

      <TagsList tags={tags} selectedTag={selectedTag} onTagClick={onTagClick} />

      <ul>
        {filteredWorkflows.map(({ title, images, content, workflows: workflowTags, download }, index) => (
          <Item key={index}>
            <div>{title}</div>

            {images && images.map((image) => <Image key={image} src={image} />)}
            <TagsList tags={workflowTags} selectedTag={selectedTag} onTagClick={onTagClick} />

            <MDXRemote {...content} />

            <a href={`https://download.biolab.si/download/files/workflows/orange/${download}`}>Download</a>
          </Item>
        ))}
      </ul>
    </Wrapper>
  );
}

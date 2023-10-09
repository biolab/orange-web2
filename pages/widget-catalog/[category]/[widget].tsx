import MdContent from "@components/MdContent/MdContent";
import MainLayout from "@components/UiKit/MainLayout";
import widgetCatalog from "@public/widget-catalog/widgets.json";
import { getImageData } from "@utils/images/getImageData";
import fs from "fs";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import remarkGfm from "remark-gfm";
import remarkUnwrapImages from "remark-unwrap-images";
import styled from "styled-components";
interface Widget {
  title: string;
  category: string;
  keywords: string[];
  background: string;
  icon: string;
  url: string;
}

function addRelativePathToImages(content: string, imgRelativePath: string): string {
  if (!imgRelativePath || !content) {
    return content;
  }

  // Widgets specific fix
  return content.replaceAll("../images", imgRelativePath);
}

export async function getStaticPaths() {
  const paths = widgetCatalog.flatMap(([_, widgets]: any) =>
    widgets
      .map((widget: Widget) => {
        if (!widget.url) {
          return undefined;
        }
        return { params: { category: widget.category.toLowerCase(), widget: widget.url.toLowerCase() } };
      })
      .filter((p) => p)
  );

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const dir = path.join("public", "widget-catalog", params.category);
  const mdFile = path.join(dir, `${params.widget}.md`);
  const fileContents = fs.readFileSync(mdFile, "utf8");

  const { content } = matter(
    addRelativePathToImages(fileContents, path.join("/widget-catalog", params.category, "images"))
  );

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm, remarkUnwrapImages], // Add remarkGfm to support MD tables
      rehypePlugins: [getImageData], // Add getImageData to add width and height to images
    },
  });

  return {
    props: {
      mdxSource,
    },
  };
}

export default function Home({ mdxSource }: any) {
  return (
    <MainLayout>
      <StWrapper>
        <StSidebar>
          <div>Sidebar</div>
        </StSidebar>
        <StMainWrapper>
          <MdContent content={mdxSource} />
        </StMainWrapper>
      </StWrapper>
    </MainLayout>
  );
}

const StWrapper = styled.div`
  display: flex;
`;
const StMainWrapper = styled.div`
  width: 714px;
`;

const StSidebar = styled.aside`
  width: 356px;
`;

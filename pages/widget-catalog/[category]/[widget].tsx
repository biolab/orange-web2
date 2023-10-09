import MdContent from "@components/MdContent/MdContent";
import MainLayout from "@components/UiKit/MainLayout";
import widgetCatalog from "@public/widget-catalog/widgets.json";
import fs from "fs";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
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
  console.log(params);
  const dir = path.join("public", "widget-catalog", params.category);
  const mdFile = path.join(dir, `${params.widget}.md`);
  const fileContents = fs.readFileSync(mdFile, "utf8");

  const { data: frontmatter, content } = matter(
    addRelativePathToImages(fileContents, path.join("/widget-catalog", params.category, "images"))
  );

  const mdxSource = await serialize(content);

  return {
    props: {
      frontmatter,
      mdxSource,
    },
  };
}

export default function Home({ frontmatter, mdxSource }: any) {
  console.log(frontmatter);
  console.log(mdxSource);
  return (
    <MainLayout title="Widget Catalog">
      {/* {frontmatter.title} */}

      <MdContent content={mdxSource} />
    </MainLayout>
  );
}

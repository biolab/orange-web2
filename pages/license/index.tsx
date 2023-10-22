import path from "path";
import MainLayout from "@components/UiKit/MainLayout";
import MdContent from "@components/MdContent/MdContent";
import getIndexContent from "@utils/getIndexContent";

export async function getStaticProps() {
  return await getIndexContent(path.join("public", "license", "_index.md"));
}

export default function GettingStarted({
  mdxSource,
  frontmatter,
}: {
  mdxSource: any;
  frontmatter: any;
}) {
  return (
    <MainLayout title={frontmatter.title}>
      <MdContent content={mdxSource} />
    </MainLayout>
  );
}

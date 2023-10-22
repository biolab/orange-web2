import path from "path";
import MainLayout from "@components/UiKit/MainLayout";
import MdContent from "@components/MdContent/MdContent";
import getIndexContent from "@utils/getIndexContent";

export async function getStaticProps() {
  return await getIndexContent(path.join("public", "privacy", "_index.md"));
}

export default function GettingStarted({ mdxSource, frontmatter }: any) {
  return (
    <MainLayout title={frontmatter.title}>
      <MdContent content={mdxSource} />
    </MainLayout>
  );
}

import path from "path";
import MainLayout from "@components/UiKit/MainLayout";
import MdContent from "@components/MdContent/MdContent";
import getIndexContent from "@utils/getIndexContent";

export async function getStaticPaths() {
  const paths = ["license", "privacy", "citation"].map((path) => ({
    params: { slug: path },
  }));

  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({
  params: { slug },
}: {
  params: { slug: string };
}) {
  return await getIndexContent(path.join("public", slug, "_index.md"));
}

export default function HomeSlug({
  mdxSource,
  frontmatter,
}: {
  mdxSource: any;
  frontmatter: any;
}) {
  return (
    <MainLayout title={frontmatter.title} $width714 $mb>
      <MdContent content={mdxSource} />
    </MainLayout>
  );
}

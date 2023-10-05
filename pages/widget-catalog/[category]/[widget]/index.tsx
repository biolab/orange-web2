import widgetCatalog from "public/widget-catalog/widgets.json";

export async function getStaticPaths() {
  // TODO: get all paths

  return {
    paths: [{ params: { category: "data", widget: "file" } }],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  console.log(params);
  return { props: params };
}

export default function Home({ category, widget }: any) {
  return (
    <div>
      {category} {widget}
    </div>
  );
}

import widgetCatalog from "@public/widget-catalog/widgets.json";

export async function getStaticPaths() {
  const paths = widgetCatalog.flatMap(([_, widgets]) =>
    widgets.map((widget) => ({
      params: { category: widget.category.toLowerCase(), widget: widget.title.toLowerCase() },
    }))
  );

  console.log(paths);

  return {
    paths,
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

import widgetCatalog from "public/widget-catalog/widgets.json";
import Image from "@components/Image/Image";
import Link from "next/link";

export async function getStaticProps() {
  return {
    props: {
      catalog: widgetCatalog,
    },
  };
}

export default function Home({ catalog }: { catalog: any[] }) {
  return (
    <div>
      {catalog.map(([category, widgets]) => (
        <div key={category}>
          <h2>{category}</h2>

          <div>
            {widgets.map((w: any) => (
              <Link href={`/widget-catalog/${category.toLowerCase()}/${w.url}`} key={w.title}>
                <Image src={`widget-catalog/${w.icon}`} width={100} height={100} alt="" />
                {w.title}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

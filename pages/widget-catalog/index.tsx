import widgetCatalog from "@public/widget-catalog/widgets.json";
import Image from "@components/Image/Image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import MainLayout from "@components/UiKit/MainLayout";
import slugify from "@utils/slugify";

const getIconWebpPath = (icon: string) => {
  return `widget-catalog/${icon}`
    .replace("widget-icons", "widget-icons/__webp-images__")
    .replace(".png", ".webp");
};

const StCategoryWrapper = styled.div`
  margin-bottom: 80px;
  h2 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 36px;
    line-height: 1.1;
    font-weight: 700;
  }
`;
const StWidgetsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
`;

const StInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 86px;
`;

const StSearchInput = styled.input`
  width: 233px;
  height: 42px;
  border: 1px solid #999;
  padding: 11px 13px;
  border-radius: 5px;
`;

const StWidget = styled.div`
  width: 135px;
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 8px;
  gap: 8px;

  img {
    width: 60px;
    height: 60px;
  }

  p {
    max-width: 110px;
    text-align: center;
  }
`;

export async function getStaticProps() {
  return {
    props: {
      widgetCatalog,
    },
  };
}

export default function Home({ widgetCatalog }: { widgetCatalog: any[] }) {
  const [query, setQuery] = React.useState("");

  const catalog = React.useMemo(() => {
    if (!query) {
      return widgetCatalog;
    }

    return widgetCatalog
      .map(([category, widgets]: any) => {
        const _widgets = widgets.filter(
          (w: any) =>
            w.title
              .replace(/\s/g, "")
              .toLowerCase()
              .indexOf(query.replace(/\s/g, "").toLowerCase()) !== -1
        );

        if (_widgets.length === 0) {
          return null;
        }

        return [category, _widgets];
      })
      .filter(Boolean);
  }, [widgetCatalog, query]);

  return (
    <MainLayout title="Widget Catalog">
      <StInputWrapper>
        <StSearchInput
          type="text"
          placeholder="Search widgets"
          value={query}
          onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
            setQuery(e.target.value)
          }
        />
      </StInputWrapper>

      <div>
        {catalog.map(([category, widgets]) => (
          <StCategoryWrapper key={category}>
            <h2>{category}</h2>

            <StWidgetsWrapper>
              {widgets.map((w: any) => {
                return (
                  <Link
                    scroll={false}
                    href={`/widget-catalog/${slugify(category)}/${w.url}`}
                    key={w.title}
                  >
                    <StWidget>
                      <Image
                        src={getIconWebpPath(w.icon)}
                        width={60}
                        height={60}
                        alt={w.title}
                      />
                      <p>{w.title}</p>
                    </StWidget>
                  </Link>
                );
              })}
            </StWidgetsWrapper>
          </StCategoryWrapper>
        ))}
      </div>
    </MainLayout>
  );
}

import { NextSeo } from "next-seo";
import { OpenGraph } from "next-seo/lib/types";
import React from "react";
import styled from "styled-components";
import Adapt from "./Adapt";
import { Heading1 } from "./Typography";

const H1 = styled(Heading1)`
  margin-bottom: 50px !important;
  text-align: center;
`;

const MainLayout = ({
  children,
  title,
  justSEO,
  openGraph,
  $width650,
}: {
  children: React.ReactNode | React.ReactNode[];
  title?: string;
  justSEO?: boolean;
  openGraph?: OpenGraph;
  $width650?: boolean;
}) => {
  const seo = React.useMemo(
    () => (
      <NextSeo
        title={`Orange Data Mining - ${title}`}
        openGraph={{
          title: `Orange Data Mining - ${title}`,
          ...(openGraph ? openGraph : {}),
        }}
      />
    ),
    [openGraph, title]
  );

  if (justSEO) {
    return (
      <>
        {seo}
        {children}
      </>
    );
  }
  return (
    <>
      {seo}
      <Adapt $mt $mb $width650={$width650}>
        {title && <H1> {title}</H1>}
        {children}
      </Adapt>
    </>
  );
};

export default MainLayout;

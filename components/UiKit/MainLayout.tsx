import { NextSeo } from "next-seo";
import { OpenGraph } from "next-seo/lib/types";
import React from "react";
import styled, { css } from "styled-components";
import Adapt from "./Adapt";
import { Heading1 } from "./Typography";

const H1 = styled(Heading1)<{ $leftAlign?: boolean }>`
  margin-bottom: 50px !important;
  text-align: center;

  ${(props) =>
    props.$leftAlign &&
    css`
      text-align: left;
    `}
`;

const MainLayout = ({
  children,
  title,
  justSEO,
  openGraph,
  $width650,
  $width714,
  titleLeft,
}: {
  children?: React.ReactNode | React.ReactNode[];
  title?: string;
  justSEO?: boolean;
  openGraph?: OpenGraph;
  $width650?: boolean;
  $width714?: boolean;
  titleLeft?: boolean;
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
    [openGraph, title],
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
      <Adapt $mt $mb $width650={$width650} $width714={$width714}>
        {title && <H1 $leftAlign={titleLeft}> {title}</H1>}
        {children}
      </Adapt>
    </>
  );
};

export default MainLayout;

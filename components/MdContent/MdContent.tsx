import ImageGallery from "@components/ImageGallery/ImageGallery";
import { MDXRemote } from "next-mdx-remote";
import Image from "@components/Image/Image";
import {
  ContentStyle,
  ScreenshotImage,
  VideoResponsive,
} from "./MdContent.styled";
import NextLink from "next/link";

type ImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

const Video = ({ src }: { src: string }) => (
  <video controls>
    <source src={src} type="video/mp4" />
  </video>
);
const WindowScreenshot = ({ src, alt, width, height }: ImageProps) => (
  <a href={src} data-gallery>
    <ScreenshotImage src={src} alt={alt} width={width} height={height} />
  </a>
);
const Figure = ({ src, alt, width, height }: ImageProps) => (
  <a href={src} data-gallery>
    <Image src={src} alt={alt} width={width} height={height} />
  </a>
);
const LinkNew = ({ url, name }: { url: string; name: string }) => {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      {name}
    </a>
  );
};
const Link = ({ url, name }: { url: string; name: string }) => {
  return <NextLink href={url}>{name}</NextLink>;
};
const YouTube = ({ embedId }: { embedId: string }) => (
  <VideoResponsive>
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </VideoResponsive>
);

export default function MdContent({ content }: { content: any }) {
  return (
    <ContentStyle>
      <ImageGallery selector="[data-gallery]">
        <MDXRemote
          {...content}
          components={{
            Video,
            YouTube,
            Figure,
            LinkNew,
            Link,
            WindowScreenshot,
            WorkflowScreenshot: WindowScreenshot,
            img: Figure,
          }}
        />
      </ImageGallery>
    </ContentStyle>
  );
}

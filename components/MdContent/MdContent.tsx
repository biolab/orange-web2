import ImageGallery from "@components/ImageGallery/ImageGallery";
import { MDXRemote } from "next-mdx-remote";
import Image from "@components/Image/Image";
import styled from "styled-components";

const ScreenshotImage = styled(Image)`
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const VideoResponsive = styled.div`
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 0;

  iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
  }
`;

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
    <ScreenshotImage loading="lazy" src={src} alt={alt} width={width} height={height} />
  </a>
);
const Figure = ({ src, alt, width, height }: ImageProps) => (
  <a href={src} data-gallery>
    <Image loading="lazy" src={src} alt={alt} width={width} height={height} />
  </a>
);
const LinkNew = ({ url, name }: { url: string; name: string }) => {
  return (
    <a href={url} target="_blank">
      {name}
    </a>
  );
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
    <ImageGallery selector="[data-gallery]">
      <MDXRemote
        {...content}
        components={{
          Video,
          YouTube,
          Figure,
          LinkNew,
          WindowScreenshot,
          WorkflowScreenshot: WindowScreenshot,
          img: Figure,
        }}
      />
    </ImageGallery>
  );
}

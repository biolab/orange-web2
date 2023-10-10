import ImageGallery from "@components/ImageGallery/ImageGallery";
import { MDXRemote } from "next-mdx-remote";
import Image from "@components/Image/Image";
import styled from "styled-components";
import device from "@styles/utils/breakpoints";

const ContentStyle = styled.div`
  h1 {
    font-size: 44px;
    line-height: 1.13;
    font-weight: 700;
    color: ${({ theme }) => theme.blackLight};

    @media ${device.M} {
      font-size: 38px;
    }
    @media ${device.S} {
      font-size: 32px;
    }
  }

  h2 {
    font-size: 33px;
    line-height: 1.13;
    font-weight: 600;
    color: ${({ theme }) => theme.blackLight};

    @media ${device.M} {
      font-size: 30px;
    }
    @media ${device.S} {
      font-size: 26px;
    }
  }

  h3 {
    font-size: 28px;
    line-height: 1.18;
    font-weight: 600;
    color: ${({ theme }) => theme.blackLight};

    @media ${device.M} {
      font-size: 26px;
    }

    @media ${device.S} {
      font-size: 24px;
    }
  }

  h4 {
    font-size: 22px;
    line-height: 1.18;
    font-weight: 600;
    color: ${({ theme }) => theme.blackLight};

    @media ${device.S} {
      font-size: 20px;
    }
  }

  p {
    font-size: 22px;
    line-height: 1.36;
    color: ${({ theme }) => theme.blackLight};

    @media ${device.L} {
      font-size: 20px;
    }

    @media ${device.M} {
      font-size: 18px;
    }
  }

  ul,
  ol {
    padding-left: 40px;

    li {
      font-size: 22px;
      line-height: 1.36;
      color: ${({ theme }) => theme.blackLight};

      @media ${device.L} {
        font-size: 20px;
      }

      @media ${device.M} {
        font-size: 18px;
      }
      + li {
        margin-top: 4px;
      }
    }
  }

  ul {
    list-style: disc;
  }

  ol {
    list-style: decimal;
  }

  p,
  li {
    a {
      color: ${({ theme }) => theme.orange};
      &:hover {
        text-decoration: underline;
      }
    }
  }

  * + *:not(li, a) {
    margin-top: 15px;
  }

  * + a[data-gallery],
  * + video {
    margin-top: 40px;
  }

  a[data-gallery] {
    display: block;
    margin-bottom: 40px;
  }

  iframe,
  video {
    margin-bottom: 40px;
  }
`;

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
            WindowScreenshot,
            WorkflowScreenshot: WindowScreenshot,
            img: Figure,
          }}
        />
      </ImageGallery>
    </ContentStyle>
  );
}

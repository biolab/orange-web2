import { useEffect, useMemo, useState } from "react";
import Button from "@components/UiKit/Button";
import config from "config.json";
import styled from "styled-components";
import Adapt from "@components/UiKit/Adapt";
import HeroImage from "@public/download/download-hero-image.webp";
import Image from "@components/Image/Image";
import device from "@styles/utils/breakpoints";
import { downloadLinks } from "pages/download";

function getOS() {
  let userAgent = window.navigator.userAgent.toLowerCase(),
    macosPlatforms = /(macintosh|macintel|macppc|mac68k|macos)/i,
    windowsPlatforms = /(win32|win64|windows|wince)/i;

  if (macosPlatforms.test(userAgent)) {
    return "Mac OS";
  }
  if (windowsPlatforms.test(userAgent)) {
    return "Windows";
  }

  return "";
}

function DownloadButton({ os }: { os: string | null }) {
  const href = useMemo(() => {
    if (!os) {
      return "";
    }

    return os === "Mac OS" ? "#mac" : downloadLinks.win;
  }, [os]);

  if (!os) {
    return null;
  }
  return (
    <Button as="a" href={href}>
      Orange {config.version} for {os}
    </Button>
  );
}

export default function DownloadHeader() {
  const [os, setOs] = useState<string | null>(null);

  useEffect(() => {
    setOs(getOS());
  }, []);

  return (
    <HeaderWrapper>
      <Adapt>
        <Image
          src={HeroImage.src}
          width={HeroImage.width}
          height={HeroImage.height}
          alt="Download orange"
        />

        <h1>{os ? "Suggested download" : "Download Orange"}</h1>
        <DownloadButton os={os} />
      </Adapt>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
  background-color: ${({ theme }) => theme.violet};
  padding-top: 66px;
  padding-bottom: 66px;
  min-height: 262px;
  position: relative;

  h1 {
    position: relative;
    z-index: 10;
    font-size: 44px;
    margin-bottom: 30px;
    color: #fff;
    font-weight: 700;
  }

  img {
    transform: translateY(21px);
    position: absolute;
    right: 20%;
    bottom: 0px;
    z-index: 1;

    @media ${device.M} {
      right: 15%;
    }
    @media ${device.S} {
      display: none;
    }
  }
`;

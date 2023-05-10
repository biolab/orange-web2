import { useEffect, useMemo, useState } from "react";
import Button from "@components/UiKit/Button";
import config from "config.json";
import styled from "styled-components";
import Adapt from "@components/UiKit/Adapt";

const downloadLinks = {
  macos: `https://download.biolab.si/download/files/Orange3-${config.version}-Python3.9.12.dmg`,
  win: `https://download.biolab.si/download/files/Orange3-${config.version}-Miniconda-x86_64.exe`,
};

const HeaderWrapper = styled.div`
  background-color: ${({ theme }) => theme.violet};
  height: 255px;
  padding-top: 66px;

  h1 {
    font-size: 44px;
    margin-bottom: 30px;
    color: #fff;
    font-weight: 700;
  }
`;

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

    return os === "Mac OS" ? downloadLinks.macos : downloadLinks.win;
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
        <div>
          <h1>{os ? "Suggested download" : "Download"}</h1>
          <DownloadButton os={os} />
        </div>
      </Adapt>
    </HeaderWrapper>
  );
}

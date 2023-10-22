import device from "@styles/utils/breakpoints";
import styled from "styled-components";
import Image from "@components/Image/Image";

export const ContentStyle = styled.div`
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
    font-size: 20px;
    line-height: 1.4;
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
      font-size: 20px;
      line-height: 1.4;
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

  * + *:not(li, a, code) {
    margin-top: 20px;
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

export const ScreenshotImage = styled(Image)`
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

export const VideoResponsive = styled.div`
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

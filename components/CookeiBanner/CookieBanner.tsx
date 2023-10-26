import device from "@styles/utils/breakpoints";
import { useRouter } from "next/router";
import Script from "next/script";
import React from "react";
import styled, { css } from "styled-components";

enum LSKeys {
  analyticsDisabled = "analyticsDisabled",
  cookieBannerDismissed = "cookieBannerDismissed",
}

export default function CookieBanner() {
  const router = useRouter();
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    setShow(true);
  }, []);

  const _show = React.useMemo(() => {
    if (!show) {
      return false;
    }
    return !localStorage.getItem(LSKeys.cookieBannerDismissed);
  }, [show]);

  const dismiss = React.useCallback(() => {
    setShow(false);
    localStorage.setItem(LSKeys.cookieBannerDismissed, "true");
  }, []);

  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-J6PJZF75EX" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-J6PJZF75EX');
        `}
      </Script>
      <StWrapper $show={_show}>
        <div>
          <p>This site uses cookies to improve your experience.</p>
          <StButtonsWrapper>
            <StButton onClick={() => router.push("/privacy")}>Details</StButton>
            <StButton onClick={dismiss} $white>
              Understand
            </StButton>
          </StButtonsWrapper>
        </div>
      </StWrapper>
    </>
  );
}

const StButtonsWrapper = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
`;

const StWrapper = styled.div<{ $show: boolean }>`
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 20px;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.blackLight1};
  color: #fff;
  border-radius: 5px;

  border: 1px solid ${(props) => props.theme.borderColor};
  box-shadow: ${(props) => props.theme.boxShadow};
  transform: translateY(calc(100% + 100px));
  transition: transform 0.5s ease-in-out;

  ${(props) =>
    props.$show &&
    css`
      transform: translateY(0);
    `}

  @media ${device.S} {
    left: 10px;
    right: 10px;
    bottom: 10px;
  }

  p {
    margin-bottom: 11px;
    font-size: 17px;
  }
`;

const StButton = styled.button<{ $white?: boolean }>`
  font-size: 15px;
  padding: 9px 12px;
  border-radius: 8px;
  cursor: pointer;

  ${(props) =>
    props.$white
      ? css`
          background: #fff;
          color: ${(props) => props.theme.blackLight1};
          border: 1px solid #fff;
          padding-left: 22px;
          padding-right: 22px;
        `
      : css`
          background: ${(props) => props.theme.blackLight1};
          color: #fff;
          border: 1px solid #fff;
        `}
`;

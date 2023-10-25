import styled, { css } from "styled-components";
import device from "@styles/utils/breakpoints";

const LinkInsideH = css`
  a {
    transition: color 0.3s;

    &:hover {
      color: ${({ theme }) => theme.orange};
    }
  }
`;

export const Heading1 = styled.h1`
  font-size: 44px;
  line-height: 1.13;
  font-weight: 700;
  color: ${({ theme }) => theme.blackLight1};
  margin-bottom: 12px;

  ${LinkInsideH};
`;

export const Heading2 = styled.h2`
  font-size: 22px;
  line-height: 1.18;
  font-weight: 600;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.blackLight1};

  ${LinkInsideH};
`;

export const BodyText = styled.p`
  font-size: 20px;
  line-height: 1.4;
  color: ${({ theme }) => theme.blackLight1};

  @media ${device.S} {
    font-size: 18px;
  }

  + p {
    margin-top: 10px;
  }

  a {
    color: ${({ theme }) => theme.orange};
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }
`;

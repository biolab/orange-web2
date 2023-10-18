import styled, { css } from "styled-components";
import device from "@styles/utils/breakpoints";

const Adapt = styled.div<{
  $mb?: boolean;
  $mt?: boolean;
  $width650?: boolean;
  $width714?: boolean;
  $width924?: boolean;
}>`
  position: relative;
  max-width: ${({ theme }) => theme.adaptMaxWidth};
  margin-right: auto;
  margin-left: auto;
  padding-left: 72px;
  padding-right: 72px;
  height: 100%;
  box-sizing: content-box;

  @media ${device.L} {
    padding-left: 30px;
    padding-right: 30px;
  }
  @media ${device.S} {
    padding-left: 15px;
    padding-right: 15px;
  }

  ${({ $mt }) =>
    $mt &&
    css`
      margin-top: 80px;

      @media ${device.M} {
        margin-top: 60px;
      }

      @media ${device.S} {
        margin-top: 40px;
      }
    `};

  ${({ $mb }) =>
    $mb &&
    css`
      margin-bottom: 80px;

      @media ${device.M} {
        margin-bottom: 60px;
      }
    `};

  ${({ $width650 }) => $width650 && `max-width: 650px`};
  ${({ $width714 }) => $width714 && `max-width: 714px`};
  ${({ $width924 }) => $width924 && `max-width: 924px`};
`;

export default Adapt;

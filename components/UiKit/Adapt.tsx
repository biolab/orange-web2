import styled from "styled-components";
import device from "@styles/utils/breakpoints";

const Adapt = styled.div<{ $mt?: boolean; $width650?: boolean }>`
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

  ${({ $mt }) => $mt && `margin-top: 60px;`};

  ${({ $width650 }) => $width650 && `max-width: 650px`};
`;

export default Adapt;

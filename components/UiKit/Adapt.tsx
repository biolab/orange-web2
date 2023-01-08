import styled from "styled-components";
import device from "@styles/utils/breakpoints";

const Adapt = styled.div`
  position: relative;
  max-width: ${({ theme }) => theme.adaptMaxWidth};
  margin-right: auto;
  margin-left: auto;
  padding-left: 72px;
  padding-right: 72px;
  height: 100%;

  @media ${device.L} {
    padding-left: 30px;
    padding-right: 30px;
  }
  @media ${device.S} {
    padding-left: 15px;
    padding-right: 15px;
  }
`;

export default Adapt;

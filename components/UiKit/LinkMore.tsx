import styled from "styled-components";
import device from "@styles/utils/breakpoints";

const LinkMore = styled.a`
  display: inline-block;
  font-size: 22px;
  line-height: 1.36;
  color: ${({ theme }) => theme.orange};
  font-weight: 600;
  background-image: url("/assets/icons/icon-arrow--orange.svg");
  background-position: top 50% right 6px;
  background-size: 8px;
  background-repeat: no-repeat;
  padding-right: 20px;
  transition: background-position 0.3s, opacity 0.3s;
  margin: 15px 25px 10px 0;

  @media ${device.L} {
    font-size: 20px;
  }

  @media ${device.M} {
    font-size: 18px;
  }

  &:hover {
    opacity: 0.76;
    color: ${({ theme }) => theme.orange};
    background-position: top 50% right 3px;
  }
`;

export default LinkMore;

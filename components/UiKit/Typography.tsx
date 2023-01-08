import styled from "styled-components";

export const Heading3 = styled.h3`
  font-size: 22px;
  line-height: 1.4;
  font-weight: 600;
  color: ${({ theme }) => theme.blackLight};

  a {
    transition: color 0.3s;

    &:hover {
      color: ${({ theme }) => theme.orange};
    }
  }
`;

export const BodyText = styled.p`
  font-size: 20px;
  line-height: 1.4;
  color: ${({ theme }) => theme.blackLight};

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

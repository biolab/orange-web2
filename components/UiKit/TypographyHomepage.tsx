import styled from "styled-components";

export const Heading1 = styled.h1`
  font-size: 62px;
  line-height: 1.04;
  font-weight: 700;
`;
export const Heading2 = styled.h2`
  font-size: 62px;
  line-height: 1.04;
  font-weight: 700;
  color: ${({ theme }) => theme.black};
  margin-bottom: 20px;
`;

export const BodyText = styled.p`
  font-size: 22px;
  line-height: 30px;
  letter-spacing: 0.01em;
  color: ${({ theme }) => theme.black};

  + * {
    margin-top: 15px;
  }
`;

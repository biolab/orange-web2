import styled from "styled-components";

const H1 = styled.h1`
  color: ${({ theme }) => theme.color1};
`;

export default function Home() {
  return (
    <div>
      <H1>Hello orange 2022 december</H1>
    </div>
  );
}

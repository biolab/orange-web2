import styled from "styled-components";
import Adapt from "./Adapt";
import { Heading1 } from "./Typography";

const H1 = styled(Heading1)`
  margin-bottom: 50px;
  text-align: center;
`;

const MainLayout = ({ children, title }: { children: React.ReactNode | React.ReactNode[]; title: string }) => {
  return (
    <Adapt $mt>
      <H1> {title}</H1>
      {children}
    </Adapt>
  );
};

export default MainLayout;

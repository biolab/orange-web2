import Button from "@components/UiKit/Button";
import Adapt from "@components/UiKit/Adapt";
import device from "@styles/utils/breakpoints";
import styled from "styled-components";
import { Heading2, BodyText } from "@components/UiKit/TypographyHomepage";

const SectionDonate = styled.section`
  background-color: ${({ theme }) => theme.grayBackground};
  padding: 100px 0;
  text-align: center;

  @media ${device.M} {
    padding: 80px 0;
  }
  @media ${device.S} {
    padding: 50px 0;
  }
`;

export default function DonateSection({ title, subtitle, url }: { title: string; subtitle: string; url: string }) {
  return (
    <SectionDonate>
      <Adapt $width650>
        <Heading2>{title}</Heading2>
        <BodyText>{subtitle}</BodyText>
        <Button as="a" href={url} target="_blank">
          Donate
        </Button>
      </Adapt>
    </SectionDonate>
  );
}

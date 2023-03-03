import Button from "@components/UiKit/Button";
import Image from "@components/Image/Image";
import { Heading1 } from "@components/UiKit/TypographyHomepage";
import Adapt from "@components/UiKit/Adapt";
import styled from "styled-components";
import device from "@styles/utils/breakpoints";
import Link from "next/link";
import img from "@public/home/orange_illustration_landing.png";

const SectionHeader = styled.section`
  background-color: ${({ theme }) => theme.violet};
  padding: 80px 0;

  @media ${device.M} {
    padding: 60px 0;
  }
  @media ${device.S} {
    padding: 40px 0;
  }
`;
const SectionHeaderInner = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const ContentWrapper = styled.div`
  padding-right: 40px;
  flex: 0 0 480px;

  @media ${device.L} {
    flex: 0 0 55%;
  }

  @media ${device.S} {
    flex: 0 0 100%;
    max-width: 400px;
  }
`;

const ImageWrapper = styled.figure`
  flex: 0 0 calc(100% - 480px);
  @media ${device.L} {
    flex: 0 0 45%;
  }

  @media ${device.S} {
    flex: 0 0 100%;
    margin-top: 20px;
  }

  img {
    margin: 0 auto;
  }
`;

const BodyText = styled.p`
  font-size: 28px;
  line-height: 1.25;
  color: #fff;
  margin: 10px 0 30px;

  @media ${device.L} {
    font-size: 24px;
  }

  @media ${device.M} {
    font-size: 22px;
  }
`;

export default function HomeHeader() {
  return (
    <SectionHeader>
      <Adapt>
        <SectionHeaderInner>
          <ContentWrapper>
            <Heading1>Data mining Fruitful and fun</Heading1>
            <BodyText>Open source machine learning and data visualization.</BodyText>
            <Button as="a" href="/download">
              Download Orange 3.33.0
            </Button>
          </ContentWrapper>
          <ImageWrapper>
            <Image src={img.src} width={img.width} height={img.height} alt="" />
          </ImageWrapper>
        </SectionHeaderInner>
      </Adapt>
    </SectionHeader>
  );
}

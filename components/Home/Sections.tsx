import Image from "@components/Image/Image";
import { MDXRemote } from "next-mdx-remote";
import slugify from "@utils/slugify";
import Adapt from "@components/UiKit/Adapt";
import styled from "styled-components";
import { Heading2 } from "@components/UiKit/TypographyHomepage";
import device from "@styles/utils/breakpoints";
import LinkMore from "@components/UiKit/LinkMore";

const SectionSingleItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row-reverse;
  padding: 80px 0;

  @media ${device.M} {
    padding: 60px 0;
  }
  @media ${device.S} {
    padding: 40px 0;
  }

  > div {
    padding: 0 0 0 35px;

    @media ${device.S} {
      padding: 0 35px 0 0;
    }
  }

  &:nth-child(even) {
    flex-direction: row;

    > div {
      padding: 0 35px 0 0;
    }
  }
`;

const ContentWrapper = styled.div`
  flex: 0 0 38%;
  max-width: 38%;

  @media ${device.L} {
    flex: 0 0 50%;
    max-width: 50%;
  }
  @media ${device.S} {
    flex: 0 0 100%;
    max-width: 100%;
  }

  p {
    font-size: 22px;
    line-height: 1.36;

    @media ${device.L} {
      font-size: 20px;
    }

    @media ${device.M} {
      font-size: 18px;
    }
    a {
      color: ${({ theme }) => theme.orange};
      font-weight: 600;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const ImageWrapper = styled.figure`
  flex: 0 0 62%;
  max-width: 62%;

  @media ${device.L} {
    flex: 0 0 50%;
    max-width: 50%;
  }

  @media ${device.S} {
    flex: 0 0 100%;
    max-width: 100%;
    margin-top: 30px;
  }

  img {
    margin: 0 auto;
  }
`;

export default function HomeSections({ sections }: { sections: any }) {
  return (
    <section>
      <Adapt>
        {sections.map((section: any) => (
          <SectionSingleItem key={section.title}>
            <ContentWrapper>
              <Heading2>{section.title}</Heading2>
              <MDXRemote {...section.mdxSource} />

              {section.learnMore && <LinkMore href={`home/${slugify(section.title)}`}> Learn more</LinkMore>}
              {section.video && (
                <LinkMore href={`https://www.youtube.com/watch?v=${section.video}&autoplay=1`} target="_blank">
                  Watch video
                </LinkMore>
              )}
            </ContentWrapper>

            <ImageWrapper>
              <Image {...section.image} alt="" />
            </ImageWrapper>
          </SectionSingleItem>
        ))}
      </Adapt>
    </section>
  );
}

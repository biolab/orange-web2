import Image from "@components/Image/Image";
import slugify from "@utils/slugify";
import Adapt from "@components/UiKit/Adapt";
import styled from "styled-components";
import { Heading2, BodyText } from "@components/UiKit/TypographyHomepage";
import LinkMore from "@components/UiKit/LinkMore";
import device from "@styles/utils/breakpoints";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const Inner = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 80px 0 150px;

  @media ${device.M} {
    padding: 50px 0 120px;
  }
  @media ${device.S} {
    padding: 40px 0 100px;
  }
`;

const Content = styled.div`
  border: 1px solid red;
  flex: 0 0 38%;
  max-width: 38%;
  padding-right: 35px;

  @media ${device.L} {
    flex: 0 0 50%;
    max-width: 50%;
  }
  @media ${device.S} {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

const ImageSlider = styled.div`
  border: 1px solid green;
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
`;

export default function UsersSection({
  title,
  subtitle,
  testimonials,
}: {
  title: string;
  subtitle: string;
  testimonials: any[];
}) {
  const [sliderRef] = useKeenSlider({
    loop: true,
    drag: true,
  });

  return (
    <section>
      <Adapt>
        <Inner>
          <Content>
            <Heading2>{title}</Heading2>
            <BodyText>{subtitle}</BodyText>
            <LinkMore href={`/home/${slugify(title)}`}>Learn more</LinkMore>
          </Content>

          <ImageSlider className="keen-slider" ref={sliderRef}>
            {testimonials.map(({ title, position, institution, image, text }) => (
              <div key={title} className="keen-slider__slide">
                <p>{text}</p>

                <div>
                  <div>
                    <Image {...image} alt="" />
                  </div>

                  <div>
                    <h3>{title}</h3>
                    <p>
                      <strong>{position}</strong> ({institution})
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </ImageSlider>
        </Inner>
      </Adapt>
    </section>
  );
}

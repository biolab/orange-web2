import React, { useState } from "react";
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

  @media ${device.L} {
    justify-content: center;
  }

  @media ${device.M} {
    padding: 50px 0 120px;
  }
  @media ${device.S} {
    padding: 40px 0 100px;
  }
`;

const Content = styled.div`
  flex: 0 0 38%;
  max-width: 38%;
  padding-right: 40px;

  @media ${device.L} {
    flex: 0 0 100%;
    max-width: 100%;
    padding-right: 30%;
  }

  @media ${device.S} {
    padding: 0;
  }
`;

const SliderWrapper = styled.div`
  position: relative;
  flex: 0 0 62%;
  max-width: 62%;
  padding: 0 72px;

  @media ${device.L} {
    flex: 0 0 85%;
    max-width: 85%;
    margin-top: 40px;
  }
  @media ${device.S} {
    flex: 0 0 100%;
    max-width: 100%;
    margin-top: 30px;
    padding: 0;
  }

  .arrow {
    position: absolute;
    top: 50%;
    transform: translateY(calc(-50% - 22px));
    width: 20px;
    fill: #000;
    cursor: pointer;
    transition: fill 0.3s;
    z-index: 1;

    &:hover {
      fill: ${({ theme }) => theme.orange};
    }
    @media ${device.S} {
      display: none;
    }
    &.arrow--left {
      left: 20px;
    }
    &.arrow--right {
      right: 20px;
    }
  }
`;

const Slide = styled.div`
  background: #ffffff;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 6px;
  padding: 60px;

  @media ${device.L} {
    padding: 40px;
  }
  @media ${device.S} {
    padding: 25px;
  }

  p {
    font-size: 20px;
    line-height: 1.4;

    @media ${device.M} {
      font-size: 18px;
    }
    @media ${device.S} {
      font-size: 16px;
    }
  }
`;

const User = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 45px;

  img {
    flex: 0 0 94px;
    max-width: 94px;
  }
  div {
    flex: 0 0 calc(100% - 94px);
    max-width: calc(100% - 94px);
    padding-left: 25px;
  }
`;

const Dots = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 34px;

  button {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: none;
    background-color: ${({ theme }) => theme.borderColor};
    margin: 0 3px;
    padding: 0;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover,
    &.active {
      background-color: ${({ theme }) => theme.blackLight1};
    }
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
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true,
    drag: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
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

          <SliderWrapper>
            <div className="keen-slider" ref={sliderRef}>
              {testimonials.map(
                ({ title, position, institution, image, text }) => (
                  <Slide key={title} className="keen-slider__slide">
                    <p>{text}</p>

                    <User>
                      <Image {...image} alt="" />

                      <div>
                        <p>
                          <strong>{title}</strong>
                        </p>
                        <p>
                          {position} ({institution})
                        </p>
                      </div>
                    </User>
                  </Slide>
                ),
              )}
            </div>
            {loaded && instanceRef.current && (
              <>
                <Arrow
                  left
                  onClick={(e: any) =>
                    e.stopPropagation() || instanceRef.current?.prev()
                  }
                  disabled={currentSlide === 0}
                />

                <Arrow
                  onClick={(e: any) =>
                    e.stopPropagation() || instanceRef.current?.next()
                  }
                  disabled={
                    currentSlide ===
                    instanceRef.current.track.details.slides.length - 1
                  }
                />
              </>
            )}
            {loaded && instanceRef.current && (
              <Dots>
                {[
                  ...Array(
                    instanceRef.current.track.details.slides.length,
                  ).keys(),
                ].map((idx) => {
                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        instanceRef.current?.moveToIdx(idx);
                      }}
                      aria-label={`Slide ${idx}`}
                      className={
                        "dot" + (currentSlide === idx ? " active" : "")
                      }
                    ></button>
                  );
                })}
              </Dots>
            )}
          </SliderWrapper>
        </Inner>
      </Adapt>
    </section>
  );
}

function Arrow(props: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 19 31"
    >
      {props.left && (
        <path d="M15.558 30.5c-.703 0-1.328-.234-1.796-.703l-12.5-12.5a2.41 2.41 0 0 1 0-3.516l12.5-12.5a2.41 2.41 0 0 1 3.515 0 2.41 2.41 0 0 1 0 3.516L6.574 15.5l10.703 10.781a2.41 2.41 0 0 1 0 3.516 2.424 2.424 0 0 1-1.719.703Z" />
      )}
      {!props.left && (
        <path d="M3.5 30.5c-.703 0-1.328-.234-1.797-.703a2.41 2.41 0 0 1 0-3.516L12.406 15.5 1.703 4.797a2.41 2.41 0 0 1 0-3.516 2.41 2.41 0 0 1 3.516 0l12.5 12.5a2.41 2.41 0 0 1 0 3.516l-12.5 12.5A2.424 2.424 0 0 1 3.5 30.5Z" />
      )}
    </svg>
  );
}

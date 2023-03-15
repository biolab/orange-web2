import Link from "next/link";
import Image from "@components/Image/Image";
import { BodyText } from "@components/UiKit/Typography";
import { BlogMetadata } from "pages/blog";
import styled from "styled-components";
import Adapt from "@components/UiKit/Adapt";
import device from "@styles/utils/breakpoints";

const SectionHomeBlogs = styled.section`
  position: relative;
  padding: 70px 0;

  @media ${device.M} {
    padding: 50px 0;
  }
  @media ${device.S} {
    padding: 30px 0;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 34%;
    height: 1px;
    background-color: ${({ theme }) => theme.borderColor};
  }
`;

const Inner = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
`;

const ExposedHomeBlog = styled.div`
  flex: 0 0 50%;
  max-width: 50%;

  @media ${device.S} {
    flex: 0 0 100%;
    max-width: 100%;
    padding-right: 0;
  }

  h2 {
    font-size: 44px;
    line-height: 1.09;
    font-weight: 700;
    color: ${({ theme }) => theme.blackLight};
    margin-bottom: 10px;

    @media ${device.L} {
      font-size: 38px;
    }

    @media ${device.S} {
      font-size: 34px;
      max-width: 90%;
    }

    a {
      transition: color 0.3s;

      &:hover {
        color: ${({ theme }) => theme.orange};
      }
    }
  }
  p {
    @media ${device.S} {
      max-width: 90%;
    }
  }
  a {
    display: inline-block;
  }

  img {
    margin-top: 20px;
  }
`;

const ListHomeBlog = styled.div`
  flex: 0 0 50%;
  max-width: 50%;
  padding-left: 70px;

  @media ${device.M} {
    padding-left: 50px;
  }

  @media ${device.S} {
    flex: 0 0 100%;
    max-width: 100%;
    padding: 0;
  }
`;

const ListItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 30px 0;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};

  &:first-child {
    padding-top: 0;

    @media ${device.S} {
      padding-top: 30px;
    }
  }

  &:last-child {
    border-bottom: none;
  }

  h3 {
    font-size: 24px;
    line-height: 1.16;
    font-weight: 600;
    color: ${({ theme }) => theme.blackLight};
    margin-bottom: 6px;

    @media ${device.L} {
      font-size: 22px;
    }

    @media ${device.S} {
      font-size: 20px;
    }

    a {
      transition: color 0.3s;

      &:hover {
        color: ${({ theme }) => theme.orange};
      }
    }
  }
`;

const ListContentWrapper = styled.div`
  flex: 0 0 calc(100% - 200px);
  max-width: calc(100% - 200px);
  padding-right: 30px;

  @media ${device.L} {
    flex: 0 0 calc(100% - 160px);
    max-width: calc(100% - 160px);
  }

  @media ${device.M} {
    flex: 0 0 calc(100% - 140px);
    max-width: calc(100% - 140px);
  }
  @media ${device.S} {
    flex: 0 0 calc(100% - 160px);
    max-width: calc(100% - 160px);
  }
`;

const ListImageWrapper = styled.figure`
  width: 200px;

  @media ${device.L} {
    width: 160px;
  }
  @media ${device.M} {
    width: 140px;
  }
  @media ${device.S} {
    width: 160px;
  }

  img {
    border: 1px solid ${({ theme }) => theme.borderColor};
  }
`;

const ListBodyText = styled.p`
  font-size: 18px;
  line-height: 1.44;
  color: ${({ theme }) => theme.blackLight};

  @media ${device.L} {
    font-size: 16px;
  }

  @media ${device.S} {
    font-size: 14px;
  }
`;

const Date = styled.p<{ $small?: boolean }>`
  font-size: 16px;
  line-height: 1.2;
  color: ${({ theme }) => theme.blackLight};
  margin-bottom: 10px;

  ${({ $small }) => $small && `font-size: 14px; margin-bottom: 5px;`};
`;

export default function HomeBlogs({ blogs }: { blogs: BlogMetadata[] }) {
  const [lastBlog, ...restBlogs] = blogs;

  return (
    <SectionHomeBlogs>
      <Adapt>
        <Inner>
          <ExposedHomeBlog>
            <Date>{lastBlog.date}</Date>
            <h2>
              <Link href={`blog/${lastBlog.url}`}>{lastBlog.title}</Link>
            </h2>
            <BodyText>{lastBlog.shortExcerpt}</BodyText>
            <Link href={`blog/${lastBlog.url}`}>
              <Image {...lastBlog.thumbImage} alt="" />
            </Link>
          </ExposedHomeBlog>

          <ListHomeBlog>
            {restBlogs.map(({ date, title, shortExcerpt, thumbImage, url }) => {
              return (
                <ListItem key={title}>
                  <ListContentWrapper>
                    <Date $small>{date}</Date>
                    <h3>
                      <Link href={`blog/${url}`}>{title}</Link>
                    </h3>
                    <ListBodyText>{shortExcerpt}</ListBodyText>
                  </ListContentWrapper>
                  <ListImageWrapper>
                    <Link href={`blog/${url}`}>
                      <Image {...thumbImage} alt="" />
                    </Link>
                  </ListImageWrapper>
                </ListItem>
              );
            })}
          </ListHomeBlog>
        </Inner>
      </Adapt>
    </SectionHomeBlogs>
  );
}

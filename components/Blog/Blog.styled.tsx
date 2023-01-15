import device from "@styles/utils/breakpoints";
import styled from "styled-components";

export const BlogList = styled.ul`
  display: inline-grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 70px;
  border-top: 1px solid ${({ theme }) => theme.borderColor};

  @media ${device.L} {
    column-gap: 35px;
  }

  @media ${device.M} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.XS} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const BlogListItem = styled.li`
  padding: 30px 0;

  &:nth-child(n + 4) {
    border-top: 1px solid ${({ theme }) => theme.borderColor};
  }

  @media ${device.M} {
    &:nth-child(n + 3) {
      border-top: 1px solid ${({ theme }) => theme.borderColor};
    }
  }

  @media ${device.XS} {
    &:nth-child(n + 2) {
      border-top: 1px solid ${({ theme }) => theme.borderColor};
    }
  }
`;

export const BlogListImageWrapper = styled.figure`
  margin-bottom: 20px;

  img {
    aspect-ratio: 1.79;
    object-fit: cover;
    width: 100%;
  }
`;

export const BlogTag = styled.p`
  font-size: 16px;
  line-height: 1.25;
  font-weight: 600;
  color: ${({ theme }) => theme.violet};
  margin-bottom: 10px;
  text-transform: capitalize;
`;

export const FeaturedBlog = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  margin-bottom: 30px;

  @media ${device.S} {
    flex-direction: initial;
  }
`;

export const FBImageWrapper = styled.figure`
  flex: 0 0 56%;
  max-width: 56%;

  @media ${device.S} {
    flex: 0 0 100%;
    max-width: 100%;
    margin-bottom: 20px;
  }

  img {
    aspect-ratio: 1.82;
    object-fit: cover;
  }
`;
export const FBContentWrapper = styled.div`
  flex: 0 0 44%;
  max-width: 44%;
  padding-right: 5.17%;

  @media ${device.S} {
    flex: 0 0 100%;
    max-width: 100%;
    padding-right: 0;
  }

  p {
    max-width: 467px;
  }
`;

import styled from "styled-components";

export const Heading3 = styled.h3`
    font-size: 1.375rem;
    line-height: 1.4;
    font-weight: ${({theme})=> theme.fontWeight600};
    color: ${({theme})=> theme.blackLight};

    a {
        transition: color 0.3s;

        &:hover {
            color: ${({theme})=> theme.orange};
        }
    }
`;

export const BodyText =  styled.p`
    font-size: 1.25rem;
    line-height: 1.4;
    color: ${({theme})=> theme.blackLight};

    + p {
        margin-top: 10px;
    }

    a {
        color: ${({theme})=> theme.orange};
        font-weight: ${({theme})=> theme.fontWeight600};
        
        &:hover {
            text-decoration: underline;
        }
    }
`;

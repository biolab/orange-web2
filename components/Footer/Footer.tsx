import Adapt from "@components/UiKit/Adapt";
import Button from "@components/UiKit/Button";
import device from "@styles/utils/breakpoints";
import config from "config.json";
import Link from "next/link";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background: ${({ theme }) => theme.blackLight1};
  padding: 38px 0 25px;
  color: #fff;
`;

const LinksWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 80px;
  row-gap: 40px;
  margin-bottom: 40px;

  @media ${device.S} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
  }

  h3 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 12px;
  }

  li + li {
    margin-top: 12px;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <Adapt>
        <LinksWrapper>
          {config.footer.map(({ title, pages }) => (
            <div key={title}>
              <h3>{title}</h3>

              <ul>
                {pages.map(({ name, url }) => (
                  <li key={name}>
                    <Link href={url}>{name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <Button
              as="a"
              href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=A76TAX87ZVR3J"
              target="_blank"
              rel="noreferrer"
            >
              Donate to Orange
            </Button>
          </div>
        </LinksWrapper>

        <p>Copyright © University of Ljubljana</p>
      </Adapt>
    </StyledFooter>
  );
}

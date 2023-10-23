import React from "react";
import styled from "styled-components";
import Link from "next/link";

export default function Content() {
  return (
    <>
      <p>
        Perhaps we have already answered your question in the{" "}
        <StA href={"/faq"}>FAQ</StA>. If the answer isn’t there, feel free to
        write to us.
      </p>

      <StParagraph>
        We prefer to address any <b>support requests</b> and other general
        questions about Orange in our{" "}
        <StA href="https://discord.com/invite/FWrfeXV">Discord chatroom.</StA>
      </StParagraph>

      <p>
        Please <b>report bugs</b>, issues, and anything unexpected on our{" "}
        <StA href="https://github.com/biolab/orange3/issues">
          GitHub issue tracker.
        </StA>
      </p>

      <p>
        Alternatively, for questions regarding the graphical user interface, you
        may consult{" "}
        <StA href="https://datascience.stackexchange.com/questions/tagged/orange">
          Data Science Stack Exchange
        </StA>
        . For questions on the scripting layer (Python), please consult{" "}
        <StA href="https://stackoverflow.com/questions/tagged/orange">
          Stack Overflow
        </StA>
        .
      </p>

      <StParagraph>
        For other inquiries of professional nature, such as business proposals,
        reach us directly through the form below.
      </StParagraph>
    </>
  );
}

const StParagraph = styled.p`
  padding-top: 24px;
  border-top: 1px solid ${({ theme }) => theme.borderColor};
`;

const StA = styled(Link)`
  color: ${({ theme }) => theme.orange};
`;

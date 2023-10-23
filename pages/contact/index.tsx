import MainLayout from "@components/UiKit/MainLayout";
import styled, { keyframes } from "styled-components";
import { useForm, SubmitHandler, UseFormRegister } from "react-hook-form";
import React from "react";
import Adapt from "@components/UiKit/Adapt";
import Button from "@components/UiKit/Button";
import device from "@styles/utils/breakpoints";
import {
  AiOutlineInfoCircle,
  AiOutlineExclamationCircle,
  AiOutlineLoading3Quarters,
} from "react-icons/ai";

type Inputs = {
  name: string;
  "E-mail": string;
  Subject: string;
  Message: string;
};

const FormField = ({
  name,
  register,
  placeholder,
  required = false,
  type = "text",
}: {
  name: keyof Inputs;
  register: UseFormRegister<Inputs>;
  placeholder?: string;
  required?: boolean;
  type?: "text" | "checkbox" | "email";
}) => {
  return (
    <StFormField>
      <label htmlFor={name}>{name}</label>
      <input
        type={type}
        id={name}
        placeholder={placeholder}
        {...register(name, { required })}
      ></input>
    </StFormField>
  );
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState(false);

  const onSubmit: SubmitHandler<Inputs> = React.useCallback(async (data) => {
    setLoading(true);
    setSuccess(false);
    setError(false);

    const searchParams = new URLSearchParams({
      ...data,
    } as any);

    try {
      const response = await fetch("https://service.biolab.si/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        },

        body: searchParams.toString(),
      });

      const data = await response.json();

      setLoading(false);

      if (data.Status === 400) {
        setError(true);
        return;
      }

      setSuccess(true);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  }, []);

  return (
    <MainLayout title="Contact">
      <Adapt $width650>
        <StForm onSubmit={handleSubmit(onSubmit)}>
          <p>
            Perhaps we have already answered your question in the{" "}
            <StA href={"/faq"}>FAQ</StA>. If the answer isn’t there, feel free
            to write to us.
          </p>

          <StParagraph>
            We prefer to address any <b>support requests</b> and other general
            questions about Orange in our{" "}
            <StA href="https://discord.com/invite/FWrfeXV">
              Discord chatroom.
            </StA>
          </StParagraph>

          <p>
            Please <b>report bugs</b>, issues, and anything unexpected on our{" "}
            <StA href="https://github.com/biolab/orange3/issues">
              GitHub issue tracker.
            </StA>
          </p>

          <p>
            Alternatively, for questions regarding the graphical user interface,
            you may consult{" "}
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
            For other inquiries of professional nature, such as business
            proposals, reach us directly through the form below.
          </StParagraph>

          <FormField
            name="name"
            placeholder="Enter your name"
            register={register}
            required
          />

          <FormField
            name="E-mail"
            placeholder="Enter a contact email"
            type="email"
            register={register}
          />

          <FormField
            name="Subject"
            placeholder="Enter a subject"
            register={register}
          />

          <StFormField>
            <label htmlFor={"Message"}>message</label>
            <textarea
              placeholder="Write us a message"
              {...register("Message", { required: false })}
            ></textarea>
          </StFormField>

          <StButton disabled={loading} type="submit" value="Submit">
            {loading ? (
              <>
                <StLoader />
              </>
            ) : (
              "Submit"
            )}
          </StButton>

          {success && (
            <StNotice>
              <AiOutlineInfoCircle /> Your message was successfully sent
            </StNotice>
          )}
          {error && (
            <StNotice $warning>
              <AiOutlineExclamationCircle /> Something went wrong, please try
              again or contact us at orange@biolab.si
            </StNotice>
          )}
        </StForm>
      </Adapt>
    </MainLayout>
  );
}

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const StParagraph = styled.p`
  padding-top: 24px;
  border-top: 1px solid ${({ theme }) => theme.borderColor};
`;

const StA = styled.a`
  color: ${({ theme }) => theme.orange};
`;

const StLoader = styled(AiOutlineLoading3Quarters)`
  width: 24px;
  height: 24px;
  margin: 0 auto;
  display: block;
  animation: ${rotate} 0.6s linear infinite;
`;

const StNotice = styled.p<{ $warning?: boolean }>`
  padding: 20px;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.borderColor};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;

  svg {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }

  color: ${(props) => (props.$warning ? "#e91e62" : "#4BB543")};
  background-color: ${(props) => (props.$warning ? "#e91e6211" : "#4bb54310")};
`;

const StButton = styled(Button)`
  border: none;

  &[disabled] {
    pointer-events: none;
  }
`;

const StForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 38px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: ${(props) => props.theme.boxShadow};

  @media ${device.S} {
    border: none;
    box-shadow: none;
    padding: 38px 0;
  }
`;

const StFormField = styled.div`
  label,
  p {
    display: block;
    width: fit-content;
    text-transform: capitalize;
    margin-bottom: 4px;
  }

  textarea,
  input,
  select {
    font-size: 16px;
    line-height: 1.25;
    padding: 10px 8px;
    background: #fff;
    border-radius: 5px;
    width: 100%;
    min-width: 100%;
    max-width: 100%;
    border: 1px solid ${({ theme }) => theme.borderColor};
    font-family: inherit;

    &[type="radio"],
    &[type="checkbox"] {
      width: auto;
      min-width: auto;
    }

    &[type="checkbox"] {
      margin: auto;
      width: 16px;
      height: 16px;
    }
  }
`;

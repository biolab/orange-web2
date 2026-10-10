import MainLayout from "@components/UiKit/MainLayout";
import { useForm, SubmitHandler } from "react-hook-form";
import { Turnstile } from "react-turnstile";
import React from "react";
import Adapt from "@components/UiKit/Adapt";
import Content from "@components/Contact/Content";
import {
  FormField,
  StButtonWithLoader,
  StForm,
  TextArea,
} from "@components/Form/FormFields";
import Alert, { AlertType } from "@components/Alert/Alert";
import { usePostForm } from "@hooks/usePostForm";

type Inputs = {
  name: string;
  "E-mail": string;
  Subject: string;
  Message: string;
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const { error, success, loading, onSubmit } = usePostForm(
    "https://service.biolab.si/contact",
  );

  const [turnstileToken, setTurnstileToken] = React.useState<string | null>(null);

  return (
    <MainLayout title="Contact">
      <Adapt $width650>
        <StForm onSubmit={handleSubmit(onSubmit)}>
          <Content />

          <FormField
            name="name"
            placeholder="Enter your name"
            register={register}
          />

          <FormField
            name="E-mail"
            placeholder="Enter a contact email"
            type="email"
            register={register}
            required
          />

          <FormField
            name="Subject"
            placeholder="Enter a subject"
            register={register}
            required
          />

          <TextArea
            name="Message"
            register={register}
            placeholder="Write us a message"
            required
          />

          <Turnstile
            sitekey="0x4AAAAAAFTAXoM1kexQt8TP"
            onVerify={setTurnstileToken} />

          <StButtonWithLoader loading={loading || !turnstileToken} />

          <Alert
            show={success}
            type={AlertType.SUCCESS}
            text="Your message was successfully sent"
          />
          <Alert
            show={error}
            type={AlertType.ERROR}
            text="Something went wrong, please try
              again or contact us at orange@biolab.si"
          />
        </StForm>
      </Adapt>
    </MainLayout>
  );
}

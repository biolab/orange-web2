import MainLayout from "@components/UiKit/MainLayout";
import { useForm, SubmitHandler } from "react-hook-form";
import React from "react";
import Adapt from "@components/UiKit/Adapt";
import Content from "@components/Contact/Content";
import {
  FormField,
  StButtonWithLoader,
  StForm,
  StFormField,
} from "@components/Form/FormFields";
import Alert, { AlertType } from "@components/Alert/Alert";

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
          <Content />

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

          <StButtonWithLoader loading={loading} />

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

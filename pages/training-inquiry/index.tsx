import MainLayout from "@components/UiKit/MainLayout";
import styled from "styled-components";
import { useForm, SubmitHandler, UseFormRegister } from "react-hook-form";
import React from "react";

type Inputs = {
  name: string;
  affiliation: string;
  course: string;
  "number of participants": string;
  "online course": string;
  email: string;
  message: string;
};

enum CourseOptions {
  IDM = "Introduction to Data Mining",
  TMSS = "Text Mining for Social Sciences",
  DMB = "Data Mining for Business",
}

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

const RadioFormField = ({
  name,
  register,
  options,
}: {
  name: keyof Inputs;
  register: UseFormRegister<Inputs>;
  options: string[];
}) => {
  return (
    <StFormField>
      <p>{name}</p>

      {options.map((option, index) => (
        <label htmlFor={option}>
          <input
            {...register(name)}
            defaultChecked={index === 0}
            type="radio"
            value={option}
            id={option}
          />
          {option}
        </label>
      ))}
    </StFormField>
  );
};

const OptionsFormField = ({
  name,
  register,
  options,
}: {
  name: keyof Inputs;
  register: UseFormRegister<Inputs>;
  options: string[];
}) => {
  return (
    <StFormField>
      <p>{name}</p>

      <select {...register(name)}>
        {options.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </select>
    </StFormField>
  );
};

export default function TrainingInquiry() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  console.log(errors);
  console.log(watch("name"));

  const onSubmit: SubmitHandler<Inputs> = React.useCallback((data) => {
    console.log(data);
  }, []);

  return (
    <MainLayout title="Get in touch">
      <StForm onSubmit={handleSubmit(onSubmit)}>
        <FormField
          name="name"
          placeholder="Enter your name"
          register={register}
          required
        />
        <FormField
          name="affiliation"
          placeholder="Enter the name of your company/university"
          register={register}
        />
        <RadioFormField
          name="course"
          options={Object.values(CourseOptions)}
          register={register}
        />

        <OptionsFormField
          name="number of participants"
          options={["1", "2", "3"]}
          register={register}
        />

        <FormField name="online course" type="checkbox" register={register} />
        <FormField
          name="email"
          placeholder="Enter a contact email"
          type="email"
          register={register}
        />

        <StFormField>
          <label htmlFor={"message"}>message</label>
          <textarea
            placeholder="Write us a message"
            {...register("message", { required: true })}
          ></textarea>
        </StFormField>

        <label>
          Message:
          <textarea name="message"></textarea>
        </label>
        <input type="submit" value="Submit" />
      </StForm>
    </MainLayout>
  );
}

const StForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f8f8f8;
`;

const StFormField = styled.div``;

import { UseFormRegister } from "react-hook-form";
import React from "react";
import styled, { keyframes } from "styled-components";
import Button from "@components/UiKit/Button";
import device from "@styles/utils/breakpoints";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export const FormField = ({
  name,
  register,
  placeholder,
  required = false,
  type = "text",
}: {
  name: string;
  register: UseFormRegister<any>;
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

export const RadioFormField = ({
  name,
  register,
  options,
}: {
  name: string;
  register: UseFormRegister<any>;
  options: string[];
}) => {
  return (
    <StFormField>
      <p>{name}</p>

      {options.map((option, index) => (
        <label htmlFor={option} key={option}>
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

export const OptionsFormField = ({
  name,
  register,
  options,
}: {
  name: string;
  register: UseFormRegister<any>;
  options: string[] | number[];
}) => {
  return (
    <StFormField>
      <p>{name}</p>

      <select {...register(name)}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </StFormField>
  );
};

export const StButton = styled(Button)`
  border: none;

  &[disabled] {
    pointer-events: none;
  }
`;

export const StForm = styled.form`
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

export const StCostWrapper = styled.div`
  margin-bottom: 32px;

  p {
    font-size: 16px;
    padding: 6px 4px;
  }

  p + p {
    border-top: 1px solid ${(props) => props.theme.borderColor};
  }

  b {
    font-weight: 600;
  }
`;

export const StFormField = styled.div`
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

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const StLoader = styled(AiOutlineLoading3Quarters)`
  width: 24px;
  height: 24px;
  margin: 0 auto;
  display: block;
  animation: ${rotate} 0.6s linear infinite;
`;

export const StNotice = styled.p<{ $warning?: boolean }>`
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

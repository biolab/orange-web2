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
  affiliation: string;
  course: CourseOptions;
  numberOf: number;
  online: boolean;
  "E-mail": string;
  message: string;
  country: ContinentOptions;
};

enum CourseOptions {
  IDM = "Introduction to Data Mining",
  TMSS = "Text Mining for Social Sciences",
  DMB = "Data Mining for Business",
}

enum ContinentOptions {
  Europe = "Europe",
  Asia = "Asia",
  Africa = "Africa",
  NorthAmerica = "North America",
  SouthAmerica = "South America",
  Australia = "Australia and Oceania",
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

const OptionsFormField = ({
  name,
  register,
  options,
}: {
  name: keyof Inputs;
  register: UseFormRegister<Inputs>;
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

export default function TrainingInquiry() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState(false);

  const formValues = watch();

  const {
    travelExpenses,
    numberOfLecturers,
    discount,
    courseCost,
    numberOfParticipants,
    total,
    discountValue,
  } = React.useMemo(() => {
    let travelExpenses = 0;
    let courseCost = formValues.course === CourseOptions.DMB ? 1600 : 800;
    let numberOfLecturers = 1;

    if (formValues.numberOf > 10) {
      numberOfLecturers = 2;
    }
    if (formValues.numberOf > 20) {
      numberOfLecturers = 3;
    }

    let discount = formValues.numberOf > 10;

    if (!formValues.online) {
      switch (formValues.country) {
        default:
        case ContinentOptions.Europe:
          travelExpenses = 600;
          break;
        case ContinentOptions.NorthAmerica:
        case ContinentOptions.Asia:
        case ContinentOptions.Africa:
          travelExpenses = 1100;
          break;
        case ContinentOptions.SouthAmerica:
          travelExpenses = 1600;
          break;
        case ContinentOptions.Australia:
          travelExpenses = 2100;
          break;
      }
    }

    let numberOfParticipants = formValues.numberOf || 5;

    let expenses =
      travelExpenses * numberOfLecturers + courseCost * numberOfParticipants;

    let discountValue = 0.15 * expenses;

    let total = discount ? expenses - discountValue : expenses;

    return {
      travelExpenses,
      numberOfLecturers,
      discount,
      courseCost,
      numberOfParticipants,
      total,
      discountValue,
    };
  }, [formValues]);

  const onSubmit: SubmitHandler<Inputs> = React.useCallback(
    async (data) => {
      setLoading(true);
      setSuccess(false);
      setError(false);

      const searchParams = new URLSearchParams({
        ...data,
        price: total,
      } as any);

      try {
        const response = await fetch(
          "https://service.biolab.si/contact/training",
          {
            method: "POST",
            headers: {
              "Content-Type":
                "application/x-www-form-urlencoded; charset=UTF-8",
            },

            body: searchParams.toString(),
          }
        );

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
    },
    [total]
  );

  return (
    <MainLayout title="Get in touch">
      <Adapt $width650>
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

          <FormField name="online" type="checkbox" register={register} />

          <OptionsFormField
            name="numberOf"
            options={[5, 10, 15, 20, 50, 100]}
            register={register}
          />
          <OptionsFormField
            name="country"
            options={Object.values(ContinentOptions)}
            register={register}
          />

          <FormField
            name="E-mail"
            placeholder="Enter a contact email"
            type="email"
            register={register}
          />

          <StFormField>
            <label htmlFor={"message"}>message</label>
            <textarea
              placeholder="Write us a message"
              {...register("message", { required: false })}
            ></textarea>
          </StFormField>

          <StCostWrapper>
            <p>
              Course cost:{" "}
              <b>
                ${courseCost} x {numberOfParticipants}
              </b>
            </p>

            <p>
              Travel expenses:{" "}
              <b>
                ${travelExpenses} x {numberOfLecturers}
              </b>
            </p>

            {discount && (
              <p>
                Discount (15%): <b>${discountValue}</b>
              </p>
            )}
            <p>
              Total: <b>${total}</b>
            </p>
          </StCostWrapper>

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
              <AiOutlineInfoCircle /> The training inquiry was successfully sent
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

const StCostWrapper = styled.div`
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
      max-width: auto;
    }

    &[type="checkbox"] {
      margin: auto;
      width: 16px;
      height: 16px;
    }
  }
`;

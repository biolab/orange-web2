import MainLayout from "@components/UiKit/MainLayout";
import { useForm, SubmitHandler } from "react-hook-form";
import React from "react";
import Adapt from "@components/UiKit/Adapt";
import {
  FormField,
  OptionsFormField,
  RadioFormField,
  StButtonWithLoader,
  StCostWrapper,
  StForm,
  StFormField,
} from "@components/Form/FormFields";
import Alert, { AlertType } from "@components/Alert/Alert";
import { usePostForm } from "@hooks/usePostForm";

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

export default function TrainingInquiry() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

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

  const { error, success, loading, onSubmit } = usePostForm(
    "https://service.biolab.si/contact/training",
    { price: total },
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

          <StButtonWithLoader loading={loading} />

          <Alert
            show={success}
            type={AlertType.SUCCESS}
            text="The training inquiry was successfully sent"
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

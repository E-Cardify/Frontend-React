import { createFormContext } from "@mantine/form";

interface RegisterFormValues {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  repeatPassword: string;
  privacyPolicy: boolean;
}

export const [RegisterFormProvider, useRegisterFormContext, useRegisterForm] =
  createFormContext<RegisterFormValues>();

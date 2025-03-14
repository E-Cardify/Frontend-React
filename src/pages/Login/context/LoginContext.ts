import { createFormContext } from "@mantine/form";

interface LoginFormValues {
  email: string;
  password: string;
  rememberMe: boolean;
}

export const [LoginFormProvider, useLoginFormContext, useLoginForm] =
  createFormContext<LoginFormValues>();

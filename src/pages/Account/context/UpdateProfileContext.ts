import { createFormContext } from "@mantine/form";

interface UpdateProfileFormValues {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export const [
  UpdateProfileFormProvider,
  useUpdateProfileFormContext,
  useUpdateProfileForm,
] = createFormContext<UpdateProfileFormValues>();

import Field from "@interfaces/Field";
import { createFormContext } from "@mantine/form";

interface CardCreationFormValues {
  firstName: string;
  middleName: string;
  lastName: string;
  preferredName: string;
  maidenName: string;
  pronouns: string;
  title: string;
  department: string;
  company: string;
  headline: string;
  motto: string;
  color: string;
  style: string;
  fields: Field[];
}

export const [
  CardCreationFormProvider,
  useCardCreationFormContext,
  useCardCreationForm,
] = createFormContext<CardCreationFormValues>();

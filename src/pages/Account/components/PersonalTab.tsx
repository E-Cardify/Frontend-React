import Input from "@components/ui/Input";
import { useTranslation } from "react-i18next";

interface FormFieldProps {
  id: string;
  label: string;
  type?: "text" | "email" | "password";
}

const FormField = ({ id, label, type = "text" }: FormFieldProps) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col">
      <label
        className="font-Poppins font-semibold text-neutral-500"
        htmlFor={id}
      >
        {t(label)}:
      </label>
      <Input id={id} type={type} />
    </div>
  );
};

const Header = () => {
  const { t } = useTranslation();
  return (
    <h1 className="text-xl font-Poppins font-bold p-2 px-3 border-b-2 border-neutral-200">
      {t("General")}
    </h1>
  );
};

export default function PersonalTab() {
  return (
    <>
      <Header />
      <div className="flex gap-5 flex-col px-3 py-3">
        <FormField id="email" label="Email" />
        <FormField id="name" label="Name" />
        <FormField id="password" label="Password" type="password" />
      </div>
    </>
  );
}

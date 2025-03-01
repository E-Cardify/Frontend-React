import Input from "@components/ui/Input";
import useAuth from "@hooks/useAuth";
import { useTranslation } from "react-i18next";

interface FormFieldProps {
  id: string;
  label: string;
  type?: "text" | "email" | "password";
  placeholder?: string;
  useBlurFocusEffects?: boolean;
}

const FormField = ({
  id,
  label,
  type = "text",
  placeholder,
  useBlurFocusEffects = false,
}: FormFieldProps) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col">
      <label
        className="font-Poppins font-semibold text-neutral-500"
        htmlFor={id}
      >
        {t(label)}:
      </label>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
          if (useBlurFocusEffects) {
            const inputElement = e.target as HTMLInputElement;
            if (inputElement.value === inputElement.placeholder) {
              inputElement.value = "";
            }
          }
        }}
        onFocus={(e: React.FocusEvent<HTMLInputElement>) => {
          if (useBlurFocusEffects) {
            const inputElement = e.target as HTMLInputElement;
            if (inputElement.value === "") {
              inputElement.value = inputElement.placeholder;
            }
          }
        }}
      />
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
  const { user } = useAuth();

  return (
    <>
      <Header />
      <div className="flex gap-5 flex-col px-3 py-3">
        <FormField
          id="email"
          label="Email"
          placeholder={user?.data.email}
          useBlurFocusEffects
        />
        <FormField
          id="name"
          label="Name"
          placeholder={user?.data.firstName}
          useBlurFocusEffects
        />
        <FormField
          id="lastName"
          label="Last Name"
          placeholder={user?.data.lastName}
          useBlurFocusEffects
        />
        <FormField
          id="password"
          label="Password"
          type="password"
          placeholder="••••••••"
        />
        <FormField
          id="confirmPassword"
          label="Confirm Password"
          type="password"
          placeholder="••••••••"
        />
      </div>
    </>
  );
}

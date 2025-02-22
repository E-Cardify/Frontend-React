import Input from "@components/ui/Input";
import { useTranslation } from "react-i18next";

interface FormInputProps {
  id: string;
  type: "password" | "text" | "email";
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  label: string;
}

export default function FormInput({
  id,
  type,
  value,
  onChange,
  placeholder,
  label,
}: FormInputProps) {
  const { t } = useTranslation();

  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
      >
        {t(label)}
      </label>
      <Input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        required
        placeholder={placeholder}
      />
    </div>
  );
}

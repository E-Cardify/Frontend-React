import { Button, Group, PasswordInput, TextInputProps } from "@mantine/core";
import { useTranslation } from "react-i18next";
import GeneralTextInput from "../GeneralTextInput/GeneralTextInput";

interface Props extends TextInputProps {
  label: string;
  placeholder: string;
  onSubmit: () => void;
  type?: "password" | "text";
}

const InputWithSave = (props: Props) => {
  const { label, placeholder, type = "text", onSubmit, ...rest } = props;
  const { t } = useTranslation();

  return (
    <form onSubmit={onSubmit}>
      <Group align="end" w="100%">
        {type === "text" && (
          <GeneralTextInput
            flex={1}
            label={label}
            placeholder={placeholder}
            {...rest}
          />
        )}

        {type === "password" && (
          <PasswordInput flex={1} label={label} placeholder={placeholder} />
        )}

        <Group>
          <Button variant="filled" type="submit">
            {t("Save")}
          </Button>

          <Button variant="filled" color="red" type="button">
            {t("Reset")}
          </Button>
        </Group>
      </Group>
    </form>
  );
};

export default InputWithSave;

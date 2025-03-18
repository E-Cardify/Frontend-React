import { TextInput, TextInputProps } from "@mantine/core";
import { useTranslation } from "react-i18next";

interface Props {
  label: string;
  placeholder: string;
  withAsterisk?: boolean;
}

const GeneralTextInput = (props: Props & TextInputProps) => {
  const { t } = useTranslation();
  const { label, placeholder, withAsterisk, ...rest } = props;

  return (
    <>
      <TextInput
        placeholder={t(placeholder)}
        label={t(label)}
        withAsterisk={withAsterisk}
        size={"md"}
        mt={"md"}
        {...rest}
      />
    </>
  );
};

export default GeneralTextInput;

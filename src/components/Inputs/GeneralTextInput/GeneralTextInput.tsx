import { MantineSize, TextInput, TextInputProps } from "@mantine/core";
import { useTranslation } from "react-i18next";

interface Props {
  label: string;
  placeholder: string;
  withAsterisk?: boolean;
  size?: MantineSize;
  mt?: MantineSize;
}

const GeneralTextInput = (props: Props & TextInputProps) => {
  const { t } = useTranslation();
  const { label, placeholder, withAsterisk, size, mt, ...rest } = props;

  return (
    <>
      <TextInput
        placeholder={t(placeholder)}
        label={t(label)}
        withAsterisk={withAsterisk}
        size={size || "md"}
        mt={mt || "md"}
        {...rest}
      />
    </>
  );
};

export default GeneralTextInput;

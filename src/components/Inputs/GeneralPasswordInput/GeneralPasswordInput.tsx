import { MantineSize, PasswordInput, PasswordInputProps } from "@mantine/core";
import { useTranslation } from "react-i18next";

interface Props {
  label: string;
  placeholder: string;
  withAsterisk?: boolean;
  size?: MantineSize;
  mt?: MantineSize;
}

const GeneralPasswordInput = (props: Props & PasswordInputProps) => {
  const { t } = useTranslation();
  const { label, placeholder, withAsterisk, size, mt, ...rest } = props;

  return (
    <>
      <PasswordInput
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

export default GeneralPasswordInput;

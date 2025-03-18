import { Textarea, TextareaProps } from "@mantine/core";
import { useTranslation } from "react-i18next";

interface Props {
  label: string;
  placeholder: string;
  withAsterisk?: boolean;
}

const GeneralTextarea = (props: Props & TextareaProps) => {
  const { t } = useTranslation();
  const { label, placeholder, withAsterisk, ...rest } = props;

  return (
    <Textarea
      placeholder={t(placeholder)}
      label={t(label)}
      withAsterisk={withAsterisk}
      size={"md"}
      mt={"md"}
      {...rest}
    />
  );
};

export default GeneralTextarea;

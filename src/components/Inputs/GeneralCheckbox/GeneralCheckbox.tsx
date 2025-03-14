import { Checkbox, CheckboxProps, MantineSize } from "@mantine/core";
import { ReactNode } from "react";
import { useTranslation } from "react-i18next";

interface Props {
  label: string | ReactNode;
  size?: MantineSize;
  mt?: MantineSize;
}

const GeneralCheckbox = (props: Props & CheckboxProps) => {
  const { t } = useTranslation();
  const { label, size, mt, ...rest } = props;

  return (
    <>
      <Checkbox
        label={typeof label === "string" ? t(label) : label}
        size={size || "md"}
        mt={mt || "md"}
        {...rest}
      />
    </>
  );
};

export default GeneralCheckbox;

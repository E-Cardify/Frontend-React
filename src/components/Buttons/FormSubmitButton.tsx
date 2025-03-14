import { Button, ButtonProps, MantineColor } from "@mantine/core";
import { useTranslation } from "react-i18next";

interface Props {
  text: string;
  c?: MantineColor;
}

const FormSubmitButton = (props: Props & ButtonProps) => {
  const { t } = useTranslation();
  const { c, text, ...rest } = props;

  return (
    <Button
      variant="gradient"
      gradient={
        !c
          ? { from: "blue", to: "cyan" }
          : {
              from: c,
              to: c,
            }
      }
      type="submit"
      size="md"
      fullWidth
      mt="md"
      {...rest}
    >
      {t(text)}
    </Button>
  );
};

export default FormSubmitButton;

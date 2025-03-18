import { Button, ButtonProps, MantineColor } from "@mantine/core";
import { useTranslation } from "react-i18next";

interface Props {
  text: string;
  type?: "submit" | "button";
  c?: MantineColor;
  onClick?: () => void;
}

const FormSubmitButton = (props: Props & ButtonProps) => {
  const { t } = useTranslation();
  const { c, text, type, onClick, ...rest } = props;

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
      type={type || "submit"}
      size="md"
      onClick={onClick}
      fullWidth
      mt="md"
      {...rest}
    >
      {t(text)}
    </Button>
  );
};

export default FormSubmitButton;

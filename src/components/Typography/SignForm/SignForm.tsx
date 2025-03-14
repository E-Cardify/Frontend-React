import { Title, TitleProps } from "@mantine/core";
import { useTranslation } from "react-i18next";

interface Props extends TitleProps {
  text: string;
}

const SignForm = (props: Props) => {
  const { t } = useTranslation();
  const { text, ...rest } = props;

  return (
    <Title order={2} ta="center" mt="md" mb={50} {...rest}>
      {t(text)}!
    </Title>
  );
};

export default SignForm;

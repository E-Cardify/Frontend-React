import { Anchor, Text, TextProps } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface Props {
  text: string;
  linkText: string;
  to: string;
}

const ChangeSignForm = (props: Props & TextProps) => {
  const { t } = useTranslation();
  const { text, linkText, to, ...rest } = props;

  return (
    <Text size="md" ta="center" mt="xl" {...rest}>
      {t(text)}{" "}
      <Anchor component={Link} to={to} fw="bold">
        {t(linkText)}
      </Anchor>
    </Text>
  );
};

export default ChangeSignForm;

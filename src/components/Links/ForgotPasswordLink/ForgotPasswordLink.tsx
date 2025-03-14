import { Anchor, Text, TextProps } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const ForgotPasswordLink = (props: TextProps) => {
  const { t } = useTranslation();
  const { ...rest } = props;

  return (
    <>
      <Text size="xs" mt="sm" {...rest}>
        <Anchor component={Link} to="/forgot-password">
          {t("Forgot password?")}
        </Anchor>
      </Text>
    </>
  );
};

export default ForgotPasswordLink;

import { Divider, Group, MantineSpacing, StyleProp } from "@mantine/core";
import { GoogleButton } from "@components/Buttons/GoogleButton";
import { TwitterButton } from "@components/Buttons/TwitterButton";
import { useTranslation } from "react-i18next";

type Props = {
  my?: StyleProp<MantineSpacing>;
};

const LoginWithOAuth = (props: Props) => {
  const { t } = useTranslation();
  const { my } = props;

  return (
    <>
      <Group grow my="md" mt={my || "md"}>
        <GoogleButton>{t("Google")}</GoogleButton>
        <TwitterButton>{t("Twitter")}</TwitterButton>
      </Group>

      <Divider
        label={t("Or continue with email")}
        labelPosition="center"
        my="lg"
        mb={my || "lg"}
      />
    </>
  );
};

export default LoginWithOAuth;

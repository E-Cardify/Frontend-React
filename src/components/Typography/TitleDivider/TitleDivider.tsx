import { Divider, MantineSize, Stack, Title, TitleProps } from "@mantine/core";
import { ReactNode } from "react";
import { useTranslation } from "react-i18next";

interface Props extends TitleProps {
  text: string;
  children?: ReactNode;
  mb?: MantineSize;
  mt?: MantineSize | "0";
}

const TitleDivider = (props: Props) => {
  const { t } = useTranslation();
  const { text, mb, mt, children, ...rest } = props;

  return (
    <Stack gap={0}>
      <Title order={2} {...rest} mb="0" mt={mt || "xs"}>
        {t(text)}
        {children}
      </Title>
      <Divider size="xs" mt="0" mb={mb || "sm"} />
    </Stack>
  );
};

export default TitleDivider;

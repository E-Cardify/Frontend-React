import { Divider, MantineSize, Title, TitleProps } from "@mantine/core";
import { useTranslation } from "react-i18next";

interface Props extends TitleProps {
  text: string;
  mb?: MantineSize;
  mt?: MantineSize | "0";
}

const TitleDivider = (props: Props) => {
  const { t } = useTranslation();
  const { text, mb, mt, ...rest } = props;

  return (
    <>
      <Title order={2} {...rest} mb="0" mt={mt || "xs"}>
        {t(text)}
      </Title>
      <Divider size="xs" mt="0" mb={mb || "sm"} />
    </>
  );
};

export default TitleDivider;

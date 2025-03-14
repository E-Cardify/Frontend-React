import { Box, Text } from "@mantine/core";
import { Check, XIcon } from "lucide-react";

interface Props {
  meets: boolean;
  label: string;
}

const PasswordRequirement = (props: Props) => {
  const { meets, label } = props;

  return (
    <Text
      c={meets ? "teal" : "red"}
      style={{ display: "flex", alignItems: "center" }}
      mt={7}
      size="sm"
    >
      {meets ? <Check /> : <XIcon />}
      <Box ml={10}>{label}</Box>
    </Text>
  );
};

export default PasswordRequirement;

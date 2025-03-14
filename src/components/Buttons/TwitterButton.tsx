import { Button, ButtonProps } from "@mantine/core";
import { SiX } from "react-icons/si";

export function TwitterButton(
  props: ButtonProps & React.ComponentPropsWithoutRef<"button">
) {
  return (
    <Button leftSection={<SiX size={16} />} variant="default" {...props} />
  );
}

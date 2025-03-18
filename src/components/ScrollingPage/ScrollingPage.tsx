import { ScrollArea } from "@mantine/core";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ScrollingPage = (props: Props) => {
  const { children } = props;

  return <ScrollArea.Autosize h="100%">{children}</ScrollArea.Autosize>;
};

export default ScrollingPage;

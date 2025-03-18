import { ScrollArea } from "@mantine/core";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ScrollingPage = (props: Props) => {
  const { children } = props;

  return <ScrollArea.Autosize>{children}</ScrollArea.Autosize>;
};

export default ScrollingPage;

import { useContext } from "react";
import {
  ConfirmationPoppupContext,
  ConfirmationPoppupContextType,
} from "./ConfirmationPoppupContext";

export const useConfirmationPoppup = (): ConfirmationPoppupContextType => {
  const context = useContext(ConfirmationPoppupContext);
  if (!context) {
    throw new Error(
      "useConfirmationPoppup must be used within a ConfirmationPoppupContext"
    );
  }
  return context;
};

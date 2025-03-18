import { createContext } from "react";
import { CardInfoInterface } from "../../../interfaces/CardInfoInterface";

export type tabsType = "Display" | "Information" | "Fields";

interface CardCreationTabContextType {
  currentTab?: tabsType;
  setCurrentTab?: React.Dispatch<React.SetStateAction<tabsType>>;
  cardInfo: CardInfoInterface;
  setCardInfo: React.Dispatch<React.SetStateAction<CardInfoInterface>>;
}

const CardCreationTabContext = createContext<
  CardCreationTabContextType | undefined
>(undefined);
export { CardCreationTabContext };

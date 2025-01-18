import { createContext } from "react";

export type tabsType = "Display" | "Information" | "Fields";

export interface CardInfoInterface {
    information: {
        firstName?: string,
        middleName?: string,
        lastName?: string,
        preferredName?: string,
        maidenName?: string,
        pronouns?: string,
        title?: string,
        department?: string,
        company?: string,
        headline?: string,
        motto?: string,
    },
    design?: {
        color?: string
    }
}

interface CardCreationTabContextType {
    currentTab: tabsType;
    setCurrentTab: React.Dispatch<React.SetStateAction<tabsType>>;
    cardInfo: CardInfoInterface;
    setCardInfo: React.Dispatch<React.SetStateAction<CardInfoInterface>>;
}

const CardCreationTabContext = createContext<CardCreationTabContextType | undefined>(undefined);
export { CardCreationTabContext };
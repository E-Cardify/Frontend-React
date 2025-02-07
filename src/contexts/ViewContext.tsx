import {
  CardInfoInterface,
  getDefaultCardInterfaceObject,
} from "@interfaces/CardInfoInterface";
import { createContext, ReactNode, useState } from "react";
import { ModalProvider } from "./ModelContext";
import Poppup from "@components/ui/Poppup";
import { ConfirmationPoppupProvider } from "./ConfirmationPoppupContext";
import ConfirmationPoppup from "@components/ui/ConfirmationPoppup";

export type viewsType =
  | "Dashboard"
  | "Cards"
  | "Analytics"
  | "CardCreation"
  | "CardEditing"
  | "Account";

interface ViewContextType {
  currentView: viewsType;
  setCurrentView: React.Dispatch<React.SetStateAction<viewsType>>;
  editingCardInfo: CardInfoInterface;
  setEditingCardInfo: React.Dispatch<React.SetStateAction<CardInfoInterface>>;
}

const ViewContext = createContext<ViewContextType | undefined>(undefined);

function ViewProvider(props: { children: ReactNode }) {
  const [currentView, setCurrentView] = useState<viewsType>("Dashboard");
  const [editingCardInfo, setEditingCardInfo] = useState<CardInfoInterface>(
    getDefaultCardInterfaceObject()
  );

  return (
    <ViewContext.Provider
      value={{
        currentView,
        setCurrentView,
        editingCardInfo,
        setEditingCardInfo,
      }}
    >
      <ModalProvider>
        <ConfirmationPoppupProvider>
          {props.children}
          <Poppup />
          <ConfirmationPoppup />
        </ConfirmationPoppupProvider>
      </ModalProvider>
    </ViewContext.Provider>
  );
}

export { ViewContext, ViewProvider };

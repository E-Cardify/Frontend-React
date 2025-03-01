import { createContext } from "react";

interface DashboardViewContextType {
  currentView: "Overview" | "Notifications" | "History";
  setCurrentView: React.Dispatch<
    React.SetStateAction<"Overview" | "Notifications" | "History">
  >;
}

const DashboardViewContext = createContext<
  DashboardViewContextType | undefined
>(undefined);
export { DashboardViewContext };

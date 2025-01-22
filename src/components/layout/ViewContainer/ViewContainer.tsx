import {
  ReactNode,
  useState,
} from "react";
import useViewContext from "@hooks/useViewContext";
import Dashboard from "../Dashboard/Dashboard";
import { CardCreationComponent } from "../CardCreationComponent/CardCreationComponent";
import { DashboardViewContext } from "@hooks/DashboardViewContext";

export default function ViewContainer(props: {
  children?: ReactNode;
}) {
  const { currentView } =
    useViewContext();
  const [
    currentDashboardView,
    setCurrentView,
  ] = useState<
    | "Overview"
    | "Notifications"
    | "History"
  >("Overview");

  return (
    <DashboardViewContext.Provider
      value={{
        currentView:
          currentDashboardView,
        setCurrentView,
      }}
    >
      <div className="pl-10 pr-5 py-[3vh] flex-1">
        {props.children}
        {currentView == "Dashboard" && (
          <Dashboard />
        )}
        {currentView ==
          "CardCreation" && (
          <CardCreationComponent />
        )}
      </div>
    </DashboardViewContext.Provider>
  );
}

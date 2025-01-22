import {
  ReactNode,
  useState,
} from "react";
import useViewContext from "@contexts/useViewContext";
import Dashboard from "@features/Dashboard/Dashboard";
import { CardCreationComponent } from "@features/CardCreationComponent/CardCreationComponent";
import { DashboardViewContext } from "@contexts/DashboardViewContext";

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

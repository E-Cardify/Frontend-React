import { ReactNode, useState } from "react";
import useViewContext from "@contexts/useViewContext";
import Dashboard from "@pages/Dashboard/Dashboard";
import { CardCreationComponent } from "@pages/CardCreationComponent/CardCreationComponent";
import { DashboardViewContext } from "@contexts/DashboardViewContext";
import Cards from "@pages/Cards/Cards";
import { CardEditingComponent } from "@pages/CardEditingComponent/CardEditingComponent";

export default function ViewContainer(props: { children?: ReactNode }) {
  const { currentView } = useViewContext();
  const [currentDashboardView, setCurrentView] = useState<
    "Overview" | "Notifications" | "History"
  >("Overview");

  return (
    <DashboardViewContext.Provider
      value={{
        currentView: currentDashboardView,
        setCurrentView,
      }}
    >
      <div className="pl-10 pr-5 py-[3vh] flex-1">
        {props.children}

        {currentView == "Dashboard" && <Dashboard />}

        {currentView == "Cards" && <Cards />}

        {currentView == "CardCreation" && <CardCreationComponent />}

        {currentView == "CardEditing" && <CardEditingComponent />}
      </div>
    </DashboardViewContext.Provider>
  );
}

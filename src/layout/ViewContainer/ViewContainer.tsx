import { ReactNode, useState } from "react";
import { DashboardViewContext } from "@contexts/DashboardViewContext";

export default function ViewContainer(props: { children?: ReactNode }) {
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
      {props.children}
    </DashboardViewContext.Provider>
  );
}

import useDashboardViewContext from "@contexts/useDashboardViewContext";
import Overview from "./Overview/Overview";
import History from "./History/History";
import Navbar from "@layout/ViewContainer/Navbar";
import { useEffect } from "react";

export default function Dashboard() {
  const { currentView, setCurrentView } = useDashboardViewContext();

  useEffect(() => {
    setCurrentView("Overview");
  }, [setCurrentView]);

  return (
    <>
      <Navbar text="Dashboard" />
      {currentView === "Overview" && <Overview />}
      {currentView === "History" && <History />}
    </>
  );
}

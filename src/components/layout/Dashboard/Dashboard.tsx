import useDashboardViewContext from "@hooks/useDashboardViewContext";
import Overview from "./Overview/Overview";
import History from "./History/History";
import Navbar from "../ViewContainer/Navbar";
import { DashboardNavbarTabs } from "./DashboardNavbarTabs";

export default function Dashboard() {
  const { currentView } =
    useDashboardViewContext();

  return (
    <>
      <Navbar text="Dashboard">
        <DashboardNavbarTabs />
      </Navbar>
      {currentView === "Overview" && (
        <Overview />
      )}
      {currentView === "History" && (
        <History />
      )}
    </>
  );
}

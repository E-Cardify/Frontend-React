import useDashboardViewContext from "@hooks/useDashboardViewContext";
import { DashboardNavbar } from "./DashboardNavbar";
import Overview from "./Overview/Overview";

export default function Dashboard() {
  const { currentView } =
    useDashboardViewContext();

  return (
    <>
      <DashboardNavbar />
      {currentView === "Overview" && (
        <Overview />
      )}
    </>
  );
}

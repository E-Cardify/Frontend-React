import { useState } from "react";
import { DashboardViewContext } from "@hooks/DashboardViewContext";
import { DashboardNavbar } from "./DashboardNavbar";
import Overview from "./Overview/Overview";


export default function Dashboard() {
    const [currentView, setCurrentView] = useState<"Overview" | "Notifications" | "History">("Overview");

    return (
        <DashboardViewContext.Provider value={{ currentView, setCurrentView }}>
            <DashboardNavbar />
            {currentView === "Overview" && <Overview />}
        </DashboardViewContext.Provider >
    )
}
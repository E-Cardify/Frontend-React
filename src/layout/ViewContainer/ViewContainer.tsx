import { ReactNode, useState } from "react";
import Dashboard from "@pages/Dashboard/Dashboard";
import { CardCreationComponent } from "@pages/CardCreationComponent/CardCreationComponent";
import { DashboardViewContext } from "@contexts/DashboardViewContext";
import Cards from "@pages/Cards/Cards";
import { CardEditingComponent } from "@pages/CardEditingComponent/CardEditingComponent";
import Account from "@pages/Account/Account";
import { Navigate, Route, Routes } from "react-router-dom";

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
      <div className="pl-10 pr-5 py-[3vh] flex-1">
        {props.children}

        <Routes>
          <Route path="/dashboard" index element={<Dashboard />} />
          <Route path="/analytics" index element={<Dashboard />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/create-card" element={<CardCreationComponent />} />
          <Route path="/edit-card" element={<CardEditingComponent />} />
          <Route path="/account" element={<Account />} />
          <Route path="/notifications" element={<Account />} />
          <Route path="/*" element={<Navigate to="/management/dashboard" />} />
        </Routes>
      </div>
    </DashboardViewContext.Provider>
  );
}

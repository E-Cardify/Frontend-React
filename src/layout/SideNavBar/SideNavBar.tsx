import { useEffect, useState } from "react";
import { CollapseSideNavBarContext } from "@contexts/CollapseSideNavBarContext";
import { SideNavBarLogo } from "./SideNavBarLogo";
import { SideNavBarToggleTheme } from "./SideNavBarToggleTheme";
import { SideNavBarUpgradeNowButton } from "./SideNavBarUpgradeButton";
import {
  // BellIcon,
  CollapseIcon,
  CreditCardIcon,
  DashboardIcon,
  // PieChartIcon,
  PlusIcon,
  UserIcon,
} from "@icons";
import { useTranslation } from "react-i18next";
import ButtonSideNavBar from "@components/ui/Buttons/ButtonSideNavBar";
import { Link } from "react-router-dom";

export function SideNavBar() {
  const { t } = useTranslation();

  const [isCollapsed, setIsCollapsed] = useState(false);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  const handleCollapseSideNavBar = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    if (isMobile) {
      setIsCollapsed(true);
    }
  }, [isMobile]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <CollapseSideNavBarContext.Provider
      value={{
        isCollapsed,
        setIsCollapsed,
      }}
    >
      <div className="flex  flex-col sticky bg-white dark:bg-neutral-900 w-[240px] h-[95vh] rounded-lg top-[2.5vh] border-2 max-w-max px-2 py-2 left-5 t-5 dark:border-black">
        <div
          className={`flex items-center ${
            isMobile ? "justify-center mt-3" : "justify-between"
          }`}
        >
          <SideNavBarLogo />
          {!isMobile && (
            <div
              title={!isCollapsed ? t("Hide sidebar") : t("Show sidebar")}
              className="w-6 h-6 cursor-pointer text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-400"
              onClick={handleCollapseSideNavBar}
            >
              <CollapseIcon />
            </div>
          )}
        </div>

        <div className="gap-2 pt-6 flex flex-col overflow-x-auto items-center">
          <ButtonSideNavBar text="Dashboard" to="/management/dashboard">
            <DashboardIcon />
          </ButtonSideNavBar>

          <ButtonSideNavBar text="Cards" to="/management/cards">
            <CreditCardIcon />
          </ButtonSideNavBar>

          {/* <ButtonSideNavBar text="Notifications" to="/management/notifications"> */}
          {/* <BellIcon /> */}
          {/* </ButtonSideNavBar> */}

          <ButtonSideNavBar text="Account" to="/management/account">
            <UserIcon />
          </ButtonSideNavBar>

          {/* <ButtonSideNavBar text="Analytics">
            <PieChartIcon />
          </ButtonSideNavBar> */}
        </div>

        <Link
          to="/management/create-card"
          title={t("Add card")}
          className="h-8 w-8 mt-5 mb-2 text-green-500 hover:text-white overflow-hidden mx-auto border-2 border-green-500 rounded-lg cursor-pointer relative group hover:bg-green-500"
        >
          <PlusIcon />
        </Link>

        {/* bottom */}
        <div className="mt-auto">
          <SideNavBarUpgradeNowButton />
          <SideNavBarToggleTheme />
        </div>
      </div>
    </CollapseSideNavBarContext.Provider>
  );
}

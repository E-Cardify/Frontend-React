import { useState } from "react";
import { CollapseSideNavBarContext } from "@hooks/CollapseSideNavBarContext";
import { SideNavBarItem } from "./SideNavBarItem";
import { SideNavBarLogo } from "./SideNavBarLogo";
import { SideNavBarToggleTheme } from "./SideNavBarToggleTheme";
import { SideNavBarUpgradeNowButton } from "./SideNavBarUpgradeButton";
import { CollapseIcon, CreditCardIcon, DashboardIcon, PieChartIcon, PlusIcon } from "@icons";
import { useTranslation } from "react-i18next";

export function SideNavBar() {
    const { t } = useTranslation();
    const [isCollapsed, setIsCollapsed] = useState(false);

    const handleCollapseSideNavBar = () => {
        setIsCollapsed(!isCollapsed);
    }

    return (
        <CollapseSideNavBarContext.Provider value={{ isCollapsed, setIsCollapsed }}>
            <div className="flex  flex-col sticky bg-white dark:bg-neutral-900 w-[240px] h-[95vh] rounded-lg top-[2.5vh] border-2 max-w-max px-2 py-2 left-5 t-5 dark:border-black">
                <div className="flex justify-between items-center">
                    <SideNavBarLogo />
                    <div title={!isCollapsed ? t("Hide sidebar") : t("Show sidebar")} className="w-6 h-6 cursor-pointer text-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-400" onClick={handleCollapseSideNavBar}>
                        <CollapseIcon />
                    </div>
                </div>

                <div className="gap-2 pt-6 flex flex-col overflow-x-auto items-center">
                    <SideNavBarItem text="Dashboard">
                        <DashboardIcon />
                    </SideNavBarItem>

                    <SideNavBarItem text="Cards">
                        <CreditCardIcon />
                    </SideNavBarItem>

                    <SideNavBarItem text="Analytics">
                        <PieChartIcon />
                    </SideNavBarItem>
                </div>

                <div title={t("Add card")} className="h-8 w-8 mt-5 mb-2 text-green-500 mx-auto border-2 border-green-500 rounded-lg cursor-pointer">
                    <PlusIcon />
                </div>

                {/* bottom */}
                <div className="mt-auto">
                    <SideNavBarUpgradeNowButton />
                    <SideNavBarToggleTheme />
                </div>
            </div>
        </CollapseSideNavBarContext.Provider>
    );
}

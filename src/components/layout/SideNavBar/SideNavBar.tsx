import { useState } from "react";
import CollapseIcon from "../../../assets/icons/Collapse";
import CreditCardIcon from "../../../assets/icons/CreditCard";
import DashboardIcon from "../../../assets/icons/Dashboard";
import PieChartIcon from "../../../assets/icons/PieChart";
import PlusIcon from "../../../assets/icons/Plus";
import { CollapseSideNavBarContext } from "../../../hooks/CollapseSideNavBarContext";
import { SideNavBarItem } from "./SideNavBarItem";
import { SideNavBarLogo } from "./SideNavBarLogo";
import { SideNavBarToggleTheme } from "./SideNavBarToggleTheme";
import { SideNavBarUpgradeNowButton } from "./SideNavBarUpgradeNowButton";

export function SideNavBar() {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const handleCollapseSideNavBar = () => {
        setIsCollapsed(!isCollapsed);
    }

    return (
        <CollapseSideNavBarContext.Provider value={{ isCollapsed, setIsCollapsed }}>
            <div className="flex  flex-col fixed bg-white h-[95vh] rounded-lg top-[2.5vh] border-2 max-w-max px-2 py-2 left-5 t-5">
                <div className="flex justify-between items-center">
                    <SideNavBarLogo />
                    <div className="w-6 h-6 cursor-pointer text-neutral-500" onClick={handleCollapseSideNavBar}>
                        <CollapseIcon />
                    </div>
                </div>

                <div className="gap-2 pt-6 flex flex-col overflow-x-auto">
                    <SideNavBarItem text="Dashboard" active={true}>
                        <DashboardIcon />
                    </SideNavBarItem>

                    <SideNavBarItem text="Cards">
                        <CreditCardIcon />
                    </SideNavBarItem>

                    <SideNavBarItem text="Analytics">
                        <PieChartIcon />
                    </SideNavBarItem>
                </div>

                <div className="h-8 w-8 mt-5 mb-2 text-green-500 mx-auto border-2 border-green-500 rounded-lg cursor-pointer">
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

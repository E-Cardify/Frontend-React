import CollapseIcon from "../../../assets/icons/Collapse";
import CreditCardIcon from "../../../assets/icons/CreditCard";
import DashboardIcon from "../../../assets/icons/Dashboard";
import PieChartIcon from "../../../assets/icons/PieChart";
import PlusIcon from "../../../assets/icons/Plus";
import { SideNavBarItem } from "./SideNavBarItem";
import { SideNavBarLogo } from "./SideNavBarLogo";
import { SideNavBarToggleTheme } from "./SideNavBarToggleTheme";
import { SideNavBarUpgradeNowButton } from "./SideNavBarUpgradeNowButton";

export function SideNavBar() {
    return (
        <div className="flex  flex-col fixed bg-white h-[95vh] rounded-lg top-[2.5vh] border-2 max-w-max px-2 py-2 left-5 t-5">
            <div className="flex justify-between items-center">
                <SideNavBarLogo />
                <div className="w-6 h-6 cursor-pointer text-neutral-500">
                    <CollapseIcon />
                </div>
            </div>

            <div className="gap-2 pt-6 flex flex-col">
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

            <div className="h-8 w-8 mt-5 text-green-500 mx-auto border-2 border-green-500 rounded-lg cursor-pointer">
                <PlusIcon />
            </div>

            {/* bottom */}
            <div className="mt-auto">
                <SideNavBarUpgradeNowButton></SideNavBarUpgradeNowButton>
                <SideNavBarToggleTheme />
            </div>
        </div>
    );
}

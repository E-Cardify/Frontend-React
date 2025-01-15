import { ReactNode } from "react";
import useViewContext from "@hooks/useViewContext";
import useCollapseSideNavBarContext from "@hooks/useCollapseSideNavBarContext";
import { useTranslation } from "react-i18next";


export function SideNavBarItem(props: {
    active?: boolean;
    children?: ReactNode;
    text: "Dashboard" | "Cards" | "Analytics";
}) {
    const { t } = useTranslation();
    const { isCollapsed } = useCollapseSideNavBarContext();
    const { currentView, setCurrentView } = useViewContext();

    const handleViewChange = () => {
        setCurrentView(props.text);
    }

    return (
        <div title={isCollapsed ? t(props.text) : ""} className={`flex gap-x-1 cursor-pointer items-center ${!isCollapsed ? "w-full" : "w-max"} py-2 rounded-md px-1 font-Roboto text-sm ${currentView == props.text ? "bg-green-500 text-white" : "text-neutral-500"}`}
            onClick={handleViewChange}>
            <div className={`${!isCollapsed ? "h-5 w-5" : "h-10 w-10 p-1"} flex items-center justify-center`}>
                {props.children}
            </div>
            {(props.text && !isCollapsed) && <h1 className="flex items-center justify-center">{t(props.text)}</h1>}
        </div>
    );
}

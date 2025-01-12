import { ReactNode } from "react";
import useViewContext from "../../../hooks/useViewContext";
import useCollapseSideNavBarContext from "../../../hooks/useCollapseSideNavBarContext";


export function SideNavBarItem(props: {
    active?: boolean;
    children?: ReactNode;
    text: "Dashboard" | "Cards" | "Analytics";
}) {
    const { isCollapsed } = useCollapseSideNavBarContext();
    const { currentView, setCurrentView } = useViewContext();

    const handleViewChange = () => {
        setCurrentView(props.text);
    }

    return (
        <div className={`flex gap-x-1 cursor-pointer items-center ${!isCollapsed && "min-w-[200px]"} py-2 rounded-md px-1 font-Roboto text-sm ${currentView == props.text ? "bg-green-500 text-white" : "text-neutral-500"}`}
            onClick={handleViewChange}>
            <div className={`${!isCollapsed ? "h-5 w-5" : "w-full p-3"} flex items-center justify-center`}>
                {props.children}
            </div>
            {(props.text && !isCollapsed) && <h1 className="flex items-center justify-center">{props.text}</h1>}
        </div>
    );
}

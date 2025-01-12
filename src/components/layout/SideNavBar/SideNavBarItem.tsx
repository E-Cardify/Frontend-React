import { ReactNode } from "react";
import useViewContext from "../../../hooks/useViewContext";


export function SideNavBarItem(props: {
    active?: boolean;
    children?: ReactNode;
    text: "Dashboard" | "Cards" | "Analytics";
}) {
    const { currentView, setCurrentView } = useViewContext();

    const handleViewChange = () => {
        setCurrentView(props.text);
    }

    return (
        <div className={`flex gap-x-1 cursor-pointer items-center min-w-[200px] py-2 rounded-md px-1 font-Roboto text-sm ${currentView == props.text ? "bg-green-500 text-white" : "text-neutral-500"}`}
            onClick={handleViewChange}>
            <div className="h-5 w-5 flex items-center justify-center">
                {props.children}
            </div>
            {props.text && <h1 className="flex items-center justify-center">{props.text}</h1>}
        </div>
    );
}

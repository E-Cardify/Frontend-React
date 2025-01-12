import { ReactNode } from "react"
import useViewContext from "../../../hooks/useViewContext";
import Dashboard from "../Dashboard/Dashboard";

export default function ViewContainer(props: {
    children?: ReactNode;
}) {
    const { currentView } = useViewContext();

    return (
        <div className="pl-10 pr-5 pt-[3vh] flex-1">
            {props.children}
            {currentView == "Dashboard" && <Dashboard />}
        </div>
    )
}
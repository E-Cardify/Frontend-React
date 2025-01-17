import { ReactNode } from "react"
import useViewContext from "@hooks/useViewContext";
import Dashboard from "../Dashboard/Dashboard";

function CardCreationComponent() {
    return (
        <></>
    )
}

export default function ViewContainer(props: {
    children?: ReactNode;
}) {
    const { currentView } = useViewContext();

    return (
        <div className="pl-10 pr-5 pt-[3vh] flex-1">
            {props.children}
            {currentView == "Dashboard" && <Dashboard />}
            {currentView == "CardCreation" && <CardCreationComponent />}
        </div>
    )
}
import { createContext, ReactNode, useState } from "react";

interface ViewContextType {
    currentView: "Dashboard" | "Cards" | "Analytics";
    setCurrentView: React.Dispatch<React.SetStateAction<"Dashboard" | "Cards" | "Analytics">>;
}

const ViewContext = createContext<ViewContextType | undefined>(undefined);

function ViewProvider(props: { children: ReactNode }) {
    const [currentView, setCurrentView] = useState<"Dashboard" | "Cards" | "Analytics">("Dashboard");

    return (
        <ViewContext.Provider value={{ currentView, setCurrentView }}>
            {props.children}
        </ViewContext.Provider>)
}

export { ViewContext, ViewProvider };
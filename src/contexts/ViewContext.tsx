import { createContext, ReactNode, useState } from "react";

export type viewsType = "Dashboard" | "Cards" | "Analytics" | "CardCreation";

interface ViewContextType {
    currentView: viewsType;
    setCurrentView: React.Dispatch<React.SetStateAction<viewsType>>;
}

const ViewContext = createContext<ViewContextType | undefined>(undefined);

function ViewProvider(props: { children: ReactNode }) {
    const [currentView, setCurrentView] = useState<viewsType>("Dashboard");

    return (
        <ViewContext.Provider value={{ currentView, setCurrentView }}>
            {props.children}
        </ViewContext.Provider>)
}

export { ViewContext, ViewProvider };
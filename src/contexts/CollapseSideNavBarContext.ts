import { createContext } from "react";

interface CollapseSideNavBarContextType {
    isCollapsed: boolean;
    setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

const CollapseSideNavBarContext = createContext<CollapseSideNavBarContextType | undefined>(undefined);

export { CollapseSideNavBarContext };
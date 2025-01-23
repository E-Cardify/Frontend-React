import { useContext } from "react"
import { CollapseSideNavBarContext } from "./CollapseSideNavBarContext"

export default function useCollapseSideNavBarContext() {
    const context = useContext(CollapseSideNavBarContext)

    if (context === undefined) {
        throw new Error('useCollapseSideNavBarContext must be used within a CollapseSideNavBarContextProvider')
    }
    return context
}
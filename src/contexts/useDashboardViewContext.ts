import { useContext } from "react"
import { DashboardViewContext } from "./DashboardViewContext"

export default function useDashboardViewContext() {
    const context = useContext(DashboardViewContext)

    if (context === undefined) {
        throw new Error('useDashboardViewContext must be used within a DashboardViewContext')
    }
    return context
}
import { useContext } from "react"
import { ViewContext } from "./ViewContext"

export default function useViewContext() {
    const context = useContext(ViewContext)

    if (context === undefined) {
        throw new Error('useViewContext must be used within a ViewProvider')
    }
    return context
}
import { useContext } from "react"
import { CardCreationTabContext } from "./CardCreationTabContext"

export default function useCardCreationTabContext() {
    const context = useContext(CardCreationTabContext)

    if (context === undefined) {
        throw new Error('useCardCreationTabContext must be used within a CardCreationTabContext')
    }
    return context
}
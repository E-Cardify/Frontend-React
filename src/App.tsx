import { SideNavBar } from "./components"
import { ViewProvider } from "./hooks/ViewContext"

function App() {
  return (
    <div className="min-h-[200vh] bg-gray-100">
      <ViewProvider>
        <SideNavBar />
      </ViewProvider>
    </div>
  )
}

export default App

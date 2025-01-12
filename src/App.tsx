import { SideNavBar, ViewContainer } from "./components"
import { ViewProvider } from "./hooks/ViewContext"

function App() {
  return (
    <div className="min-h-[200vh] bg-gray-100 dark:bg-neutral-800 flex">
      <ViewProvider>
        <SideNavBar />
        <ViewContainer />
      </ViewProvider>
    </div>
  )
}

export default App

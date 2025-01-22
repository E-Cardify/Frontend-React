import { SideNavBar } from "@layout/SideNavBar/SideNavBar";
import ViewContainer from "@layout/ViewContainer/ViewContainer";
import { ViewProvider } from "@contexts/ViewContext";

function App() {
  return (
    <div className="min-h-[100svh] bg-gray-100 dark:bg-neutral-800 flex">
      <ViewProvider>
        <SideNavBar />
        <ViewContainer />
      </ViewProvider>
    </div>
  );
}

export default App;

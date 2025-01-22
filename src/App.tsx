import { SideNavBar } from "@layout/SideNavBar/SideNavBar";
import ViewContainer from "@layout/ViewContainer/ViewContainer";
import { ViewProvider } from "@contexts/ViewContext";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <div className="min-h-[100svh] bg-gray-100 dark:bg-neutral-800 flex">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<div>Hello</div>}
          />

          <Route
            path="/management/*"
            element={
              <ViewProvider>
                <SideNavBar />
                <ViewContainer />
              </ViewProvider>
            }
          />

          <Route
            path="*"
            element={<div>404</div>}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

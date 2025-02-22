import { SideNavBar } from "@layout/SideNavBar/SideNavBar";
import ViewContainer from "@layout/ViewContainer/ViewContainer";
import { ViewProvider } from "@contexts/ViewContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ComponentPreview from "@pages/ComponentPreview/ComponentPreview";
import Card from "@pages/Card/Card";
import Login from "@pages/Auth/Login";
import Register from "@pages/Auth/Register";
import { ModalProvider } from "@contexts/ModelContext";
import ConfirmationPoppup from "@components/ui/ConfirmationPoppup";
import Poppup from "@components/ui/Poppup";
import { ConfirmationPoppupProvider } from "@contexts/ConfirmationPoppupContext";
import ProtectedRoute from "@components/auth/ProtectedRoute";

function App() {
  return (
    <div className="min-h-[100svh] bg-gray-100 dark:bg-neutral-800 flex">
      <ModalProvider>
        <ConfirmationPoppupProvider>
          <Poppup />
          <ConfirmationPoppup />
          <Router>
            <Routes>
              <Route path="/" element={<div>Hello</div>} />

              <Route
                path="/card/:id"
                element={
                  <ProtectedRoute>
                    <Card />
                  </ProtectedRoute>
                }
              />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route
                path="/management/*"
                element={
                  <ProtectedRoute>
                    <ViewProvider>
                      <SideNavBar />
                      <ViewContainer />
                    </ViewProvider>
                  </ProtectedRoute>
                }
              />

              <Route
                path="/components-preview"
                element={<ComponentPreview />}
              />

              <Route path="*" element={<div>404</div>} />
            </Routes>
          </Router>
        </ConfirmationPoppupProvider>
      </ModalProvider>
    </div>
  );
}

export default App;

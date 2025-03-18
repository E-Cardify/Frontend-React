import { Route, Routes, useNavigate } from "react-router-dom";
import Card from "@pages/Card/Card";
import Login from "@pages/Login/Login";
import Register from "@pages/Register/Register";
import { setNavigate } from "./lib/navigation";
import { MantineProvider } from "@mantine/core";
import theme from "./lib/theme";
import AppContainer from "@components/AppContainer/AppContainer";
import Account from "@pages/Account/Account";
import Dashboard from "@pages/Dashboard/Dashboard";
import { CardEditingComponent } from "@pages/CardEditingComponent/CardEditingComponent";
import { CardCreationComponent } from "@pages/CardCreationComponent/CardCreationComponent";
import Cards from "@pages/Cards/Cards";
import { Notifications } from "@mantine/notifications";
import { ModalsProvider } from "@mantine/modals";

function App() {
  const navigate = useNavigate();
  setNavigate(navigate);

  return (
    <MantineProvider defaultColorScheme="light" theme={theme}>
      <ModalsProvider>
        <Notifications position="top-right" />

        <Routes>
          <Route path="/card/:id" element={<Card />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/" element={<AppContainer />}>
            <Route index element={<Dashboard />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="cards" element={<Cards />} />
            <Route path="create-card" element={<CardCreationComponent />} />
            <Route path="edit-card" element={<CardEditingComponent />} />
            <Route path="account" element={<Account />} />
          </Route>

          <Route path="*" element={<div>404</div>} />
        </Routes>
      </ModalsProvider>
    </MantineProvider>
  );
}

export default App;

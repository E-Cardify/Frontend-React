import useAuth from "@hooks/useAuth";
import { AppShell, Loader } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Navigate, Outlet } from "react-router-dom";
import Header from "./components/Header";
import { Navbar } from "./components/Navbar";
import classes from "./AppContainer.module.css";

const AppContainer = () => {
  const { user, isLoading } = useAuth();

  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  return isLoading ? (
    <div className={classes.loaderContainer}>
      <Loader size={50} />
    </div>
  ) : user && user.data ? (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        breakpoint: "sm",
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
        width: 200,
      }}
    >
      <AppShell.Header>
        <Header toggleMobile={toggleMobile} toggleDesktop={toggleDesktop} />
      </AppShell.Header>
      <AppShell.Navbar>
        <Navbar toggleMobile={toggleMobile} />
      </AppShell.Navbar>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  ) : (
    <Navigate
      to="/login"
      replace
      state={{ redirect: window.location.pathname }}
    />
  );
};

export default AppContainer;

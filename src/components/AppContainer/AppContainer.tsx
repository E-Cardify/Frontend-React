import useAuth from "@hooks/useAuth";
import { AppShell, Box, Loader, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Navigate, Outlet } from "react-router-dom";
import Header from "./components/Header";
import { Navbar } from "./components/Navbar";
import EmailNotVerifiedNotification from "@components/Notifications/EmailNotVerifiedNotification/EmailNotVerifiedNotification";
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
      padding="md"
    >
      <AppShell.Header>
        <Header toggleMobile={toggleMobile} toggleDesktop={toggleDesktop} />
      </AppShell.Header>
      <AppShell.Navbar>
        <Navbar toggleMobile={toggleMobile} />
      </AppShell.Navbar>
      <AppShell.Main pb={0}>
        <Stack
          style={{
            overflow: "hidden",
            maxHeight: "calc(100svh - 60px - 16px)",
            gap: 0,
          }}
        >
          {!user.data.isVerified && (
            <Box>
              <EmailNotVerifiedNotification />
            </Box>
          )}
          <Outlet />
        </Stack>
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

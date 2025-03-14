import useAuth from "@hooks/useAuth";
import { Alert, AppShell, Container, Loader } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Navigate, Outlet } from "react-router-dom";
import Header from "./Header";
import { Navbar } from "@layout/SideNavBar/Navbar";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const MailNotVerifiedNotification = () => {
  const [isVisible, setIsVisible] = useState(true);
  const { t } = useTranslation();

  return (
    <>
      {isVisible && (
        <Alert
          variant="light"
          color="yellow"
          title="Email Verification Required"
          mb="30"
          withCloseButton
          onClose={() => {
            setIsVisible(false);
          }}
        >
          {t(
            "Check your email and please verify your email to access all features."
          )}
        </Alert>
      )}
    </>
  );
};

const AppContainer = () => {
  const { user, isLoading } = useAuth();

  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  return isLoading ? (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Loader size={50} />
    </Container>
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
        <Navbar />
      </AppShell.Navbar>
      <AppShell.Main>
        {!user.data.isVerified && <MailNotVerifiedNotification />}
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

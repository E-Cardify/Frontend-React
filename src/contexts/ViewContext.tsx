import {
  BellIcon,
  CollapseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from "@icons";
import {
  CardInfoInterface,
  getDefaultCardInterfaceObject,
} from "@interfaces/CardInfoInterface";
import { SideNavBarLogo } from "@layout/SideNavBar/SideNavBarLogo";
import {
  AppShell,
  Group,
  ActionIcon,
  useMantineColorScheme,
  Tooltip,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { createContext, ReactNode, useState } from "react";
import { useTranslation } from "react-i18next";

export type viewsType =
  | "Dashboard"
  | "Cards"
  | "Analytics"
  | "CardCreation"
  | "CardEditing"
  | "Account";

interface ViewContextType {
  currentView: viewsType;
  setCurrentView: React.Dispatch<React.SetStateAction<viewsType>>;
  editingCardInfo: CardInfoInterface;
  setEditingCardInfo: React.Dispatch<React.SetStateAction<CardInfoInterface>>;
}

const ViewContext = createContext<ViewContextType | undefined>(undefined);

function ViewProvider(props: { children: ReactNode }) {
  const [currentView, setCurrentView] = useState<viewsType>("Dashboard");
  const [editingCardInfo, setEditingCardInfo] = useState<CardInfoInterface>(
    getDefaultCardInterfaceObject()
  );

  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  const { t } = useTranslation();

  return (
    <ViewContext.Provider
      value={{
        currentView,
        setCurrentView,
        editingCardInfo,
        setEditingCardInfo,
      }}
    >
      <div className="z-30">
        <AppShell
          header={{ height: 60 }}
          navbar={{
            width: 200,
            breakpoint: "sm",
            collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
          }}
          padding="md"
        >
          {props.children}
          <AppShell.Header>
            <Group h="100%" px="md">
              <ActionIcon
                variant="subtle"
                color="gray"
                size="compact-lg"
                onClick={toggleDesktop}
                visibleFrom="sm"
              >
                <CollapseIcon size={16} />
              </ActionIcon>
              <ActionIcon
                variant="subtle"
                color="gray"
                size="compact-lg"
                onClick={toggleMobile}
                hiddenFrom="sm"
              >
                <CollapseIcon size={16} />
              </ActionIcon>
              <SideNavBarLogo />
              <Group ml="auto" gap="8">
                <Tooltip
                  label={
                    colorScheme === "light" ? t("Dark mode") : t("Light mode")
                  }
                >
                  <ActionIcon
                    variant="default"
                    aria-label="Notifications"
                    size="lg"
                    onClick={toggleColorScheme}
                  >
                    {colorScheme === "light" ? (
                      <MoonIcon width="70%" height="70%" />
                    ) : (
                      <SunIcon width="70%" height="70%" />
                    )}
                  </ActionIcon>
                </Tooltip>
                <Tooltip label={t("Notifications")}>
                  <ActionIcon
                    variant="default"
                    aria-label="Notifications"
                    size="lg"
                  >
                    <BellIcon width="70%" height="70%" />
                  </ActionIcon>
                </Tooltip>
                <Tooltip label={t("Settings")}>
                  <ActionIcon
                    variant="default"
                    aria-label="Notifications"
                    size="lg"
                  >
                    <SettingsIcon width="70%" height="70%" />
                  </ActionIcon>
                </Tooltip>
              </Group>
            </Group>
          </AppShell.Header>
        </AppShell>
      </div>
    </ViewContext.Provider>
  );
}

export { ViewContext, ViewProvider };

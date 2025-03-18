import { BellIcon, SettingsIcon, MoonIcon, SunIcon } from "@icons";
import { SideNavBarLogo } from "@components/Logo/Logo";
import { ActionIcon, Tooltip, useMantineColorScheme } from "@mantine/core";

import { Group } from "@mantine/core";

import { useTranslation } from "react-i18next";
import NavbarToggle from "./NavbarToggle";
import { ReactNode, useMemo } from "react";
import { Link } from "react-router-dom";

type ActionIconProps = {
  label: string;
  icon: ReactNode;
  onClick?: () => void;
  to?: string;
};

type Props = {
  toggleMobile: () => void;
  toggleDesktop: () => void;
};

const Header = ({ toggleMobile, toggleDesktop }: Props) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { t } = useTranslation();

  const actionIcons: ActionIconProps[] = useMemo(() => {
    return [
      {
        label: colorScheme === "light" ? "Dark mode" : "Light mode",
        icon:
          colorScheme === "light" ? (
            <MoonIcon width="70%" height="70%" />
          ) : (
            <SunIcon width="70%" height="70%" />
          ),
        onClick: toggleColorScheme,
      },
      {
        label: "Notifications",
        icon: <BellIcon width="70%" height="70%" />,
        to: "/notifications",
      },
      {
        label: "Settings",
        icon: <SettingsIcon width="70%" height="70%" />,
        to: "/settings",
      },
    ];
  }, [colorScheme, toggleColorScheme]);

  return (
    <Group h="100%" px="md">
      <NavbarToggle toggleDesktop={toggleDesktop} toggleMobile={toggleMobile} />
      <SideNavBarLogo />
      <Group ml="auto" gap="8">
        {actionIcons.map((actionIcon) => {
          return (
            <Tooltip label={t(actionIcon.label)} key={actionIcon.label}>
              <ActionIcon
                variant="default"
                aria-label={t(actionIcon.label)}
                size="lg"
                onClick={actionIcon.onClick}
                component={actionIcon.to ? Link : undefined}
                to={actionIcon.to || ""}
              >
                {actionIcon.icon}
              </ActionIcon>
            </Tooltip>
          );
        })}
      </Group>
    </Group>
  );
};

export default Header;

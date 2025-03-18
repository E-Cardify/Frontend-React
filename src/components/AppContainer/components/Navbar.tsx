import { CreditCardIcon, DashboardIcon, PlusIcon, UserIcon } from "@icons";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import {
  ActionIcon,
  Button,
  Card,
  Group,
  NavLink,
  Stack,
  Text,
} from "@mantine/core";
import { ReactNode, useMemo } from "react";

export type NavLinkType = {
  link: string;
  label: string;
  icon: ReactNode;
};

interface Props {
  toggleMobile: () => void;
}

export function Navbar(props: Props) {
  const { toggleMobile } = props;

  const { t } = useTranslation();
  const location = useLocation();

  const navLinks: NavLinkType[] = useMemo(() => {
    return [
      {
        link: "/",
        label: "Dashboard",
        icon: <DashboardIcon size={12} />,
      },
      {
        link: "/cards",
        label: "Cards",
        icon: <CreditCardIcon size={12} />,
      },
      {
        link: "/account",
        label: "Account",
        icon: <UserIcon width="24px" height="24px" />,
      },
    ];
  }, []);

  return (
    <Stack h="100%" justify="center" align="center">
      <Group gap="0">
        {navLinks.map((link) => {
          return (
            <NavLink
              component={Link}
              to={link.link}
              active={location.pathname === link.link}
              label={t(link.label)}
              leftSection={link.icon}
              key={link.link}
              onClick={() => {
                toggleMobile();
              }}
            />
          );
        })}
      </Group>

      <ActionIcon
        style={{
          borderWidth: "2px",
          borderRadius: "10px",
        }}
        variant="outline"
        size="lg"
        component={Link}
        to="/create-card"
      >
        <PlusIcon width="85%" height="85%" />
      </ActionIcon>

      <Stack mt={"auto"}>
        <Card>
          <Text size="xs" style={{ userSelect: "none" }}>
            {t("Get detailed analytics to help you, upgrade and go pro")}
          </Text>
          <Button
            mt="xs"
            variant="filled"
            size="sm"
            style={{ userSelect: "none" }}
            title={t("Show Premium Options")}
          >
            {t("Upgrade Now")}
          </Button>
        </Card>
      </Stack>
    </Stack>
  );
}

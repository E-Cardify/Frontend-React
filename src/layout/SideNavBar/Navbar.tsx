import { CreditCardIcon, DashboardIcon, PlusIcon, UserIcon } from "@icons";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
// import useAuth from "@hooks/useAuth";
// import { useModal } from "@contexts/useModelContext";
// import { useQuery } from "@tanstack/react-query";
// import { getCards } from "../../lib/api";
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

export function Navbar() {
  const { t } = useTranslation();
  const location = useLocation();
  // const { showModal: showToast } = useModal();

  // const { user } = useAuth();
  // const { data: cards } = useQuery({
  // queryKey: ["cards"],
  // queryFn: () => getCards(),
  // });

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

      {/* <Link
          to={
            cards?.data && cards?.data.length >= user?.data.maxCards
              ? ""
              : "/create-card"
          }
          title={
            cards?.data && cards?.data.length >= user?.data.maxCards
              ? t("Max cards reached")
              : t("Add card")
          }
          className={`h-8 w-8 mt-5 mb-2 text-green-500 hover:text-white overflow-hidden mx-auto border-2 border-green-500 rounded-lg cursor-pointer relative group hover:bg-green-500 ${
            cards?.data && cards?.data.length >= user?.data.maxCards
              ? `
            border-red-500 text-red-500 hover:bg-red-500 cursor-not-allowed`
              : `
            border-green-500 text-green-500 hover:bg-green-500`
          }`}
          onClick={() => {
            if (cards?.data && cards?.data.length >= user?.data.maxCards) {
              showToast(
                t("Max cards reached"),
                "Upgrade to pro or delete cards.",
                3000,
                false
              );
            }
          }}
        >
          <PlusIcon />
        </Link> */}

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

// import QrCodePreview from "@components/QrCodePreview";
import CardPreviewCard from "@components/CardPreviewCard";
import { getMainCard } from "../../lib/api";
import { useQuery } from "@tanstack/react-query";
import {
  Title,
  Text,
  Box,
  Divider,
  Stack,
  Group,
  Paper,
  Button,
  Transition,
  Affix,
  Blockquote,
  Alert,
} from "@mantine/core";
import useAuth from "@hooks/useAuth";
import { useTranslation } from "react-i18next";
import { StatsGrid } from "./components/StatsGrid";
import { TableSort } from "./components/TableSort";
import RecentActivity from "./components/RecentActivity";
import Graph from "./components/Graph";
import QrCodeCard from "./Overview/QrCodeCard";
import { ArrowUp, IdCard, Info, Plus, Route, Share, User } from "lucide-react";
import { useWindowScroll } from "@mantine/hooks";
import { modals } from "@mantine/modals";
import { useState } from "react";
import EmailNotVerifiedNotification from "@components/Notifications/EmailNotVerifiedNotification/EmailNotVerifiedNotification";

export default function Dashboard() {
  const [scroll, scrollTo] = useWindowScroll();
  const [isVisible, setIsVisible] = useState(true);
  const { t } = useTranslation();

  const { user } = useAuth();

  const { data: mainCard } = useQuery({
    queryKey: ["mainCard"],
    queryFn: () => getMainCard(),
  });

  const openModal = () =>
    modals.openConfirmModal({
      title: "Please confirm your action",
      children: (
        <Text size="sm">
          This action is so important that you are required to confirm it with a
          modal. Please click one of these buttons to proceed.
        </Text>
      ),
      labels: { confirm: "Confirm", cancel: "Cancel" },
      onCancel: () => console.log("Cancel"),
      onConfirm: () => console.log("Confirmed"),
    });

  return (
    <Stack p="md">
      {!user.data.isVerified && (
        <Box>
          <EmailNotVerifiedNotification />
        </Box>
      )}
      <Title order={2}>Hello, {user.data.firstName}</Title>
      <Text>{t("Manage your cards in Cardify")}</Text>
      <Divider />
      <Group align="start">
        {mainCard && <CardPreviewCard cardInfo={mainCard.data} />}
        <Stack>
          <Paper maw={150} mah={150}>
            <QrCodeCard />
          </Paper>
          <Button
            variant="light"
            onClick={openModal}
            rightSection={<Share size={17} />}
          >
            Share
          </Button>
        </Stack>

        {isVisible && (
          <Alert
            maw="max-content"
            icon={<Route />}
            variant="light"
            withCloseButton
            title="Quick actions"
            onClose={() => {
              setIsVisible(false);
            }}
          >
            <Stack>
              <Button variant="outline" color="black" rightSection={<Plus />}>
                Create new card
              </Button>
              <Button variant="outline" color="black" rightSection={<IdCard />}>
                See your cards
              </Button>
              <Button variant="outline" color="black" rightSection={<User />}>
                Edit your profile
              </Button>
            </Stack>
          </Alert>
        )}

        <Blockquote color="blue" cite="– Forrest Gump" icon={<Info />} mt="xl">
          Life is like an npm install – you never know what you are going to
          get.
        </Blockquote>
      </Group>
      <Divider />
      <StatsGrid />
      <Graph />
      <Divider />
      <TableSort />
      <Divider />
      <RecentActivity />
      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              leftSection={<ArrowUp size={16} />}
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
            >
              Scroll to top
            </Button>
          )}
        </Transition>
      </Affix>
    </Stack>
  );
}

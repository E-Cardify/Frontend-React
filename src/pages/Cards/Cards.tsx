import { CardInfoInterface } from "@interfaces/CardInfoInterface";
import CardPreviewCard from "@components/CardPreviewCard";

import useAuth from "@hooks/useAuth";
import useCards from "@hooks/useCards";
import { useTranslation } from "react-i18next";
import { LoadingOverlay, Stack, Group, Text, Button } from "@mantine/core";

import TitleDivider from "@components/Typography/TitleDivider/TitleDivider";
import getMainContentHeight from "@helpers/getMainContentHeight";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import classes from "./Cards.module.css";

export default function Cards() {
  const { t } = useTranslation();

  const { cards, isLoading } = useCards();

  const { user } = useAuth();

  return (
    <Stack pos="relative" mih={getMainContentHeight()}>
      <LoadingOverlay
        visible={isLoading}
        zIndex={1000}
        overlayProps={{ blur: 2 }}
      />
      {cards && !isLoading && (
        <TitleDivider
          text={`${t("Your cards:")} ${cards.data.length}/${
            user.data.maxCards
          }`}
        />
      )}
      {cards && (
        <Stack flex={1} justify="center" align="center">
          <Group gap="50px">
            {cards.data.map((SingleCardInfo: CardInfoInterface) => {
              return (
                <Stack
                  mah="500px"
                  style={{
                    cursor: "pointer",
                  }}
                  className={classes.cardContainer}
                >
                  <CardPreviewCard cardInfo={SingleCardInfo} />
                </Stack>
              );
            })}
          </Group>
          <Button
            style={{
              borderWidth: "2px",
              borderRadius: "10px",
            }}
            variant="outline"
            size="lg"
            component={Link}
            to="/create-card"
          >
            <Plus />
            <Text>Create new card</Text>
          </Button>
        </Stack>
      )}
    </Stack>
  );
}

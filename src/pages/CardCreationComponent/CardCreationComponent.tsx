import CardPreviewCard from "@components/CardPreviewCard";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { CardCreationTabContext } from "@pages/CardCreationComponent/context/CardCreationTabContext";
import {
  CardInfoInterface,
  getDefaultCardInterfaceObject,
} from "@interfaces/CardInfoInterface";
import { Information } from "@pages/CardCreationComponent/components/Information/Information";
import { Fields } from "@pages/CardCreationComponent/components/Fields/Fields";
import { Group, Paper, Stack, Tabs, Title } from "@mantine/core";
import TitleDivider from "@components/Typography/TitleDivider/TitleDivider";
import ScrollingPage from "@components/ScrollingPage/ScrollingPage";
import { Book, CircleFadingPlus, Monitor } from "lucide-react";
import { Display } from "./components/Display/Display";

export function CardCreationComponent() {
  const { t } = useTranslation();

  const [cardInfo, setCardInfo] = useState<CardInfoInterface>(
    getDefaultCardInterfaceObject()
  );

  return (
    <ScrollingPage>
      <CardCreationTabContext.Provider
        value={{
          cardInfo,
          setCardInfo,
        }}
      >
        <Stack flex={1} h="100%">
          <TitleDivider text="Create your card" mt="0" />
          <Group align="start" justify="center">
            {/* Information Inputs */}
            <Paper
              flex={1}
              shadow="md"
              radius="md"
              withBorder
              p="xl"
              h="100%"
              pb="sm"
            >
              <Title order={1}>{t("Card Customizer")}</Title>
              <Tabs defaultValue="information" mt="md">
                <Tabs.List>
                  <Tabs.Tab value="display" leftSection={<Monitor size={12} />}>
                    {t("Display")}
                  </Tabs.Tab>
                  <Tabs.Tab
                    value="information"
                    leftSection={<Book size={12} />}
                  >
                    {t("Information")}
                  </Tabs.Tab>
                  <Tabs.Tab
                    value="fields"
                    leftSection={<CircleFadingPlus size={12} />}
                  >
                    {t("Fields")}
                  </Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="information">
                  <Information />
                </Tabs.Panel>

                <Tabs.Panel value="display">
                  <Display />
                </Tabs.Panel>

                <Tabs.Panel value="fields">
                  <Fields />
                </Tabs.Panel>
              </Tabs>
            </Paper>
            <div className="p-20">
              <CardPreviewCard cardInfo={cardInfo} />
            </div>
          </Group>
        </Stack>
      </CardCreationTabContext.Provider>
    </ScrollingPage>
  );
}

import CardPreviewCard from "@components/CardPreviewCard";
import { useTranslation } from "react-i18next";
import { Information } from "@pages/CardCreationComponent/components/Information/Information";
import { Group, Paper, Stack, Tabs, Text } from "@mantine/core";
import { Book, CircleFadingPlus, IdCard, Monitor } from "lucide-react";
import {
  CardCreationFormProvider,
  useCardCreationForm,
} from "./context/CardCreationContext";
import getMainContentHeight from "@helpers/getMainContentHeight";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { CardInfoInterface } from "@interfaces/CardInfoInterface";
import TitleDivider from "@components/Typography/TitleDivider/TitleDivider";
import FormSubmitButton from "@components/Buttons/FormSubmitButton";
import { Display } from "./components/Display/Display";
import { useMutation } from "@tanstack/react-query";
import { createCard as createCardFn } from "../../lib/api";
import queryClient from "../../config/queryClient";
import { navigate } from "../../lib/navigation";
import { notifications } from "@mantine/notifications";
import { APIErrorResponse } from "../../api/apiClient";
import { useViewportSize } from "@mantine/hooks";
import { modals } from "@mantine/modals";

const MIN_WIDTH = 1000;

export function CardCreationComponent() {
  const [activeTab, setActiveTab] = useState("information");

  const { t } = useTranslation();
  const form = useCardCreationForm({
    initialValues: {
      firstName: "",
      middleName: "",
      lastName: "",
      preferredName: "",
      maidenName: "",
      pronouns: "",
      title: "",
      department: "",
      company: "",
      headline: "",
      motto: "",
      color: "rgb(34, 139, 230)",
      style: "",
      fields: [],
    },
  });

  const cardInfo = useMemo<CardInfoInterface>(() => {
    const { getValues } = form;
    const {
      firstName,
      middleName,
      lastName,
      preferredName,
      maidenName,
      pronouns,
      title,
      department,
      company,
      headline,
      motto,
      color,
    } = getValues();

    const cardInfoObject = {
      information: {
        firstName,
        middleName,
        lastName,
        preferredName,
        maidenName,
        pronouns,
        title,
        department,
        company,
        headline,
        motto,
      },
      design: {
        color,
        style: "stright",
      },
      fields: [],
    };

    return cardInfoObject;
  }, [form]);

  const { mutate } = useMutation({
    mutationFn: (cardInfo: CardInfoInterface) => createCardFn(cardInfo),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["mainCard"],
      });
      queryClient.invalidateQueries({
        queryKey: ["cards"],
      });
      notifications.show({
        message: t("Card has been created successfully."),
      });
      navigate("/cards");
    },
    onError: (err: APIErrorResponse) => {
      notifications.show({
        message: err.message,
        color: "red",
      });
    },
  });

  const { width } = useViewportSize();

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(cardInfo);
  };

  useEffect(() => {
    if (activeTab === "showCard" && width > MIN_WIDTH) {
      setActiveTab("information");
    }
  }, [width, activeTab]);

  const openModal = () =>
    modals.openConfirmModal({
      title: t("Please confirm your action"),
      children: (
        <Text size="sm">
          {t("Do you want to delete this card? This action is inreversible.")}
        </Text>
      ),
      confirmProps: { color: "red" },
      labels: { confirm: "Reset", cancel: "Cancel" },
      onConfirm: () => {
        form.reset();
      },
    });

  return (
    <Stack h={getMainContentHeight()}>
      <CardCreationFormProvider form={form}>
        <form
          style={{
            height: "100%",
          }}
          onSubmit={submitHandler}
        >
          <Group justify="start" align="start" h="100%">
            <Paper
              radius={0}
              shadow="lg"
              flex={1}
              h="100%"
              style={{
                overflowY: width > MIN_WIDTH ? "auto" : "visible",
              }}
            >
              <Tabs
                h="100%"
                value={activeTab}
                onChange={(v) => {
                  setActiveTab(v || "information");
                }}
              >
                <Stack h="100%" gap={0}>
                  <TitleDivider text="Card creation" order={1} ml="md" />
                  <Tabs.List>
                    <Tabs.Tab
                      value="display"
                      leftSection={<Monitor size={12} />}
                    >
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
                    {width < MIN_WIDTH && (
                      <Tabs.Tab
                        value="showCard"
                        ml="auto"
                        leftSection={<IdCard size={12} />}
                      >
                        {t("Show card")}
                      </Tabs.Tab>
                    )}
                  </Tabs.List>

                  <Stack
                    flex="1"
                    style={{
                      overflowY: width > MIN_WIDTH ? "auto" : "visible",
                    }}
                    gap={0}
                    pl="md"
                    pb="lg"
                  >
                    <Tabs.Panel value="information">
                      <Information />
                    </Tabs.Panel>

                    <Tabs.Panel value="display">
                      <Display />
                    </Tabs.Panel>

                    <Tabs.Panel value="showCard">
                      <CardPreviewCard cardInfo={cardInfo} />
                    </Tabs.Panel>
                  </Stack>

                  <Group m={0} gap="xl" mt="auto" p="sm" pt="0">
                    <FormSubmitButton
                      text="Save card"
                      mt={0}
                      flex={1}
                      radius={0}
                    />
                    <FormSubmitButton
                      text="Reset"
                      mt={0}
                      c="red"
                      type="button"
                      w="max-content"
                      onClick={openModal}
                    />
                  </Group>

                  {/* <Tabs.Panel value="fields">
              <Fields />
            </Tabs.Panel> */}
                </Stack>
              </Tabs>
            </Paper>
            {width > MIN_WIDTH && (
              <div
                style={{
                  flex: 1,
                  justifyContent: "center",
                  height: "100%",
                  overflowY: "auto",
                }}
              >
                <CardPreviewCard cardInfo={cardInfo} />
              </div>
            )}
          </Group>
        </form>
      </CardCreationFormProvider>
    </Stack>
  );
}

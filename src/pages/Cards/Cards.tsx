import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getMainCard } from "../../lib/api";
import { EditPenIcon, StartIcon, TrashIcon } from "@icons";
import { CardInfoInterface } from "@interfaces/CardInfoInterface";
import CardPreviewCard from "@components/CardPreviewCard";

import {
  deleteCard as deleteCardFn,
  changeMainCard as changeMainCardFn,
} from "../../lib/api";
import useAuth, { AUTH } from "@hooks/useAuth";
import useCards from "@hooks/useCards";
import { notifications } from "@mantine/notifications";
import { useTranslation } from "react-i18next";
import { Box, LoadingOverlay } from "@mantine/core";

export default function Cards() {
  const queryClient = useQueryClient();
  const { t } = useTranslation();

  const { data: mainCard } = useQuery({
    queryKey: ["mainCard"],
    queryFn: () => getMainCard(),
    staleTime: Infinity,
  });

  const { cards, isLoading } = useCards();

  const { mutate: changeMainCard } = useMutation({
    mutationFn: (cardId: string) => changeMainCardFn(cardId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [AUTH],
      });
      queryClient.invalidateQueries({
        queryKey: ["mainCard"],
      });
      queryClient.invalidateQueries({
        queryKey: ["cards"],
      });
      notifications.show({
        message: t("Main card changed successfully"),
      });
    },
    onError: () => {
      notifications.show({
        message: t("Error changing main card, try again later"),
        color: "red",
      });
    },
  });
  const { mutate: deleteCard } = useMutation({
    mutationFn: (cardId: string) => deleteCardFn(cardId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["mainCard"],
      });
      queryClient.invalidateQueries({
        queryKey: ["cards"],
      });
      notifications.show({
        message: t("Card deleted successfully"),
      });
    },
    onError: () => {
      notifications.show({
        message: t("Error deleting card, try again later"),
      });
    },
  });

  const { user } = useAuth();

  return (
    <>
      <Box pos="relative">
        <LoadingOverlay
          visible={isLoading}
          zIndex={1000}
          overlayProps={{ blur: 2 }}
        />
        <div className="mt-3">
          {cards && !isLoading && (
            <div className="flex gap-2 items-center mb-2">
              <h1 className="font-bold text-xl">Your cards:</h1>
              <p className="text-neutral-500">
                {cards.data.length} / {user.data.maxCards}
              </p>
            </div>
          )}
          <div>
            {cards && (
              <div className="flex flex-wrap gap-2 items-start">
                {cards.data.map((SingleCardInfo: CardInfoInterface) => {
                  return (
                    <div
                      className="relative"
                      key={`${SingleCardInfo._id}${SingleCardInfo.information.title}${SingleCardInfo.information.lastName}`}
                    >
                      <CardPreviewCard cardInfo={SingleCardInfo} />
                      <div className="absolute left-3 top-3 text-white">
                        <div className="relative w-full h-full px-3 py-2 rounded-md overflow-hidden shadow shadow-black flex gap-2">
                          <div className="absolute bg-black/80 inset-0" />
                          <div
                            className="w-6 h-6 cursor-pointer relative text-neutral-300 hover:text-white"
                            onClick={() => {
                              // showModal(
                              //   "Do you want to delete this card",
                              //   "This process is not irreversible",
                              //   () => {
                              //     deleteCard(SingleCardInfo._id || "");
                              //   },
                              //   <TrashIcon />
                              // );
                            }}
                          >
                            <TrashIcon />
                          </div>
                          <div
                            className="w-6 h-6 cursor-pointer relative text-neutral-300 hover:text-white"
                            onClick={() => {
                              // handleCardEditing(SingleCardInfo);
                            }}
                          >
                            <EditPenIcon />
                          </div>
                          <div
                            className={`w-6 h-6 cursor-pointer relative text-yellow-300 hover:text-yellow-400 ${
                              mainCard?.data._id == SingleCardInfo._id &&
                              "fill-current"
                            }`}
                            onClick={() => {
                              if (SingleCardInfo._id !== mainCard?.data._id) {
                                changeMainCard(SingleCardInfo._id || "");
                              }
                            }}
                          >
                            <StartIcon />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </Box>
    </>
  );
}

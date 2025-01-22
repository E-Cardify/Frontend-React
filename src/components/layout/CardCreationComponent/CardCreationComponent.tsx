import CardPreviewCard from "../Dashboard/Overview/CardPreviewCard";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { CardCreationTabContext } from "@hooks/CardCreationTabContext";
import {
  CardInfoInterface,
  getDefaultCardInterfaceObject,
} from "@typesFile/CardInfoInterface";
import { CardCustomizerTab } from "./CardCustomizerTab";
import { Information } from "./Information";
import { getCardInfo } from "../../../helpers/getCardInfo";
import { Display } from "./Display";
import { Fields } from "./Fields";
import Navbar from "../ViewContainer/Navbar";

export function CardCreationComponent() {
  const { t } = useTranslation();

  const [cardInfo, setCardInfo] =
    useState<CardInfoInterface>(
      getCardInfo() ||
        getDefaultCardInterfaceObject()
    );

  const [currentTab, setCurrentTab] =
    useState<
      | "Display"
      | "Information"
      | "Fields"
    >("Display");

  return (
    <CardCreationTabContext.Provider
      value={{
        cardInfo,
        setCardInfo,
        currentTab,
        setCurrentTab,
      }}
    >
      <div className="flex flex-col gap-2 h-full">
        <Navbar text="Card creation" />

        <div className="flex-1 flex justify-center items-center">
          {/* Preview */}
          <div className="p-20">
            <CardPreviewCard
              cardInfo={cardInfo}
            />
          </div>

          {/* Information Inputs */}
          <div className="flex-1 bg-white dark:bg-neutral-900 dark:border-black dark:text-white flex flex-col rounded-lg border-2 p-2 ute">
            <h1 className="font-Montserrat font-bold text-3xl">
              {t("Card customizer")}
            </h1>
            <div className="flex mt-2 border-b-2">
              <CardCustomizerTab text="Display" />
              <CardCustomizerTab text="Information" />
              <CardCustomizerTab
                isBeta={true}
                text="Fields"
              />
            </div>
            <div className="flex-1 px-4 py-2">
              {currentTab ==
                "Information" && (
                <>
                  <Information />
                </>
              )}
              {currentTab ==
                "Display" && (
                <>
                  <Display />
                </>
              )}
              {currentTab ==
                "Fields" && (
                <>
                  <Fields />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </CardCreationTabContext.Provider>
  );
}

import { BellIcon, InformationIcon, UserIcon } from "@icons";
import CardPreviewCard from "../Dashboard/Overview/CardPreviewCard";
import { DashboardInfoButton } from "../Dashboard/DashboardInfoButton";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { CardCreationTabContext, CardInfoInterface } from "@hooks/CardCreationTabContext";
import { CardCustomizerTab } from "./CardCustomizerTab";
import { Information } from "./Information";
import { getCardInfo } from "../../../helpers/getCardInfo";

export function CardCreationComponent() {
    const [cardInfo, setCardInfo] = useState<CardInfoInterface>(getCardInfo() || { information: {} });
    const { t } = useTranslation();
    const [currentTab, setCurrentTab] = useState<"Display" | "Information" | "Fields">("Information");

    return (
        <CardCreationTabContext.Provider value={{ cardInfo, setCardInfo, currentTab, setCurrentTab }}>
            <div className="flex flex-col gap-2 h-full">
                <div className="border-b-2 dark:border-neutral-400 pb-3">
                    <div className="flex gap-2 items-center">
                        <h1 className="font-Roboto font-bold text-3xl dark:text-white">Card creation</h1>

                        {
                            /* right side */
                        }
                        <div className="flex gap-2 ml-auto items-center">
                            <DashboardInfoButton title={t("Help")}>
                                <InformationIcon />
                            </DashboardInfoButton>

                            <DashboardInfoButton title={t("Notifications")}>
                                <BellIcon />
                            </DashboardInfoButton>

                            <DashboardInfoButton title={t("Account")}>
                                <UserIcon />
                            </DashboardInfoButton>
                        </div>
                    </div>
                </div>

                <div className="flex-1 flex justify-center items-center">
                    {/* Preview */}
                    <div className="p-20">
                        <CardPreviewCard cardInfo={cardInfo} />
                    </div>

                    {/* Information Inputs */}
                    <div className="flex-1 bg-white flex flex-col rounded-lg border-2 p-2 ute">
                        <h1 className="font-Montserrat font-bold text-3xl">Card customizer</h1>
                        <div className="flex mt-2 border-b-2">
                            <CardCustomizerTab text="Display" />
                            <CardCustomizerTab text="Information" />
                            <CardCustomizerTab text="Fields" />
                        </div>
                        <div className="flex-1 px-4 py-2">
                            {currentTab == "Information" && <>
                                <Information />
                            </>}
                        </div>
                    </div>
                </div>

            </div>
        </CardCreationTabContext.Provider>
    );
}

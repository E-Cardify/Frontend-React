import { ArrowIcon, EyeIcon } from "@icons";
import { useTranslation } from "react-i18next";
import CardContainer from "../../../features/CardContainer";
import { useState } from "react";

const calculateViewProgress = (currentMonth: number, lastMonth: number) => {
    const progress = Math.round((currentMonth - lastMonth) / lastMonth * 100);

    return progress;
}

export default function TotalViewsCard() {
    const { t } = useTranslation();
    const [thisMonthViews] = useState<number>(1428);
    const [lastMonthViews] = useState<number>(1024);
    const [progress] = useState<number>(calculateViewProgress(thisMonthViews, lastMonthViews));

    return (
        <CardContainer>
            <div className="bg-white dark:bg-neutral-900 relative rounded-md p-4">
                <div className="w-10 h-10  flex justify-center items-center bg-neutral-100 dark:bg-neutral-800 text-green-500 rounded-full">
                    <div className="w-8 h-8">
                        <EyeIcon />
                    </div>
                </div>
                <div className="text-sm font-bold font-Poppins pt-6 text-neutral-800 dark:text-neutral-400">{t("Total views")}</div>
                <div className="text-3xl font-Roboto font-bold py-1 flex items-center gap-2 dark:text-white">{thisMonthViews}
                    <span className="text-sm text-green-500 bg-green-200 py-0.5 px-1 rounded-xl flex items-center">
                        <div className="w-5 h-5">
                            <ArrowIcon />
                        </div>
                        {progress}%
                    </span>
                </div>
                <div className="font-Poppins text-sm text-neutral-500">{t("Compared to last month")}</div>
            </div>
        </CardContainer>
    );
}

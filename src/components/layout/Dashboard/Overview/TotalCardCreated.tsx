import { ArrowIcon, CreditCardIcon } from "@icons";
import { useTranslation } from "react-i18next";
import CardContainer from "../../../features/CardContainer";
import { useEffect, useState } from "react";

const calculateViewProgress = (currentMonth: number, lastMonth: number) => {
    const progress = Math.round((currentMonth - lastMonth) / lastMonth * 100);

    return progress;
}

export default function TotalCardsCreated() {
    const { t } = useTranslation();
    const [dataLoading, setDataLoading] = useState(true);
    const [thisMonthViews, setThisMonthViews] = useState<number | undefined>(undefined);
    const [lastMonthViews, setLastMonthViews] = useState<number | undefined>(undefined);
    const [progress, setProgress] = useState<number | undefined>(undefined);

    useEffect(() => {
        if (thisMonthViews && lastMonthViews) {
            setProgress(calculateViewProgress(thisMonthViews, lastMonthViews));
        }
    }, [setThisMonthViews, setLastMonthViews, lastMonthViews, thisMonthViews])

    useEffect(() => {
        setTimeout(() => {
            setThisMonthViews(2);
            setLastMonthViews(2);

            setDataLoading(false);
        }, 1000);
    }, [])

    return (
        <CardContainer>
            <div className="bg-white dark:bg-neutral-900 relative rounded-md p-4">
                <div className="w-10 h-10  flex justify-center items-center bg-neutral-100 dark:bg-neutral-800 text-green-500 rounded-full">
                    <div className="w-8 h-8">
                        <CreditCardIcon />
                    </div>
                </div>
                <div className="text-sm font-bold font-Poppins pt-6 text-neutral-800 dark:text-neutral-400">{t("Total cards created:")}</div>
                <div className="relative text-3xl font-Roboto font-bold py-1 flex items-center gap-2 dark:text-white">{thisMonthViews || "0"}
                    {dataLoading && <div className="absolute inset-0 from-neutral-200 to-neutral-100 dark:from-neutral-800 dark:to-neutral-700 bg-gradient-to-br"></div>}
                    <span className={`text-sm ${progress !== undefined && (progress <= 0 ? (progress == 0 ? "text-yellow-500 bg-yellow-200" : "text-red-500 bg-red-200") : "text-green-500 bg-green-200")} py-0.5 px-1 rounded-xl flex items-center`}>
                        <div className={`w-5 h-5 ${progress !== undefined && progress < 0 ? "rotate-90" : (progress == 0 && "rotate-45")}`}>
                            <ArrowIcon />
                        </div>
                        {progress || "0"}%
                    </span>
                </div>
                <div className="font-Poppins text-sm text-neutral-500">{t(`Compared to last month`)}</div>
            </div>
        </CardContainer>
    );
}

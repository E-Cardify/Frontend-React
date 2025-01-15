import { useTranslation } from "react-i18next";
import ShareIcon from "../../../../assets/icons/Share";
import CardContainer from "../../../features/CardContainer";

export function ShareCard() {
    const { t } = useTranslation();

    return (
        <CardContainer>
            <div className="overflow-hidden relative h-full flex justify-center gap-1 px-6 items-center dark:border-black dark:to-neutral-950 dark:from-neutral-950 bg-white dark:bg-neutral-900 dark:text-white text-black p-3 rounded-md cursor-pointer">
                <div className="w-7 h-7 text-green-500">
                    <ShareIcon />
                </div>
                <p className="font-bold font-Poppins text-xl">{t("Share")}</p>
            </div>
        </CardContainer>
    );
}

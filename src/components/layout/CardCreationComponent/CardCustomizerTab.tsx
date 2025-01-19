import { tabsType } from "@hooks/CardCreationTabContext";
import useCardCreationTabContext from "@hooks/useCardCreationTabContext";
import { useTranslation } from "react-i18next";

export function CardCustomizerTab(props: {
    text: tabsType;
    isBeta?: boolean,
}) {
    const { currentTab, setCurrentTab } = useCardCreationTabContext();
    const { t } = useTranslation();

    const handleSetCurrentTab = () => {
        setCurrentTab(props.text);
    };

    return (
        <div className="px-3 p-2 relative cursor-pointer" onClick={handleSetCurrentTab}>
            <span className="font-Poppins flex items-center justify-center gap-1">
                <p className={`${currentTab !== props.text && "text-neutral-600 dark:text-neutral-400"}`}>{t(props.text)}</p>
                {props.isBeta && <span className="from-green-500 to-blue-500 bg-gradient-to-tr text-white text-[10px] font-Poppins font-bold rounded-sm px-1">BETA</span>}
            </span>
            <div className={`absolute -bottom-0.5 left-0 w-full h-[3px] ${currentTab == props.text && "bg-green-500"}`} />
        </div>
    );
}

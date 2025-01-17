import useDashboardViewContext from "@hooks/useDashboardViewContext";
import { useTranslation } from "react-i18next";

export function DashboardNavItem(props: {
    text: "Notifications" | "Overview" | "History";
}) {
    const { t } = useTranslation();
    const { currentView, setCurrentView } = useDashboardViewContext();

    const handleViewChange = () => {
        setCurrentView(props.text);
    };

    return (
        <div className={`pb-2 px-3 dark:text-white relative cursor-pointer ${currentView !== props.text ? "text-neutral-500 hover:text-neutral-600 dark:text-neutral-300 hover:dark:text-neutral-200" : "dark:text-white"}`} onClick={handleViewChange}>
            {t(props.text)}
            <div className={`absolute -bottom-0.5 left-0 w-full h-[3px] ${(currentView === props.text) && "bg-green-500"}`} />
        </div>
    );
}

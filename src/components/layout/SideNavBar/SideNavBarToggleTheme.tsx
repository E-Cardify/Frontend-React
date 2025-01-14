import { useTranslation } from "react-i18next";
import SunIcon from "../../../assets/icons/Sun";
import useCollapseSideNavBarContext from "../../../hooks/useCollapseSideNavBarContext";
import useTheme from "../../../hooks/useTheme";

export function SideNavBarToggleTheme() {
    const { t } = useTranslation();
    const { isCollapsed } = useCollapseSideNavBarContext();
    const { theme, setTheme } = useTheme();

    const handleThemeChange = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    return (<div className="flex items-center px-2 text-neutral-500 text-sm font-Roboto gap-2">
        <div className="w-5 h-5">
            <SunIcon />
        </div>
        {!isCollapsed && <p>{t("Light Mode")}</p>}
        <button type="button" title="Toggle Light/Dark Mode" className="relative bg-neutral-200 dark:bg-neutral-700 w-8 h-4 cursor-pointer ml-auto shadow-inner  shadow-neutral-300 dark:shadow-neutral-800  rounded-full border dark:border-black" onClick={handleThemeChange}>
            <div className={`w-3.5 h-3.5 dark:bg-neutral-300 transition-all absolute ${theme == "light" ? "left-0" : "left-full -translate-x-full"} top-0 bg-white rounded-full shadow shadow-bg-neutral-300`} />
        </button>
    </div>);
}

import { SunIcon } from "@icons";
import { useTranslation } from "react-i18next";

interface PreferencesTabProps {
  theme: string;
  onThemeChange: () => void;
}

const ThemeToggle = ({ theme, onThemeChange }: PreferencesTabProps) => {
  const { t } = useTranslation();
  return (
    <div className="flex items-center px-2 text-neutral-500 text-sm font-Roboto gap-2 max-w-max">
      <div className="w-5 h-5 dark:fill-current fill-transparent">
        <SunIcon />
      </div>
      <p className="select-none">{t("Light Mode")}</p>
      <button
        type="button"
        title="Toggle Light/Dark Mode"
        className="relative bg-neutral-200 dark:bg-neutral-700 w-8 h-4 cursor-pointer ml-auto shadow-inner shadow-neutral-300 dark:shadow-neutral-800 rounded-full border dark:border-black"
        onClick={onThemeChange}
      >
        <div
          className={`w-3.5 h-3.5 dark:bg-neutral-300 transition-all absolute ${
            theme == "light" ? "left-0" : "left-full -translate-x-full"
          } top-0 bg-white rounded-full shadow shadow-bg-neutral-300`}
        />
      </button>
    </div>
  );
};

const LanguageSelector = () => {
  const { t } = useTranslation();
  return (
    <div>
      <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
        {t("Language")}
      </label>
      <select
        className="w-full p-2 rounded-md border dark:bg-neutral-800 dark:border-neutral-700 dark:text-white"
        aria-label={t("Language")}
      >
        <option value="en">English</option>
        <option value="es">Español</option>
        <option value="fr">Français</option>
      </select>
    </div>
  );
};

const NotificationSettings = () => {
  const { t } = useTranslation();
  return (
    <div>
      <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
        {t("Notifications")}
      </label>
      <div className="space-y-2">
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" className="rounded" />
          <span className="text-neutral-600 dark:text-neutral-400">
            {t("Email notifications")}
          </span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" className="rounded" />
          <span className="text-neutral-600 dark:text-neutral-400">
            {t("Push notifications")}
          </span>
        </label>
      </div>
    </div>
  );
};

export default function PreferencesTab({
  theme,
  onThemeChange,
}: PreferencesTabProps) {
  return (
    <div className="space-y-4">
      <ThemeToggle theme={theme} onThemeChange={onThemeChange} />
      <LanguageSelector />
      <NotificationSettings />
    </div>
  );
}

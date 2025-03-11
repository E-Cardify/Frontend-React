import { useTranslation } from "react-i18next";

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

export default function PreferencesTab() {
  return (
    <div className="space-y-4">
      <LanguageSelector />
      <NotificationSettings />
    </div>
  );
}

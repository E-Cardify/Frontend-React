import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function RememberMeRow() {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-between">
      <label className="flex items-center">
        <input
          type="checkbox"
          id="remember"
          className="rounded border-gray-300 text-green-500 focus:ring-green-500"
        />
        <span className="ml-2 text-sm text-neutral-600 dark:text-neutral-400">
          {t("Remember me")}
        </span>
      </label>
      <Link
        to="/forgot-password"
        className="text-sm text-green-500 hover:text-green-600"
      >
        {t("Forgot password?")}
      </Link>
    </div>
  );
}

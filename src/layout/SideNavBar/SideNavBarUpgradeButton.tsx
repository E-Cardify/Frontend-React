import { useTranslation } from "react-i18next";
import useCollapseSideNavBarContext from "@contexts/useCollapseSideNavBarContext";

export function SideNavBarUpgradeNowButton() {
  const { isCollapsed } =
    useCollapseSideNavBarContext();
  const { t } = useTranslation();

  return (
    <>
      {!isCollapsed && (
        <div className="relative mb-5">
          {/* border overlay */}
          <div className="absolute top-0 left-0 bg-gradient-to-br from-green-500 to-blue-500 w-full h-full rounded-lg" />

          {/* padding so the container with border is visible */}
          <div className="p-0.5">
            <div className="max-w-[200px] p-3 relative bg-white dark:bg-neutral-900 dark:text-white rounded-md text-xs font-Poppins">
              <p className="select-none">
                {t(
                  "Get detailed analytics to help you, upgrade and go pro"
                )}
              </p>
              <button
                type="button"
                title="Show Premium Options"
                className="select-none text-sm mt-3 w-max bg-black text-white dark:bg-white dark:text-black px-2 py-1 rounded-lg"
              >
                {t("Upgrade Now")}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

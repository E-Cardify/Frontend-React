import { BellIcon, InformationIcon, UserIcon } from "@icons";
import { useTranslation } from "react-i18next";
import useViewContext from "@contexts/useViewContext";
import useDashboardViewContext from "@contexts/useDashboardViewContext";
import { ReactNode } from "react";
import { ButtonCircle } from "@components/ui/Buttons/ButtonCircle";

export default function Navbar(props: { children?: ReactNode; text: string }) {
  const { t } = useTranslation();

  const { currentView, setCurrentView } = useViewContext();
  const {
    currentView: currentDashboardView,
    setCurrentView: setCurrentDashboardView,
  } = useDashboardViewContext();

  const showNotifications = () => {
    console.log("showing notifications");

    if (currentView !== "Dashboard") {
      setCurrentView("Dashboard");
    }

    if (currentDashboardView !== "Notifications") {
      setCurrentDashboardView("Notifications");
    }
  };

  return (
    <div
      className={`border-b-2 dark:border-neutral-400 ${
        !props.children && "pb-3"
      }`}
    >
      <div className="flex gap-2 items-center">
        <h1 className="font-Roboto font-bold text-3xl dark:text-white">
          {t(props.text)}
        </h1>

        {/* right side */}
        <div className="flex gap-2 ml-auto items-center">
          <ButtonCircle title={t("Help")}>
            <InformationIcon />
          </ButtonCircle>

          <ButtonCircle onClick={showNotifications} title={t("Notifications")}>
            <BellIcon />
          </ButtonCircle>

          <ButtonCircle
            title={t("Account")}
            onClick={() => {
              setCurrentView("Account");
            }}
          >
            <UserIcon />
          </ButtonCircle>
        </div>
      </div>

      {props.children}
    </div>
  );
}

import { useTranslation } from "react-i18next";
import { ReactNode } from "react";

export default function Navbar(props: { children?: ReactNode; text: string }) {
  const { t } = useTranslation();

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
          {/* <ButtonCircle
            title={t("Account")}
            onClick={() => {
              setCurrentView("Account");
            }}
          >
            <UserIcon />
          </ButtonCircle> */}
        </div>
      </div>

      {props.children}
    </div>
  );
}

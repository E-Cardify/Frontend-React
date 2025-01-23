import { useTranslation } from "react-i18next";

export function ButtonHorizontalNavBar(props: {
  text: string;
  currentView: string;
  onClick: () => void;
  isBeta?: boolean;
}) {
  const { t } = useTranslation();

  return (
    <button
      type="button"
      onClick={props.onClick}
      className={`pb-2 px-3 dark:text-white relative cursor-pointer flex items-center gap-1 ${
        props.currentView !== props.text
          ? "text-neutral-500 hover:text-neutral-600 dark:text-neutral-300 hover:dark:text-neutral-200"
          : "dark:text-white"
      }`}
    >
      {t(props.text)}
      {props.isBeta && (
        <span className="from-green-500 to-blue-500 bg-gradient-to-tr text-white text-[10px] font-Poppins font-bold rounded-sm px-1">
          BETA
        </span>
      )}
      <div
        className={`absolute -bottom-0.5 left-0 w-full h-[3px] ${
          props.currentView ===
            props.text && "bg-green-500"
        }`}
      />
    </button>
  );
}

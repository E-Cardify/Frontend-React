import { ReactNode } from "react";
import { useTranslation } from "react-i18next";

export default function ButtonRectangle(props: {
  onClick?: () => void;
  icon?: ReactNode;
  iconHeight?: number;
  text: string;
  className?: string;
  primary?: boolean;
}) {
  const { t } = useTranslation();

  return (
    <button
      type="button"
      onClick={props.onClick}
      className={`${
        props.className
      } flex items-center gap-2 font-Poppins text-sm font-bold p-1.5 px-2.5 rounded-md border-2 ${
        props.primary
          ? "border-green-500 bg-green-500 text-white"
          : "shadow-none text-neutral-600 hover:text-neutral-800 dark:text-neutral-200 dark:hover:text-white"
      }`}
    >
      {props.icon && (
        <div
          style={{
            height: `${
              (props.iconHeight || 8) *
              4
            }px`,
            width: `${
              (props.iconHeight || 8) *
              4
            }px`,
          }}
        >
          {props.icon}
        </div>
      )}
      <span>{t(props.text)}</span>
    </button>
  );
}

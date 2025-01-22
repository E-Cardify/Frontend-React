import { ReactNode } from "react";
import { useTranslation } from "react-i18next";

export default function ButtonRectangle(props: {
  onClick?: () => void;
  icon?: ReactNode;
  iconHeight?: number;
  text: string;
  className?: string;
}) {
  const { t } = useTranslation();

  return (
    <button
      type="button"
      onClick={props.onClick}
      className={`${props.className} flex items-center gap-2 bg-green-500 text-white font-Poppins font-bold p-2 px-3 rounded-lg shadow shadow-neutral-300 dark:shadow-neutral-700 border-2 border-green-500`}
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

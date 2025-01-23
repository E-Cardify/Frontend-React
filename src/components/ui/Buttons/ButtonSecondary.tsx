import { ReactNode } from "react";
import { useTranslation } from "react-i18next";

export default function ButtonSecondary(props: {
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
      className={`${props.className} text-sm flex items-center gap-2 font-Poppins font-bold p-1.5 px-2 rounded-md border border-green-500 text-green-500`}
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

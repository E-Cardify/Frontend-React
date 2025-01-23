import { ReactNode } from "react";
import { useTranslation } from "react-i18next";

export default function ButtonError(props: {
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
      className={`${props.className} flex items-center gap-2 font-Poppins font-bold p-1.5 px-2.5 rounded-md text-sm border-red-500 from-red-500 to-red-400 bg-gradient-to-br text-white`}
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

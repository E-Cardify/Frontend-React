import { ReactNode } from "react";
import { useTranslation } from "react-i18next";

export default function ButtonPrimary(props: {
  onClick?: () => void;
  icon?: ReactNode;
  iconHeight?: number;
  text: string;
  type?: "button" | "submit";
  className?: string;
  primary?: boolean;
}) {
  const { t } = useTranslation();

  return (
    <button
      type={props.type || "button"}
      onClick={props.onClick}
      className={`${props.className} flex items-center gap-2 font-Poppins font-bold p-1.5 px-2.5 rounded-md border-green-500 text-sm from-green-500 to-green-400 bg-gradient-to-br text-white`}
    >
      {props.icon && (
        <div
          style={{
            height: `${(props.iconHeight || 8) * 4}px`,
            width: `${(props.iconHeight || 8) * 4}px`,
          }}
        >
          {props.icon}
        </div>
      )}
      <span>{t(props.text)}</span>
    </button>
  );
}

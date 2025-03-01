import { useTranslation } from "react-i18next";

export default function ButtonPrimary(props: {
  onClick?: () => void;
  text: string;
  type?: "button" | "submit";
  className?: string;
  primary?: boolean;
  isLoading?: boolean;
}) {
  const { t } = useTranslation();

  return (
    <button
      type={props.type || "button"}
      onClick={props.onClick}
      className={`${props.className} flex items-center justify-center font-Poppins font-bold p-1.5 px-2.5 rounded-md border-green-500 text-sm from-green-500 to-green-400 bg-gradient-to-br text-white`}
      disabled={props.isLoading}
    >
      {props.isLoading ? (
        <span className="loader"></span>
      ) : (
        <span>{t(props.text)}</span>
      )}
    </button>
  );
}

export function ButtonInfo(props: {
  onClick?: () => void;
  text: string;
  type?: "button" | "submit";
  className?: string;
  primary?: boolean;
  isLoading?: boolean;
}) {
  const { t } = useTranslation();

  return (
    <button
      type={props.type || "button"}
      onClick={props.onClick}
      className={`${props.className} flex items-center justify-center font-Poppins font-bold p-1.5 px-2.5 rounded-md border-yellow-500 text-sm from-yellow-500 to-yellow-400 bg-gradient-to-br text-white`}
      disabled={props.isLoading}
    >
      {props.isLoading ? (
        <span className="loader"></span>
      ) : (
        <span>{t(props.text)}</span>
      )}
    </button>
  );
}

import { RotateIcon } from "@icons";
import { useTranslation } from "react-i18next";

interface LoadingScreenProps {
  message?: string;
}

export default function LoadingScreen({ message }: LoadingScreenProps) {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-neutral-800 flex items-center justify-center p-4">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg p-3 flex items-center justify-center animate-pulse">
          <div className="w-full h-full text-white animate-spin">
            <RotateIcon />
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-xl font-bold font-Poppins dark:text-white">
            {t(message || "Loading...")}
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 font-Montserrat mt-1">
            {t("Please wait")}
          </p>
        </div>
      </div>
    </div>
  );
}

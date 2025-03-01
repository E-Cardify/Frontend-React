import { UserIcon } from "@icons";
import { useTranslation } from "react-i18next";

interface AuthHeaderProps {
  title: string;
}

export default function AuthHeader({ title }: AuthHeaderProps) {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-center mb-8 flex-col gap-3">
      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
        <div className="w-6 h-6 text-white">
          <UserIcon />
        </div>
      </div>
      <h1 className="text-2xl font-bold font-Poppins text-center dark:text-white">
        {t(title)}
      </h1>
    </div>
  );
}

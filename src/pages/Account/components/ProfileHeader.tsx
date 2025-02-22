import { UserIcon, EditPenIcon, LogoutIcon } from "@icons";
import ButtonPrimary from "@components/ui/Buttons/ButtonPrimary";
import ButtonRectangle from "@components/ui/Buttons/ButtonRectangle";
import { useAuth } from "../../../services/auth/useAuth";
import { useTranslation } from "react-i18next";

export default function ProfileHeader() {
  const { logout } = useAuth();
  const { t } = useTranslation();

  return (
    <div className="flex items-center gap-6 pb-6 border-b dark:border-neutral-800">
      <div className="relative group">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-500 to-blue-500" />
        <div className="absolute inset-0 rounded-full flex items-center justify-center bg-black/0 group-hover:bg-black/40 transition-all">
          <div className="w-8 h-8 text-white/0 group-hover:text-white/100 transition-all">
            <UserIcon />
          </div>
        </div>
      </div>
      <div className="flex-1">
        <h2 className="font-Poppins font-bold text-2xl dark:text-white">
          John Doe
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400">
          john.doe@example.com
        </p>
        <div className="flex gap-2 mt-3">
          <ButtonPrimary text={t("Edit Profile")} icon={<EditPenIcon />} />
          <ButtonRectangle
            text={t("Logout")}
            icon={<LogoutIcon />}
            onClick={logout}
            className="bg-red-500 border-red-500 text-white hover:text-white hover:bg-red-600 hover:border-red-600"
          />
        </div>
      </div>
    </div>
  );
}

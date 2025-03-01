import { useTranslation } from "react-i18next";
import { ShareIcon } from "@icons";
import CardContainer from "@components/ui/CardContainer";
import { useModal } from "@contexts/useModelContext";

export function ShareCard(props: { link?: string }) {
  const { t } = useTranslation();
  const { showModal } = useModal();

  const handleShareClick = () => {
    if (props.link) {
      navigator.clipboard.writeText(`localhost:3000/card/${props.link}`);
      showModal(
        "Copied to clipboard",
        "You can now share the card with others.",
        3000
      );
    } else {
      showModal("Error sharing card", "No card link available to share.", 3000);
    }
  };

  return (
    <CardContainer>
      <div
        className="overflow-hidden relative h-full flex justify-center gap-1 px-6 items-center dark:border-black dark:to-neutral-950 dark:from-neutral-950 bg-white dark:bg-neutral-900 dark:text-white text-black p-3 rounded-md cursor-pointer"
        onClick={handleShareClick}
      >
        <div className="w-7 h-7 text-green-500">
          <ShareIcon />
        </div>
        <p className="font-bold font-Poppins text-xl">{t("Share")}</p>
      </div>
    </CardContainer>
  );
}

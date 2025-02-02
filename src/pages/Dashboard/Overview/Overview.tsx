import CardPreviewCard from "@components/CardPreviewCard";
import TotalViewsCard from "./TotalViewsCard";
import { useState } from "react";
import QrCodePreview from "@components/QrCodePreview";
import QrCodeCard from "./QrCodeCard";
import { CreateNewCard } from "./CreateNewCard";
import { ShareCard } from "./ShareCard";
import TotalCardsCreated from "./TotalCardCreated";
import { useFetchMainCardInfo } from "../../../services/CardInfo/useFetchMainCardInfo";

export default function Overview() {
  const [showQrCodePreview, setShowQrCodePreview] = useState(false);
  const { data } = useFetchMainCardInfo();

  const handleShowQrCodePreview = () => {
    setShowQrCodePreview(true);
  };

  return (
    <div className="mt-3 flex gap-2 flex-wrap items-start">
      {showQrCodePreview && (
        <QrCodePreview
          toggleVisibility={setShowQrCodePreview}
          value={data?.id}
        />
      )}

      <CardPreviewCard cardInfo={data} />

      <div className="flex flex-col h-max gap-2">
        <div className="flex gap-2 flex-wrap">
          <TotalViewsCard />
          <TotalCardsCreated />
        </div>

        <div className="flex gap-2 flex-wrap justify-center">
          <QrCodeCard
            handleShowQrCodePreview={handleShowQrCodePreview}
            value={data?.id}
          />
          <CreateNewCard />
          <ShareCard />
        </div>
      </div>
    </div>
  );
}

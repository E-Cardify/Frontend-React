import CardPreviewCard from "@components/CardPreviewCard";
import TotalViewsCard from "./TotalViewsCard";
import { useState } from "react";
import QrCodePreview from "@components/QrCodePreview";
import QrCodeCard from "./QrCodeCard";
import { CreateNewCard } from "./CreateNewCard";
import { ShareCard } from "./ShareCard";
import TotalCardsCreated from "./TotalCardCreated";
import { getCardInfo } from "@helpers/getCardInfo";
import {
  CardInfoInterface,
  getDefaultCardInterfaceObject,
} from "@interfaces/CardInfoInterface";

export default function Overview() {
  const [
    showQrCodePreview,
    setShowQrCodePreview,
  ] = useState(false);
  const [cardInfo] =
    useState<CardInfoInterface>(
      getCardInfo() ||
        getDefaultCardInterfaceObject()
    );

  const handleShowQrCodePreview =
    () => {
      setShowQrCodePreview(true);
    };

  return (
    <div className="mt-3 flex gap-2 flex-wrap items-start">
      {showQrCodePreview && (
        <QrCodePreview
          toggleVisibility={
            setShowQrCodePreview
          }
          value="left"
        />
      )}

      <CardPreviewCard
        cardInfo={cardInfo}
      />

      <div className="flex flex-col h-max gap-2">
        <div className="flex gap-2 flex-wrap">
          <TotalViewsCard />
          <TotalCardsCreated />
        </div>

        <div className="flex gap-2 flex-wrap justify-center">
          <QrCodeCard
            handleShowQrCodePreview={
              handleShowQrCodePreview
            }
          />
          <CreateNewCard />
          <ShareCard />
        </div>
      </div>
    </div>
  );
}

import CardPreviewCard from "./CardPreviewCard";
import TotalViewsCard from "./TotalViewsCard";
import { useState } from "react";
import QrCodePreview from "../../../features/QrCodePreview";
import QrCodeCard from "./QrCodeCard";
import { CreateNewCard } from "./CreateNewCard";
import { ShareCard } from "./ShareCard";
import TotalCardsCreated from "./TotalCardCreated";

export default function Overview() {
    const [showQrCodePreview, setShowQrCodePreview] = useState(false);

    const handleShowQrCodePreview = () => {
        setShowQrCodePreview(true);
    }

    return (
        <div className="mt-3 flex gap-2 flex-wrap">
            {showQrCodePreview && <QrCodePreview toggleVisibility={setShowQrCodePreview} value="sohskjgh" />}

            <CardPreviewCard />

            <div className="flex flex-col h-max gap-2">
                <div className="flex gap-2 flex-wrap">
                    <TotalViewsCard />
                    <TotalCardsCreated />
                </div>

                <div className="flex gap-2 flex-wrap justify-center">
                    <QrCodeCard handleShowQrCodePreview={handleShowQrCodePreview} />
                    <CreateNewCard />
                    <ShareCard />
                </div>
            </div>
        </div>
    );
}
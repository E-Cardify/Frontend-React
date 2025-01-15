import CardPreviewCard from "./CardPreviewCard";
import TotalViewsCard from "./TotalViewsCard";
import { useState } from "react";
import QrCodePreview from "../../../features/QrCodePreview";
import QrCodeCard from "./QrCodeCard";
import { CreateNewCard } from "./CreateNewCard";
import { ShareCard } from "./ShareCard";

export default function Overview() {
    const [showQrCodePreview, setShowQrCodePreview] = useState(false);

    const handleShowQrCodePreview = () => {
        setShowQrCodePreview(true);
    }

    return (
        <div className="mt-3 flex gap-2 items-start flex-wrap">
            {showQrCodePreview && <QrCodePreview toggleVisibility={setShowQrCodePreview} value="sohskjgh" />}

            <CardPreviewCard />

            <div className="flex flex-col w-max h-full gap-y-2 flex-wrap">
                <div className="flex gap-x-2 flex-wrap">
                    <TotalViewsCard />
                    <TotalViewsCard />
                </div>


                <div className="flex h-full gap-2 flex-wrap">
                    <QrCodeCard handleShowQrCodePreview={handleShowQrCodePreview} />
                    <CreateNewCard />
                    <ShareCard />
                </div>
            </div>
        </div>
    );
}
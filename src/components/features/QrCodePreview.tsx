import { XIcon } from "@icons";
import { Dispatch, SetStateAction } from "react";
import { useTranslation } from "react-i18next";
import QRCode from "react-qr-code";

export default function QrCodePreview(props: {
    toggleVisibility: Dispatch<SetStateAction<boolean>>;
    value: string;
}) {
    const { t } = useTranslation();
    const handleHideQrCodePreview = () => {
        props.toggleVisibility(false);
    }

    return (
        <div className="fixed inset-0 z-30">
            <div className="w-full h-full relative">
                <div className="absolute inset-0 cursor-pointer z-10 backdrop-blur-md bg-black/80" onClick={handleHideQrCodePreview} />
                <div className="flex items-center justify-center h-full flex-col gap-5">
                    <div className="flex items-center gap-1">
                        <div className="w-10 h-10 text-red-500 z-50 relative cursor-pointer" onClick={handleHideQrCodePreview}>
                            <XIcon />
                        </div>
                        <p className="text-3xl font-Poppins font-bold text-white z-50 relative">{t("Your Qr Code")}</p>
                    </div>
                    <QRCode value={props.value} className="w-full h-full max-w-80 max-h-80 relative z-50" />
                </div>
            </div>
        </div>
    )
}
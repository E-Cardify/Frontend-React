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
            <div className="w-full h-full relative flex justify-center items-center">
                {/* backdrop and darken */}
                <div className="absolute inset-0 cursor-pointer z-10 backdrop-blur-sm bg-black/80" onClick={handleHideQrCodePreview} />

                {/* qr code in the middle */}
                <div className="from-green-500 to-blue-500 bg-gradient-to-br z-20 rounded-lg border-2 border-black shadow shadow-black">
                    <div className="flex items-center gap-1 w-full p-5 mb-8">
                        <div className="w-10 h-10 text-red-500 z-50 relative cursor-pointer" onClick={handleHideQrCodePreview}>
                            <XIcon />
                        </div>
                        <p className="flex-1 text-3xl text-center font-Montserrat font-bold text-white z-50 relative">{t("Your Qr Code")}</p>
                        <div className="w-10 h-10" />
                    </div>
                    <div className="w-full h-full relative z-50 px-10 pb-10">
                        <QRCode value={props.value} className="mx-auto max-w-80 max-h-80 border-4 border-white rounded-lg shadow shadow-neutral-700 box-content" />
                    </div>
                </div>
            </div>
        </div>
    )
}
import { SaveResetCardCustomizer } from "./SaveResetCardCustomizer";
import { useTranslation } from "react-i18next";

export function Fields() {
    const { t } = useTranslation();

    return (
        <>
            <div className="min-h-[70vh] max-h-[70vh] overflow-auto">
                <div>
                    <h1 className="text-xl font-Poppins font-bold p-2 px-3 border-b-2 border-neutral-200">{t("Color")}</h1>



                </div>
            </div>
            <SaveResetCardCustomizer />
        </>);
}

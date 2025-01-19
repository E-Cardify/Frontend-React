import useCardCreationTabContext from "@hooks/useCardCreationTabContext";
import { CheckIcon } from "@icons";
import { SaveResetCardCustomizer } from "./SaveResetCardCustomizer";
import getLighterShade from "../../../helpers/getLighterShade";
import { useTranslation } from "react-i18next";

export function Display() {
    const { cardInfo, setCardInfo } = useCardCreationTabContext();
    const { t } = useTranslation();

    const handleColorChange = (newColor: string) => {
        setCardInfo((prevCardInfo) => ({
            ...prevCardInfo,
            design: {
                ...prevCardInfo.design,
                color: newColor,
            },
        }));
    };

    const handleStyleChange = (newStyle: string) => {
        setCardInfo((prevCardInfo) => ({
            ...prevCardInfo,
            design: {
                ...prevCardInfo.design,
                style: newStyle,
            },
        }));
    };

    const colors = [
        'red-500',
        'yellow-400',
        'green-500',
        'blue-500',
        'purple-500',
        'gray-700',
        'teal-500',
        'amber-500',
        'indigo-500',
        'emerald-500'
    ]


    return (
        <>
            <div className="min-h-[70vh] max-h-[70vh] overflow-auto">
                <div>
                    <h1 className="text-xl font-Poppins font-bold p-2 px-3 border-b-2 border-neutral-200">{t("Color")}</h1>
                    <div className="px-3 flex gap-5 py-3 flex-wrap">
                        {
                            colors.map((color, index) => {
                                return (
                                    <div
                                        className={`rounded-xl w-10 h-10 bg-${color} cursor-pointer`}
                                        key={index}
                                        onClick={() => { handleColorChange(color) }}>
                                        {color == cardInfo.design?.color && <div className="text-white p-1 flex items-center justify-center">
                                            <CheckIcon />
                                        </div>}
                                    </div>
                                )
                            })
                        }
                    </div>

                    <h1 className="text-xl font-Poppins font-bold p-2 px-3 border-b-2 border-neutral-200">{t("Style")}</h1>
                    <div className="px-3 flex gap-5 py-3 flex-wrap">
                        <div title={t("Solid")} onClick={() => handleStyleChange("solid")} className={`rounded-xl w-10 h-10 bg-${cardInfo.design?.color || "green-500"} cursor-pointer`}>
                            {"solid" == cardInfo.design?.style && <div className="text-white p-1 flex items-center justify-center">
                                <CheckIcon />
                            </div>}
                        </div>
                        <div title={t("Gradient")} onClick={() => handleStyleChange("gradient")} className={`rounded-xl w-10 h-10 from-${cardInfo.design?.color || "green-500"} to-${getLighterShade(cardInfo.design?.color || "green-500")} bg-gradient-to-br cursor-pointer`}>
                            {"gradient" == cardInfo.design?.style && <div className="text-white p-1 flex items-center justify-center">
                                <CheckIcon />
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
            <SaveResetCardCustomizer />
        </>);
}

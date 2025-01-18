import useCardCreationTabContext from "@hooks/useCardCreationTabContext";
import { CheckIcon } from "@icons";
import { SaveResetCardCustomizer } from "./SaveResetCardCustomizer";

export function Display() {
    const { cardInfo, setCardInfo } = useCardCreationTabContext();

    const handleColorChange = (newColor: string) => {
        setCardInfo((prevCardInfo) => ({
            ...prevCardInfo,
            design: {
                color: newColor,
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
                    <h1 className="text-xl font-Poppins font-bold p-2 px-3 border-b-2 border-neutral-200">Color</h1>
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
                </div>
            </div>
            <SaveResetCardCustomizer />
        </>);
}

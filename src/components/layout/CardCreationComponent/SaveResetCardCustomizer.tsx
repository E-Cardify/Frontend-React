import useCardCreationTabContext from "@hooks/useCardCreationTabContext";
import RotateIcon from "../../../assets/icons/Rotate";
import SaveIcon from "../../../assets/icons/Save";
import Check from "../../../assets/icons/Check";
import { XIcon } from "@icons";
import { useState } from "react";

export function SaveResetCardCustomizer() {
    const { cardInfo, setCardInfo } = useCardCreationTabContext();
    const [showPoppup, setShowPoppup] = useState(false);
    const [hidePoppupAnimation, setHidePoppupAnimation] = useState(false);

    const [showResetPoppup, setShowResetPoppup] = useState(false);

    const handleCardInfoSave = () => {
        localStorage.setItem("cardInfo", JSON.stringify(cardInfo));

        setHidePoppupAnimation(false);
        setShowPoppup(true);
    };

    const handleCardInfoReset = () => {
        setShowResetPoppup(false);
        setCardInfo({
            information: {
                firstName: "",
                middleName: "",
                lastName: "",
                preferredName: "",
                maidenName: "",
                pronouns: "",
                title: "",
                department: "",
                company: "",
                headline: "",
                motto: "",

            }, design: {
                color: "green-500",
                style: "solid",
            }
        })

        localStorage.removeItem("cardInfo");
    }

    const handleHidePoppup = () => {
        setHidePoppupAnimation(true);

        setTimeout(() => {
            setShowPoppup(false);
            setHidePoppupAnimation(false);
        }, 450)
    }

    return (
        <>
            {showResetPoppup && <div className="fixed inset-0">
                <div className="relative w-full h-full flex justify-center items-center">
                    <div className="absolute inset-0 bg-black/50 -z-10" />
                    <div className="flex flex-col bg-white py-6 px-8 rounded-lg shadow border-2">
                        <div className="w-11 h-11 bg-red-200 text-red-500 rounded-lg p-1.5 flex justify-center items-center">
                            <RotateIcon />
                        </div>
                        <h1 className="text-lg font-Poppins font-bold pt-3">Are you sure you want to reset?</h1>
                        <p className="font-Poppins text-sm text-neutral-700">Your data will be deleted and this can't be undone.</p>

                        <div className="flex justify-end gap-2 pt-8">
                            <button onClick={() => setShowResetPoppup(false)} className="px-3 py-1.5 font-Poppins text-sm border-2 rounded-lg">Cancel</button>
                            <button onClick={handleCardInfoReset} className="px-3 py-1.5 font-Poppins text-sm text-white bg-red-500 rounded-md">Reset</button>
                        </div>
                    </div>
                </div>
            </div>}

            {showPoppup && <div className={`fixed top-5 right-5 bg-green-200 border-green-300 border-2 flex items-center gap-3 py-2.5 px-3 rounded-lg shadow-xl ${hidePoppupAnimation ? "animate-fade-left-reverse" : "animate-fade-left"}`}>
                <div className="w-8 h-8 bg-green-500 text-white rounded-full p-1">
                    <Check />
                </div>
                <div>
                    <h1 className="font-bold font-Poppins">Success!</h1>
                    <p className="font-Montserrat text-sm text-neutral-800">Card has been saved successfully.</p>
                </div>
                <div className="w-5 h-5 hover:cursor-pointer text-neutral-700 hover:text-neutral-950" onClick={handleHidePoppup}>
                    <XIcon />
                </div>
            </div>}

            <div className="pt-2 flex items-center gap-2 flex-row-reverse">
                <button onClick={() => { setShowResetPoppup(true) }} className="hover:text-neutral-800 p-2 px-3 border-2 flex items-center gap-2 text-neutral-600 font-Poppins font-bold rounded-lg">
                    <div className="w-8 h-8">
                        <RotateIcon />
                    </div>
                    <span>Reset</span>
                </button>
                <button onClick={handleCardInfoSave} className="flex items-center gap-2 bg-green-500 text-white font-Poppins font-bold p-2 px-3 rounded-lg shadow shadow-neutral-300">
                    <div className="w-8 h-8">
                        <SaveIcon />
                    </div>
                    <span>Save</span>
                </button>
            </div>
        </>
    );
}

import CardContainer from "../../../features/CardContainer";
import QRCode from "react-qr-code";
import CardPreview from "./CardPreview";
import TotalViewsCard from "./TotalViewsCard";
import { PlusIcon, ShareIcon } from "@icons";

export default function Overview() {
    return (
        <div className="mt-3 flex gap-2 items-start">
            <CardContainer>
                <CardPreview />
            </CardContainer>
            <div className="flex flex-col w-max h-full gap-y-2">
                <div className="flex gap-x-2">
                    <CardContainer>
                        <TotalViewsCard />
                    </CardContainer>
                    <CardContainer>
                        <TotalViewsCard />
                    </CardContainer>
                </div>


                <div className="flex h-full gap-2 ">
                    <CardContainer>
                        <div className="overflow-hidden rounded-md relative flex gap-1 items-center dark:border-black dark:to-neutral-950 dark:from-neutral-950 bg-white dark:bg-neutral-900 dark:text-white text-black cursor-pointer p-1 justify-center">
                            <QRCode value="H" className="w-20 h-20" />
                        </div>
                    </CardContainer>
                    <div className="flex-1 flex justify-center items-center flex-col from-green-500 to-blue-500 bg-gradient-to-br text-white p-3 rounded-xl shadow shadow-neutral-400 dark:shadow-neutral-700 cursor-pointer">
                        <div className="w-10 h-10">
                            <PlusIcon />
                        </div>
                        <p className="font-bold font-Poppins">Create New Card</p>
                    </div>
                    <CardContainer>
                        <div className="overflow-hidden relative h-full flex justify-center gap-1 px-6 items-center dark:border-black dark:to-neutral-950 dark:from-neutral-950 bg-white dark:bg-neutral-900 dark:text-white text-black p-3 rounded-md cursor-pointer">
                            <div className="w-7 h-7 text-green-500">
                                <ShareIcon />
                            </div>
                            <p className="font-bold font-Poppins text-xl">Share</p>
                        </div>
                    </CardContainer>
                </div>
            </div>
        </div>
    );
}
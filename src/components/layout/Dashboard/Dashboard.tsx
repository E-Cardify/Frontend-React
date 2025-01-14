import { useState } from "react";
import { DashboardViewContext } from "../../../hooks/DashboardViewContext";
import { DashboardNavbar } from "./DashboardNavbar";
import EyeIcon from "../../../assets/icons/Eye";
import ArrowIcon from "../../../assets/icons/Arrow";
import MailIcon from "../../../assets/icons/Mail";
import PhoneIcon from "../../../assets/icons/Phone";
import MapPinIcon from "../../../assets/icons/MapPin";
import PlusIcon from "../../../assets/icons/Plus";
import ShareIcon from "../../../assets/icons/Share";
import QRCode from "react-qr-code";


function TotalViewsCard() {
    return (
        <div className="relative min-w-64 group cursor-pointer float-left">
            {
                /* border overlay */
            }
            <div className="absolute top-0 left-0 to-neutral-200 dark:to-neutral-950 dark:from-neutral-950 from-neutral-200 bg-gradient-to-br group-hover:from-green-500 group-hover:to-blue-500 w-full h-full rounded-lg" />

            {
                /* padding so the container with border is visible */
            }
            <div className="p-0.5">
                <div className="bg-white dark:bg-neutral-900 relative rounded-md p-4">
                    <div className="w-10 h-10  flex justify-center items-center bg-neutral-100 dark:bg-neutral-800 text-green-500 rounded-full">
                        <div className="w-8 h-8">
                            <EyeIcon />
                        </div>
                    </div>
                    <div className="text-sm font-bold font-Poppins pt-6 text-neutral-800 dark:text-neutral-400">Total views</div>
                    <div className="text-3xl font-Roboto font-bold py-1 flex items-center gap-2 dark:text-white">1428
                        <span className="text-sm text-green-500 bg-green-200 py-0.5 px-1 rounded-xl flex items-center">
                            <div className="w-5 h-5">
                                <ArrowIcon />
                            </div>
                            12,55%
                        </span>
                    </div>
                    <div className="font-Poppins text-sm text-neutral-500">Compared to last month</div>
                </div>
            </div>
        </div>
    );
}


export default function Dashboard() {
    const [currentView, setCurrentView] = useState<"Overview" | "Notifications" | "History">("Overview");

    return (
        <DashboardViewContext.Provider value={{ currentView, setCurrentView }}>
            <DashboardNavbar />
            {currentView === "Overview" && (
                <>
                    <div className="mt-3 flex gap-2">
                        <div className="relative group cursor-pointer float-left min-w-60">
                            {
                                /* border overlay */
                            }
                            <div className="absolute top-0 left-0 to-neutral-200 from-neutral-200 dark:to-neutral-950 dark:from-neutral-950 bg-gradient-to-br group-hover:from-green-500 group-hover:to-blue-500 w-full h-full rounded-lg" />

                            {
                                /* padding so the container with border is visible */
                            }
                            <div className="p-0.5">
                                <div className="bg-white dark:bg-neutral-900 relative rounded-md overflow-hidden">
                                    <div className="h-20 from-green-500 bg-gradient-to-br to-green-300">

                                    </div>

                                    <div className="px-4 py-2">
                                        <h1 className="font-Poppins font-bold text-3xl dark:text-white">Maks Zając</h1>
                                        <p className="text-sm text-neutral-600 font-Roboto">Software Developer</p>

                                        <div className="mt-4 flex flex-col gap-3">
                                            <div className="flex gap-2 items-center text-neutral-700">
                                                <div className="w-5 text-green-500">
                                                    <MailIcon />
                                                </div>
                                                <p className="font-Roboto text-sm dark:text-neutral-400">zaksiu279@gmail.com</p>
                                            </div>
                                            <div className="flex gap-2 items-center text-neutral-700">
                                                <div className="w-5 text-green-500">
                                                    <PhoneIcon />
                                                </div>
                                                <p className="font-Roboto text-sm flex gap-1 items-center dark:text-neutral-400"><span className="text-xs dark:text-neutral-500 text-neutral-600">+48</span> 571 381 382</p>
                                            </div>
                                            <div className="flex gap-2 items-center text-neutral-700">
                                                <div className="w-5 text-green-500">
                                                    <MapPinIcon />
                                                </div>
                                                <p className="font-Roboto text-sm dark:text-neutral-400">Ubiad 119, Chełmiec 33-311</p>
                                            </div>
                                            <p className="text-center italic font-Roboto font-bold mt-4 dark:text-white">
                                                "Passion for life."
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col w-max h-full gap-y-2">
                            <div className="flex gap-x-2">
                                <TotalViewsCard />
                                <TotalViewsCard />
                            </div>


                            <div className="flex h-full gap-2">
                                <div className="flex justify-center gap-1 px-2 items-center dark:border-black dark:to-neutral-950 dark:from-neutral-950 bg-white dark:bg-neutral-900 dark:text-white text-black border-2 p-2 rounded-xl shadow cursor-pointer">
                                    <QRCode value="H" className="w-20 h-20" />
                                </div>
                                <div className="flex-1 flex justify-center items-center flex-col from-green-500 to-blue-500 bg-gradient-to-br text-white p-3 rounded-xl shadow shadow-neutral-400 dark:shadow-neutral-700 cursor-pointer">
                                    <div className="w-10 h-10">
                                        <PlusIcon />
                                    </div>
                                    <p className="font-bold font-Poppins">Create New Card</p>
                                </div>
                                <div className="flex justify-center gap-1 px-6 items-center dark:border-black dark:to-neutral-950 dark:from-neutral-950 bg-white dark:bg-neutral-900 dark:text-white text-black border-2 p-3 rounded-xl shadow cursor-pointer">
                                    <div className="w-7 h-7 text-green-500">
                                        <ShareIcon />
                                    </div>
                                    <p className="font-bold font-Poppins text-xl">Share</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>

                    </div>
                </>
            )}
        </DashboardViewContext.Provider >
    )
}
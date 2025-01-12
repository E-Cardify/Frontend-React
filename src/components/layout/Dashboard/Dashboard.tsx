import { useState } from "react";
import { DashboardViewContext } from "../../../hooks/DashboardViewContext";
import { DashboardNavbar } from "./DashboardNavbar";
import EyeIcon from "../../../assets/icons/Eye";
import ArrowIcon from "../../../assets/icons/Arrow";

export default function Dashboard() {
    const [currentView, setCurrentView] = useState<"Overview" | "Notifications" | "History">("Overview");

    return (
        <DashboardViewContext.Provider value={{ currentView, setCurrentView }}>
            <DashboardNavbar />
            <div className="relative w-1/4 group cursor-pointer mt-3">
                {
                    /* border overlay */
                }
                <div className="absolute top-0 left-0 bg-neutral-200 group-hover:bg-gradient-to-br group-hover:from-green-500 group-hover:to-blue-500 w-full h-full rounded-lg" />

                {
                    /* padding so the container with border is visible */
                }
                <div className="p-0.5">
                    <div className="bg-white relative rounded-md p-4">
                        <div className="w-10 h-10  flex justify-center items-center bg-neutral-100 text-green-500 rounded-full">
                            <div className="w-8 h-8">
                                <EyeIcon />
                            </div>
                        </div>
                        <div className="text-sm font-bold font-Poppins pt-6">Total views</div>
                        <div className="text-3xl font-Roboto font-bold py-1 flex items-center gap-2">1428
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
        </DashboardViewContext.Provider >
    )
}
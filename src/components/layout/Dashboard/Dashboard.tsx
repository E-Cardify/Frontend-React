import AlignIcon from "../../../assets/icons/Align";
import BellIcon from "../../../assets/icons/Bell";
import InformationIcon from "../../../assets/icons/Information";
import ShareIcon from "../../../assets/icons/Share";
import UserIcon from "../../../assets/icons/User";

export default function Dashboard() {
    return (
        <div>
            <div className="border-b-2">
                <div className="flex gap-2 items-center">
                    <h1 className="font-Roboto font-bold text-3xl">Dashboard</h1>

                    {/* right side */}
                    <div className="w-9 h-9 ml-auto text-gray-500 flex cursor-pointer items-center justify-center bg-white border-2 rounded-full">
                        <div className="w-4 h-4">
                            <InformationIcon />
                        </div>
                    </div>
                    <div className="w-9 h-9 text-gray-500 flex cursor-pointer items-center justify-center bg-white border-2 rounded-full">
                        <div className="w-4 h-4">
                            <BellIcon />
                        </div>
                    </div>
                    <div className="w-9 h-9 text-gray-500 flex cursor-pointer items-center justify-center bg-white border-2 rounded-full">
                        <div className="w-4 h-4">
                            <UserIcon />
                        </div>
                    </div>
                </div>
                <div className="flex font-Poppins pt-4 items-end">
                    <div className="pb-2 px-3 relative cursor-pointer">
                        Overview
                        <div className="absolute -bottom-0.5 left-0 w-full h-[3px] bg-green-500" />
                    </div>
                    <div className="pb-2 px-3 relative cursor-pointer text-gray-500">
                        Notifications
                    </div>
                    <div className="pb-2 px-3 relative cursor-pointer text-gray-500">
                        History
                    </div>

                    {/* right side */}
                    <div className="ml-auto flex gap-3 pb-2 items-center">
                        <div className="text-gray-500 flex bg-white items-center py-1.5 cursor-pointer border-2 px-3.5 font-Roboto text-xs gap-1.5 rounded-md">
                            <div className="w-4 h-4">
                                <AlignIcon />
                            </div>
                            <p>Filter</p>
                        </div>
                        <div className="text-white flex bg-green-500 items-center py-1.5 shadow cursor-pointer shadow-green-600 border-2 border-green-500 px-3.5 font-Roboto text-xs gap-1.5 rounded-md">
                            <div className="w-4 h-4">
                                <ShareIcon />
                            </div>
                            <p>Share</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
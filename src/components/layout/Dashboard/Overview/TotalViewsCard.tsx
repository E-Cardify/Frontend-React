import { ArrowIcon, EyeIcon } from "@icons";

export default function TotalViewsCard() {
    return (
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
    );
}

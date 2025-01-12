export function SideNavBarUpgradeNowButton() {
    return (<div className="relative mb-5">
        {
            /* border overlay */
        }
        <div className="absolute top-0 left-0 bg-gradient-to-br from-green-500 to-blue-500 w-full h-full rounded-lg" />

        {
            /* padding so the container with border is visible */
        }
        <div className="p-0.5">
            <div className="max-w-[200px] p-3 relative bg-white rounded-md text-xs font-Poppins">
                <p>
                    Get detailed analytics to help you, upgrade and go pro
                </p>
                <button type="button" title="Show Premium Options" className="text-sm mt-3 w-max bg-black text-white px-2 py-1 rounded-lg">
                    Upgrade Now
                </button>
            </div>
        </div>
    </div>);
}

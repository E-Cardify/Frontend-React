import SunIcon from "../../../assets/icons/Sun";

export function SideNavBarToggleTheme() {
    return (<div className="flex items-center px-2 text-gray-500 text-sm font-Roboto gap-2">
        <div className="w-5 h-5">
            <SunIcon />
        </div>
        <p>Light Mode</p>
        <button type="button" title="Toggle Light/Dark Mode" className="relative bg-neutral-200 w-8 h-4 cursor-pointer ml-auto shadow-inner shadow-neutral-300 rounded-full border">
            <div className="w-1/2 h-full absolute left-0 top-0 bg-white rounded-full shadow shadow-bg-neutral-300" />
        </button>
    </div>);
}

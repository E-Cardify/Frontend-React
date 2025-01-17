import { SlackIcon } from "@icons";
import useCollapseSideNavBarContext from "@hooks/useCollapseSideNavBarContext";

export function SideNavBarLogo() {
    const { isCollapsed } = useCollapseSideNavBarContext();

    return (
        <div>
            <div className="text-2xl font-Poppins font-bold cursor-pointer flex gap-1 items-center dark:text-white group">
                <div className="w-8 h-8 text-green-500 group-hover:text-green-600">
                    <SlackIcon />
                </div>
                {!isCollapsed && <h1 className="select-none">Cardify</h1>}
            </div>
        </div>
    );
}

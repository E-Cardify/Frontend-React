import Slack from "../../../assets/icons/Slack";
import useCollapseSideNavBarContext from "../../../hooks/useCollapseSideNavBarContext";

export function SideNavBarLogo() {
    const { isCollapsed } = useCollapseSideNavBarContext();

    return (
        <div>
            <div className="text-2xl font-Poppins font-bold cursor-pointer flex gap-1 items-center">
                <div className="w-8 h-8 text-green-600">
                    <Slack />
                </div>
                {!isCollapsed && <h1>Cardify</h1>}
            </div>
        </div>
    );
}

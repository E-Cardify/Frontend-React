import Slack from "../../../assets/icons/Slack";

export function SideNavBarLogo() {
    return (<div>
        <div className="text-2xl font-Poppins font-bold cursor-pointer flex gap-1 items-center">
            <div className="w-8 h-8 text-green-600">
                <Slack />
            </div>
            <h1>Cardify</h1>
        </div>
    </div>);
}

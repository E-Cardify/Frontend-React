import { tabsType } from "@hooks/CardCreationTabContext";
import useCardCreationTabContext from "@hooks/useCardCreationTabContext";

export function CardCustomizerTab(props: {
    text: tabsType;
}) {
    const { currentTab, setCurrentTab } = useCardCreationTabContext();

    const handleSetCurrentTab = () => {
        setCurrentTab(props.text);
    };

    return (
        <div className="px-3 p-2 relative cursor-pointer" onClick={handleSetCurrentTab}>
            <span className="font-Poppins">
                {props.text}
            </span>
            <div className={`absolute -bottom-0.5 left-0 w-full h-[3px] ${currentTab == props.text && "bg-green-500"}`} />
        </div>
    );
}

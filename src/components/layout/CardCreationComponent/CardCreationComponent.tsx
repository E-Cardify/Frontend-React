import { BellIcon, InformationIcon, UserIcon } from "@icons";
import CardPreviewCard from "../Dashboard/Overview/CardPreviewCard";
import { DashboardInfoButton } from "../Dashboard/DashboardInfoButton";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { CardCreationTabContext, CardInfoInterface, tabsType } from "@hooks/CardCreationTabContext";
import useCardCreationTabContext from "@hooks/useCardCreationTabContext";


function CardCustomizerTab(props: {
    text: tabsType;
}) {
    const { currentTab, setCurrentTab } = useCardCreationTabContext();

    const handleSetCurrentTab = () => {
        setCurrentTab(props.text);
    }

    return (
        <div className="px-3 p-2 relative cursor-pointer" onClick={handleSetCurrentTab}>
            <span className="font-Poppins">
                {props.text}
            </span>
            <div className={`absolute -bottom-0.5 left-0 w-full h-[3px] ${currentTab == props.text && "bg-green-500"}`} />
        </div>
    );
}



function CardCustomizerInputContainer(props: {
    label: string;
    path: keyof CardInfoInterface['information'];
    isTextArea?: boolean;
}) {
    const [value, setValue] = useState('');
    const { setCardInfo } = useCardCreationTabContext();

    useEffect(() => {
        setCardInfo((prevCardInfo) => ({
            ...prevCardInfo,
            information: {
                ...prevCardInfo.information,
                [props.path]: value,
            },
        }));
    }, [props.path, setCardInfo, value])

    return (
        <>{
            !props.isTextArea && <div className="flex flex-col gap-1.5">
                <label className="font-Poppins font-semibold text-neutral-500" htmlFor={props.path}>
                    {props.label}
                </label>
                <input id={props.path} value={value} onChange={e => {
                    setValue(e.target.value);
                }} className="max-w-80 focus:border-neutral-500 outline-none border-2 p-1 px-4 rounded-lg font-Poppins" />
            </div>
        }
            {
                props.isTextArea && <div className="flex flex-col gap-1.5">
                    <label className="font-Poppins font-semibold text-neutral-500" htmlFor={props.path}>
                        {props.label}
                    </label>
                    <textarea id={props.path} value={value} onChange={e => {
                        setValue(e.target.value);
                    }} className="max-w-80 min-h-20 focus:border-neutral-500 outline-none border-2 p-1 px-4 rounded-lg font-Poppins" />
                </div>
            }
        </>
    );
}


export function CardCreationComponent() {
    const [cardInfo, setCardInfo] = useState<CardInfoInterface>({ information: {} });
    const { t } = useTranslation();
    const [currentTab, setCurrentTab] = useState<"Display" | "Information" | "Fields">("Information");

    return (
        <CardCreationTabContext.Provider value={{ cardInfo, setCardInfo, currentTab, setCurrentTab }}>
            <div className="flex flex-col gap-2 h-full">
                <div className="border-b-2 dark:border-neutral-400 pb-3">
                    <div className="flex gap-2 items-center">
                        <h1 className="font-Roboto font-bold text-3xl dark:text-white">Card creation</h1>

                        {
                            /* right side */
                        }
                        <div className="flex gap-2 ml-auto items-center">
                            <DashboardInfoButton title={t("Help")}>
                                <InformationIcon />
                            </DashboardInfoButton>

                            <DashboardInfoButton title={t("Notifications")}>
                                <BellIcon />
                            </DashboardInfoButton>

                            <DashboardInfoButton title={t("Account")}>
                                <UserIcon />
                            </DashboardInfoButton>
                        </div>
                    </div>
                </div>

                <div className="flex-1 flex justify-center items-center">
                    {/* Preview */}
                    <div className="p-20">
                        <CardPreviewCard cardInfo={cardInfo} />
                    </div>

                    {/* Information Inputs */}
                    <div className="flex-1 bg-white flex flex-col rounded-lg border-2 p-2 ute">
                        <h1 className="font-Montserrat font-bold text-3xl">Card customizer</h1>
                        <div className="flex mt-2 border-b-2">
                            <CardCustomizerTab text="Display" />
                            <CardCustomizerTab text="Information" />
                            <CardCustomizerTab text="Fields" />
                        </div>
                        <div className="flex-1 px-4 py-2 min-h-[70vh] max-h-[70vh] overflow-auto">
                            {currentTab == "Information" && <>
                                <div>
                                    <div>
                                        <h1 className="text-xl font-Poppins font-bold p-2 px-3 border-b-2 border-neutral-200">Personal</h1>
                                        <div className="px-3 flex flex-col gap-5 py-3">
                                            <CardCustomizerInputContainer label="First Name:" path="firstName" />
                                            <CardCustomizerInputContainer label="Middle Name:" path="middleName" />
                                            <CardCustomizerInputContainer label="Last Name:" path="lastName" />
                                            <CardCustomizerInputContainer label="Preferred Name:" path="preferredName" />
                                            <CardCustomizerInputContainer label="Maiden Name:" path="maidenName" />
                                            <CardCustomizerInputContainer label="Pronouns:" path="pronouns" />
                                            <CardCustomizerInputContainer label="Motto:" path="motto" isTextArea={true} />
                                        </div>
                                    </div>

                                    <div>
                                        <h1 className="text-xl font-Poppins font-bold p-2 px-3 border-b-2 border-neutral-200">Affiliation</h1>
                                        <div className="px-3 flex flex-col gap-5 py-3">
                                            <CardCustomizerInputContainer label="Title:" path="title" isTextArea={true} />
                                            <CardCustomizerInputContainer label="Department:" path="department" />
                                            <CardCustomizerInputContainer label="Company:" path="company" />
                                            <CardCustomizerInputContainer label="Headline:" path="headline" isTextArea={true} />
                                        </div>
                                    </div>
                                </div>
                            </>}
                        </div>
                    </div>
                </div>
            </div>
        </CardCreationTabContext.Provider>
    );
}

import { SaveResetCardCustomizer } from "./SaveResetCardCustomizer";
import { useTranslation } from "react-i18next";
import { SingleFieldCreateButton } from "./SingleFieldCreateButton";
import useCardCreationTabContext from "@hooks/useCardCreationTabContext";
import CardContainer from "../../features/CardContainer";
import { useEffect } from "react";
import { XIcon } from "@icons";
import fields, { allFields } from "@data/fields";


function YourLinksLink(props: {
    index: number,
}) {
    const { cardInfo, setCardInfo } = useCardCreationTabContext();

    const handleFieldDelete = () => {
        const updatedCardInfo = cardInfo.fields.filter((_, i) => i !== props.index);

        setCardInfo(prev => {
            return {
                ...prev,
                fields: updatedCardInfo
            }
        });
    }

    const handleValueChange = (newValue: string) => {
        const fieldsCopy = cardInfo.fields;
        fieldsCopy[props.index].value = newValue;

        setCardInfo(prev => {
            return {
                ...prev,
                fields: fieldsCopy
            }
        });
    }

    return (
        <div>
            <CardContainer alwaysOn={true}>
                <div className="flex flex-col gap-2 px-3 py-2 rounded-md relative w-full bg-white dark:bg-neutral-950 cursor-auto">
                    <div className="flex justify-between gap-2">
                        <div className="flex gap-2 items-center w-max">
                            <div className="h-6 w-6">
                                {allFields.find(singleField => singleField.text == cardInfo.fields[props.index].label)?.icon}
                            </div>
                            <label htmlFor={`${cardInfo.fields[props.index]}-${props.index}`} className="font-Poppins font-bold text-lg">{cardInfo.fields[props.index].label}</label>
                        </div>
                        <div className="w-6 h-6 cursor-pointer text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200" onClick={handleFieldDelete}>
                            <XIcon />
                        </div>
                    </div>
                    <input id={`${cardInfo.fields[props.index]}-${props.index}`} value={cardInfo.fields[props.index].value} onChange={e => { handleValueChange(e.target.value) }} className="dark:bg-neutral-800 dark:border-black dark:focus:border-neutral-600 focus:border-neutral-500 outline-none border-2 p-1 px-4 rounded-lg font-Poppins w-full" />
                </div>
            </CardContainer>
        </div>
    );
}


export function Fields() {
    const { t } = useTranslation();
    const { cardInfo, setCardInfo } = useCardCreationTabContext();

    useEffect(() => {
        console.log(cardInfo);
    }, [cardInfo, setCardInfo])

    const handleAddField = (label: string) => {
        const newField = {
            label: label,
            value: "",
        };

        setCardInfo(prev => {
            return {
                ...prev,
                fields: [
                    ...prev.fields,
                    newField,
                ]
            }
        })
    }

    return (
        <>
            <div className="min-h-[70vh] max-h-[70vh] overflow-auto">
                {cardInfo.fields.length > 0 && <div className="mb-5">
                    <h1 className="text-xl font-Poppins font-bold p-2 px-3 border-b-2 border-neutral-200">{t("Your links")}</h1>

                    <div className="mt-2 px-3 flex flex-col gap-4">
                        {cardInfo.fields.map((_, index) => {
                            return <YourLinksLink key={index} index={index} />
                        })}
                    </div>
                </div>}

                {
                    Object.entries(fields).map(([categoryName, category]) => {
                        return (
                            <div className="mb-5" key={categoryName}>
                                <h1 className="text-xl font-Poppins font-bold p-2 px-3 border-b-2 border-neutral-200">{t(categoryName)}</h1>

                                <div className="flex flex-wrap mt-2 gap-1.5 px-3">
                                    {
                                        category.map((field, index) => {
                                            return (
                                                <div key={index} onClick={() => { handleAddField(field.text) }}>
                                                    <SingleFieldCreateButton text={field.text} icon={field.icon} />
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <SaveResetCardCustomizer />
        </>);
}

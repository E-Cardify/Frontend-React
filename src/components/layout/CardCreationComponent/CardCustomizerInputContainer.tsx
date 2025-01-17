import { CardInfoInterface } from "@hooks/CardCreationTabContext";
import useCardCreationTabContext from "@hooks/useCardCreationTabContext";
import { useEffect, useRef } from "react";

export default function CardCustomizerInputContainer(props: {
    label: string;
    path: keyof CardInfoInterface['information'];
    isTextArea?: boolean;
}) {
    const { cardInfo, setCardInfo } = useCardCreationTabContext();
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);

    const handleValueChange = (newValue: string) => {
        setCardInfo((prevCardInfo) => ({
            ...prevCardInfo,
            information: {
                ...prevCardInfo.information,
                [props.path]: newValue,
            },
        }));
    };

    useEffect(() => {
        if (textareaRef && textareaRef.current) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight + 10}px`;
        }
    }, [])

    const handleTextAreaSetHeight = () => {
        if (textareaRef && textareaRef.current) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight + 10}px`;
        }
    }

    return (
        <>{
            !props.isTextArea && <div className="flex flex-col gap-1.5">
                <label className="font-Poppins font-semibold text-neutral-500" htmlFor={props.path}>
                    {props.label}
                </label>
                <input id={props.path} value={cardInfo.information[props.path]} onChange={e => {
                    handleValueChange(e.target.value);
                }} className="max-w-80 focus:border-neutral-500 outline-none border-2 p-1 px-4 rounded-lg font-Poppins" />
            </div>
        }
            {
                props.isTextArea && <div className="flex flex-col gap-1.5">
                    <label className="font-Poppins font-semibold text-neutral-500" htmlFor={props.path}>
                        {props.label}
                    </label>
                    <textarea ref={textareaRef} id={props.path} value={cardInfo.information[props.path]} onChange={e => {
                        handleValueChange(e.target.value);
                        handleTextAreaSetHeight();
                    }} className="max-w-80 min-h-20 focus:border-neutral-500 outline-none border-2 p-1 px-4 rounded-lg font-Poppins" />
                </div>
            }
        </>
    );
}
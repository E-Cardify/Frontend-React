import { useTranslation } from "react-i18next";
import CardContainer from "../../features/CardContainer";

export function SingleFieldCreateButton(props: {
    icon: JSX.Element,
    text: string
}) {
    const { t } = useTranslation();

    return (<CardContainer>
        <div className="flex items-center justify-center text-neutral-600 dark:bg-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-200 hover:text-neutral-800 gap-1.5 font-Poppins p-1.5 text-sm py-1 relative bg-white rounded-md shadow">
            <div className="w-4 h-4 flex items-center justify-center">
                {props.icon}
            </div>
            <span>{t(props.text)}</span>
        </div>
    </CardContainer>);
}

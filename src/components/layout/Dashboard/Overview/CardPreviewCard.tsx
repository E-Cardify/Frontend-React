import { MailIcon, MapPinIcon, PhoneIcon } from "@icons";
import CardContainer from "../../../features/CardContainer";
import { CardInfoInterface } from "@hooks/CardCreationTabContext";

export default function CardPreviewCard(props: {
    cardInfo?: CardInfoInterface
}) {
    return (
        <CardContainer>
            <div className="bg-white dark:bg-neutral-900 relative rounded-md overflow-hidden w-80">
                <div className="h-40 from-green-500 bg-gradient-to-br to-green-300">

                </div>

                <div className="px-4 py-2">
                    <h1 className="font-Poppins font-bold text-3xl dark:text-white">
                        {`${props.cardInfo?.information?.firstName || "Maks"} `}
                        {`${props.cardInfo?.information?.middleName || ""} `}
                        {`${props.cardInfo?.information?.lastName || "Zając"} `}
                        {props.cardInfo?.information?.maidenName && `(${props.cardInfo?.information?.maidenName}) `}
                    </h1>

                    <p className="text-sm text-neutral-600 font-Roboto pt-1.5">
                        {props.cardInfo?.information?.title || "Software Developer"}
                    </p>

                    <p className="text-green-500 font-Poppins font-bold text-lg">
                        {props.cardInfo?.information.department}
                    </p>

                    <p className="font-Roboto italic text-xl text-neutral-600">
                        {props.cardInfo?.information.company}
                    </p>

                    <p className="font-Roboto py-5 text-neutral-600 whitespace-pre-wrap">
                        {props.cardInfo?.information.headline}
                    </p>

                    <div className="flex flex-col gap-3">
                        <div className="flex gap-2 items-center text-neutral-700">
                            <div className="w-5 text-green-500">
                                <MailIcon />
                            </div>
                            <p className="font-Roboto text-sm dark:text-neutral-400">zaksiu279@gmail.com</p>
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700">
                            <div className="w-5 text-green-500">
                                <PhoneIcon />
                            </div>
                            <p className="font-Roboto text-sm flex gap-1 items-center dark:text-neutral-400"><span className="text-xs dark:text-neutral-500 text-neutral-600">+48</span> 571 381 382</p>
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700">
                            <div className="w-5 text-green-500">
                                <MapPinIcon />
                            </div>
                            <p className="font-Roboto text-sm dark:text-neutral-400">Ubiad 119, Chełmiec 33-311</p>
                        </div>

                        {
                            (props.cardInfo?.information.preferredName || props.cardInfo?.information.pronouns) &&
                            <div className="font-Poppins text-neutral-400 pt-5">
                                <span>Goes by{" "}</span>
                                <span className="font-bold">
                                    <span>{props.cardInfo.information.preferredName}{" "}</span>
                                    {props.cardInfo.information.pronouns && <span className="italic">({props.cardInfo.information.pronouns})</span>}
                                </span>
                            </div>
                        }


                        <p className="text-center italic font-Roboto font-bold dark:text-white">
                            &bdquo;{props.cardInfo?.information.motto || "Passion for life."}&quot;
                        </p>

                    </div>
                </div>
            </div>
        </CardContainer >
    );
}
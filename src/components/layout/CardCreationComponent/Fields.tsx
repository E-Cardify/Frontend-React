import { SaveResetCardCustomizer } from "./SaveResetCardCustomizer";
import { useTranslation } from "react-i18next";
import { SingleFieldCreateButton } from "./SingleFieldCreateButton";
import { DiscordIcon, DribbbleIcon, FacebookIcon, FileIcon, GithubIcon, GlobeIcon, InstagramIcon, LinkIcon, MailIcon, MapPinIcon, PayPalIcon, PhoneIcon, PinterestIcon, ShoppingCardIcon, TelegramIcon, TiktokIcon, TwitchIcon, WhatsAppIcon } from "@icons";

export function Fields() {
    const { t } = useTranslation();



    const fields: {
        [category: string]: { text: string; icon: JSX.Element }[];
    } = {
        Social: [
            { text: "Facebook", icon: <FacebookIcon /> },
            { text: "Instagram", icon: <InstagramIcon /> },
            { text: "Twitch", icon: <TwitchIcon /> },
            { text: "Tiktok", icon: <TiktokIcon /> },
            { text: "Pinterest", icon: <PinterestIcon /> },
        ],
        Communication: [
            { text: "Email", icon: <MailIcon /> },
            { text: "Phone", icon: <PhoneIcon /> },
            { text: "WhatsApp", icon: <WhatsAppIcon /> },
            { text: "Telegram", icon: <TelegramIcon /> },
            { text: "Discord", icon: <DiscordIcon /> },
        ],
        Payment: [
            { text: "PayPal", icon: <PayPalIcon /> },
        ],
        Design: [
            { text: "Dribbble", icon: <DribbbleIcon /> },
        ],
        Other: [
            { text: "Shop", icon: <ShoppingCardIcon /> },
            { text: "Github", icon: <GithubIcon /> },
            { text: "Website", icon: <GlobeIcon /> },
            { text: "PDF", icon: <FileIcon /> },
            { text: "Address", icon: <MapPinIcon /> },
            { text: "Other", icon: <LinkIcon /> },
        ],
    };


    return (
        <>
            <div className="min-h-[70vh] max-h-[70vh] overflow-auto">
                {
                    Object.entries(fields).map(([categoryName, category]) => {
                        return (
                            <div className="mb-5">
                                <h1 className="text-xl font-Poppins font-bold p-2 px-3 border-b-2 border-neutral-200">{t(categoryName)}</h1>

                                <div className="flex flex-wrap mt-2 gap-1.5 px-3">
                                    {
                                        category.map((field) => {
                                            return <>
                                                <SingleFieldCreateButton text={field.text} icon={field.icon} />
                                            </>

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

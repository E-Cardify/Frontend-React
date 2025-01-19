import { DiscordIcon, DribbbleIcon, FacebookIcon, FileIcon, GithubIcon, GlobeIcon, InstagramIcon, LinkIcon, MailIcon, MapPinIcon, PayPalIcon, PhoneIcon, PinterestIcon, ShoppingCardIcon, TelegramIcon, TiktokIcon, TwitchIcon, WhatsAppIcon } from "@icons";

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

export default fields;
export const allFields = Object.values(fields).flat();
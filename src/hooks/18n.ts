import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Polish from "../translations/Polish";
import English from "../translations/English";

let userLang = navigator.language.split("-")[0];

if (userLang !== "pl" && userLang !== "en") {
    userLang = "en";
}

const localStorageLang = localStorage.getItem("userLang");
if (localStorageLang == "en" || localStorageLang == "pl") {
    userLang = localStorageLang;
}

i18n.use(initReactI18next).init({
    lng: userLang,
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },
    resources: {
        en: {
            translation: English
        },
        pl: {
            translation: Polish
        }
    }
});

export default i18n;
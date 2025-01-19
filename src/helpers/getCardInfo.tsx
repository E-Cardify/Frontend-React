export const getCardInfo = () => {
    const cardInfoString = localStorage.getItem("cardInfo");

    if (cardInfoString) {
        try {
            const cardInfoData = JSON.parse(cardInfoString);

            const obj: {
                information: object,
                design: object
            } = {
                information: {},
                design: {}
            };

            if (typeof cardInfoData === "object") {
                if (cardInfoData.information && (typeof cardInfoData.information === "object")) {
                    obj.information = cardInfoData.information;
                }

                if (cardInfoData.design && (typeof cardInfoData.design === "object")) {
                    obj.design = cardInfoData.design;
                }
            }

            return obj;
        } catch (e) {
            console.log(e);
            localStorage.removeItem("cardInfo");
        }
    }

    localStorage.removeItem("cardInfo");
};

export const getCardInfo = () => {
    const cardInfoString = localStorage.getItem("cardInfo");

    if (cardInfoString) {
        try {
            const cardInfoData = JSON.parse(cardInfoString);


            if ((typeof cardInfoData === "object") && cardInfoData.information && (typeof cardInfoData.information === "object")) {
                const obj = {
                    information: {
                        ...cardInfoData.information,
                    }
                };

                return obj;
            }
        } catch (e) {
            console.log(e);
            localStorage.removeItem("cardInfo");
        }
    }

    localStorage.removeItem("cardInfo");
};

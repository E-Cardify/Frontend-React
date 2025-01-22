import {
  CardInfoInterface,
  getDefaultCardInterfaceObject,
} from "../interfaces/CardInfoInterface";

export const getCardInfo = () => {
  const cardInfoString =
    localStorage.getItem("cardInfo");

  if (cardInfoString) {
    try {
      const cardInfoData = JSON.parse(
        cardInfoString
      );

      const obj: CardInfoInterface =
        getDefaultCardInterfaceObject();

      if (
        typeof cardInfoData === "object"
      ) {
        if (
          cardInfoData.information &&
          typeof cardInfoData.information ===
            "object"
        ) {
          obj.information =
            cardInfoData.information;
        }

        if (
          cardInfoData.design &&
          typeof cardInfoData.design ===
            "object"
        ) {
          obj.design =
            cardInfoData.design;
        }

        if (
          cardInfoData.fields &&
          Array.isArray(
            cardInfoData.fields
          )
        ) {
          const array: {
            label: string;
            value: string;
          }[] = [];

          cardInfoData.fields.forEach(
            (field: unknown) => {
              if (
                field &&
                typeof field ===
                  "object" &&
                "label" in field &&
                "value" in field
              ) {
                if (
                  field.label &&
                  field.value
                ) {
                  const typedField =
                    field as {
                      label: string;
                      value: string;
                    };
                  array.push(
                    typedField
                  );
                }
              }
            }
          );

          obj.fields = array;
        }
      }

      return obj;
    } catch (e) {
      console.log(e);
      localStorage.removeItem(
        "cardInfo"
      );
    }
  }

  localStorage.removeItem("cardInfo");
};

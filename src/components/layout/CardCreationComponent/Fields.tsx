import { SaveResetCardCustomizer } from "./SaveResetCardCustomizer";
import { useTranslation } from "react-i18next";
import { SingleFieldCreateButton } from "./SingleFieldCreateButton";
import useCardCreationTabContext from "@hooks/useCardCreationTabContext";
import { useEffect } from "react";
import fields from "@data/fields";
import { YourLinksLink } from "./YourLinksLink";

export function Fields() {
  const { t } = useTranslation();
  const { cardInfo, setCardInfo } =
    useCardCreationTabContext();

  useEffect(() => {
    console.log(cardInfo);
  }, [cardInfo, setCardInfo]);

  const handleAddField = (
    label: string
  ) => {
    const newField = {
      label: label,
      value: "",
    };

    setCardInfo((prev) => {
      return {
        ...prev,
        fields: [
          ...prev.fields,
          newField,
        ],
      };
    });
  };

  return (
    <>
      <div className="min-h-[70vh] max-h-[70vh] overflow-auto">
        {cardInfo.fields.length > 0 && (
          <div className="mb-5">
            <h1 className="text-xl font-Poppins font-bold p-2 px-3 border-b-2 border-neutral-200">
              {t("Your links")}
            </h1>

            <div className="mt-2 px-3 flex flex-col gap-4">
              {cardInfo.fields.map(
                (_, index) => {
                  return (
                    <YourLinksLink
                      key={index}
                      index={index}
                    />
                  );
                }
              )}
            </div>
          </div>
        )}

        {Object.entries(fields).map(
          ([
            categoryName,
            category,
          ]) => {
            return (
              <div
                className="mb-5"
                key={categoryName}
              >
                <h1 className="text-xl font-Poppins font-bold p-2 px-3 border-b-2 border-neutral-200">
                  {t(categoryName)}
                </h1>

                <div className="flex flex-wrap mt-2 gap-1.5 px-3">
                  {category.map(
                    (field, index) => {
                      return (
                        <div
                          key={index}
                          onClick={() => {
                            handleAddField(
                              field.text
                            );
                          }}
                        >
                          <SingleFieldCreateButton
                            text={
                              field.text
                            }
                            icon={
                              field.icon
                            }
                          />
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            );
          }
        )}
      </div>

      <SaveResetCardCustomizer />
    </>
  );
}

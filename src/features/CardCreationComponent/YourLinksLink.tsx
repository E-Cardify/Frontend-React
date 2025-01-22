import { allFields } from "@data/fields";
import useCardCreationTabContext from "@contexts/useCardCreationTabContext";
import { useTranslation } from "react-i18next";
import { XIcon } from "@icons";
import CardContainer from "@components/ui/CardContainer";
import Input from "@components/ui/Input";

export function YourLinksLink(props: {
  index: number;
}) {
  const { cardInfo, setCardInfo } =
    useCardCreationTabContext();
  const { t } = useTranslation();

  const handleFieldDelete = () => {
    const updatedCardInfo =
      cardInfo.fields.filter(
        (_, i) => i !== props.index
      );

    setCardInfo((prev) => {
      return {
        ...prev,
        fields: updatedCardInfo,
      };
    });
  };

  const handleValueChange = (
    newValue: string
  ) => {
    const fieldsCopy = cardInfo.fields;
    fieldsCopy[props.index].value =
      newValue;

    setCardInfo((prev) => {
      return {
        ...prev,
        fields: fieldsCopy,
      };
    });
  };

  return (
    <div>
      <CardContainer alwaysOn={true}>
        <div className="flex flex-col gap-2 px-3 py-2 rounded-md relative w-full bg-white dark:bg-neutral-950 cursor-auto">
          <div className="flex justify-between gap-2">
            <div className="flex gap-2 items-center w-max text-neutral-500 dark:text-neutral-400">
              <div className="h-6 w-6">
                {
                  allFields.find(
                    (singleField) =>
                      singleField.text ==
                      cardInfo.fields[
                        props.index
                      ].label
                  )?.icon
                }
              </div>
              <label
                htmlFor={`${
                  cardInfo.fields[
                    props.index
                  ]
                }-${props.index}`}
                className="font-Poppins font-bold text-lg"
              >
                {t(
                  cardInfo.fields[
                    props.index
                  ].label
                )}
              </label>
            </div>
            <div
              className="w-6 h-6 cursor-pointer text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200"
              onClick={
                handleFieldDelete
              }
            >
              <XIcon />
            </div>
          </div>
          <Input
            wFull={true}
            title=""
            id={`${
              cardInfo.fields[
                props.index
              ]
            }-${props.index}`}
            value={
              cardInfo.fields[
                props.index
              ].value
            }
            onChange={(e) => {
              handleValueChange(
                e.target.value
              );
            }}
          />
        </div>
      </CardContainer>
    </div>
  );
}

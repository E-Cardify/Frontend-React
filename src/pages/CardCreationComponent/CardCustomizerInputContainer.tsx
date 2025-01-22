import { CardInfoInterface } from "@interfaces/CardInfoInterface";
import useCardCreationTabContext from "@contexts/useCardCreationTabContext";
import { useTranslation } from "react-i18next";
import Input from "@components/ui/Input";
import Textarea from "@components/ui/Textarea";

export default function CardCustomizerInputContainer(props: {
  label: string;
  path: keyof CardInfoInterface["information"];
  isTextArea?: boolean;
}) {
  const { cardInfo, setCardInfo } =
    useCardCreationTabContext();
  const { t } = useTranslation();

  const handleValueChange = (
    newValue: string
  ) => {
    setCardInfo((prevCardInfo) => ({
      ...prevCardInfo,
      information: {
        ...prevCardInfo.information,
        [props.path]: newValue,
      },
    }));
  };

  return (
    <div className="flex flex-col gap-1.5">
      <label
        className="font-Poppins font-semibold text-neutral-500"
        htmlFor={props.path}
      >
        {t(props.label)}:
      </label>

      {!props.isTextArea && (
        <Input
          title=""
          id={props.path}
          value={
            cardInfo.information[
              props.path
            ]
          }
          onChange={(e) => {
            handleValueChange(
              e.target.value
            );
          }}
        />
      )}

      {props.isTextArea && (
        <Textarea
          title=""
          id={props.path}
          value={
            cardInfo.information[
              props.path
            ]
          }
          onChange={(e) => {
            handleValueChange(
              e.target.value
            );
          }}
        />
      )}
    </div>
  );
}

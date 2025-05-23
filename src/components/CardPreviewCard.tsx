import CardContainer from "@components/ui/CardContainer";
import { CardInfoInterface } from "@interfaces/CardInfoInterface";
import getLighterShade from "@helpers/getLighterShade";
import { allFields } from "@data/fields";

export default function CardPreviewCard(props: {
  cardInfo?: CardInfoInterface;
}) {
  return (
    <div className="w-max">
      <CardContainer>
        <div className="bg-white dark:bg-neutral-900 relative rounded-md overflow-hidden w-80">
          {props.cardInfo?.design?.style == "gradient" ? (
            <div
              className={`h-40 from-${
                props.cardInfo?.design?.color || "green-500"
              } to-${getLighterShade(
                props.cardInfo?.design?.color || "green-500"
              )} bg-gradient-to-br`}
            />
          ) : (
            <div
              className={`h-40 bg-${
                props.cardInfo?.design?.color || "green-500"
              }`}
            />
          )}

          <div className="px-4 py-2">
            <h1 className="font-Poppins font-bold text-3xl dark:text-white break-words">
              {`${props.cardInfo?.information?.firstName || ""} `}
              {`${props.cardInfo?.information?.middleName || ""} `}
              {`${props.cardInfo?.information?.lastName || ""} `}
              {props.cardInfo?.information?.maidenName &&
                `(${props.cardInfo?.information?.maidenName}) `}
            </h1>

            <p className="text-sm text-neutral-600 font-Roboto pt-1.5 break-words">
              {props.cardInfo?.information?.title}
            </p>

            <p
              className={`text-${
                props.cardInfo?.design?.color || "green-500"
              } font-Poppins font-bold text-lg break-words`}
            >
              {props.cardInfo?.information?.department}
            </p>

            <p className="font-Roboto italic text-xl text-neutral-600 break-words">
              {props.cardInfo?.information?.company}
            </p>

            <p className="font-Roboto py-5 text-neutral-600 whitespace-pre-wrap break-words">
              {props.cardInfo?.information?.headline}
            </p>

            <div className="flex flex-col gap-3">
              {props.cardInfo?.fields.map((field, index) => {
                return (
                  <a
                    href={
                      (["Website", "Shop", "Website", "Other"].includes(
                        field.label
                      ) &&
                        `https://${field.value}`) ||
                      ""
                    }
                    key={`${field}-${index}`}
                    className="flex gap-2 items-center text-neutral-700"
                  >
                    <div
                      className={`w-5 text-${
                        props.cardInfo?.design?.color || "green-500"
                      }`}
                    >
                      {
                        allFields.find(
                          (singleField) => singleField.text == field.label
                        )?.icon
                      }
                    </div>
                    <p className="font-Roboto text-sm dark:text-neutral-400 break-words">
                      {field.value}
                    </p>
                  </a>
                );
              })}

              {(props.cardInfo?.information?.preferredName ||
                props.cardInfo?.information?.pronouns) && (
                <div className="font-Poppins text-neutral-400 pt-5 break-words">
                  <span>Goes by </span>
                  <span className="font-bold">
                    <span>{props.cardInfo.information.preferredName} </span>
                    {props.cardInfo.information.pronouns && (
                      <span className="italic">
                        ({props.cardInfo.information.pronouns})
                      </span>
                    )}
                  </span>
                </div>
              )}

              {props.cardInfo?.information?.motto && (
                <p className="text-center italic font-Roboto font-bold dark:text-white break-words">
                  &bdquo;
                  {props.cardInfo?.information?.motto}
                  &quot;
                </p>
              )}
            </div>
          </div>
        </div>
      </CardContainer>
    </div>
  );
}

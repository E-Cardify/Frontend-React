import { CardInfoInterface } from "@interfaces/CardInfoInterface";
import getLighterShade from "@helpers/getLighterShade";
import { allFields } from "@data/fields";
import { Paper } from "@mantine/core";

export default function CardPreviewCard(props: {
  cardInfo?: CardInfoInterface;
}) {
  return (
    <Paper
      w="max-content"
      shadow="xl"
      m="auto"
      mih="500px"
      style={{
        overflow: "hidden",
      }}
    >
      <div className="bg-white relative rounded-md overflow-hidden w-80">
        {props.cardInfo?.design?.style == "gradient" ? (
          <div
            className={`h-40 from-${"green-500"} to-${getLighterShade(
              "green-500"
            )} bg-gradient-to-br`}
          />
        ) : (
          <div
            className={`h-40`}
            style={{
              backgroundColor: props.cardInfo?.design.color,
            }}
          />
        )}

        <div className="px-4 py-2">
          <h1 className="font-Poppins font-bold text-3xl break-words">
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
            style={{
              color: props.cardInfo?.design.color,
            }}
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
                    className={`w-5`}
                    style={{
                      color: props.cardInfo?.design.color,
                    }}
                  >
                    {
                      allFields.find(
                        (singleField) => singleField.text == field.label
                      )?.icon
                    }
                  </div>
                  <p className="font-Roboto text-sm break-words">
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
              <p className="text-center italic font-Roboto font-bold break-words">
                &bdquo;
                {props.cardInfo?.information?.motto}
                &quot;
              </p>
            )}
          </div>
        </div>
      </div>
    </Paper>
  );
}

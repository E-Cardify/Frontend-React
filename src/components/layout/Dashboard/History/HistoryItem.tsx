import { ReactNode } from "react";
import CardContainer from "../../../ui/CardContainer";

export function HistoryItem(props: {
  last?: boolean;
  seen?: boolean;
  date: string;
  mainText: string;
  secondaryText: string;
  icon: ReactNode;
  color: string;
}) {
  return (
    <>
      <div className="flex justify-start gap-3">
        <div className="flex flex-col items-center gap-2">
          <div
            className={`w-12 h-12 bg-${props.color} text-white p-2 rounded-full`}
          >
            {props.icon}
          </div>
          {!props.last && (
            <div className="flex-1 bg-neutral-300 w-[3px]" />
          )}
        </div>
        <CardContainer>
          <div className="items-center relative rounded-md p-2 px-5 bg-gray-200">
            <p className="font-Poppins text-neutral-600 flex items-center gap-1">
              {props.date}
              {!props.seen && (
                <div className="bg-green-500 rounded-full w-3 h-3 -translate-y-[10%]" />
              )}
            </p>
            <h1 className="font-Poppins font-bold text-lg">
              {props.mainText}
            </h1>
            <p className="font-Poppins text-sm text-neutral-600">
              {props.secondaryText}
            </p>
          </div>
        </CardContainer>
      </div>
      {!props.last && (
        <div className="bg-neutral-300 w-[3px] h-10 ml-[22.5px] mb-2" />
      )}
    </>
  );
}

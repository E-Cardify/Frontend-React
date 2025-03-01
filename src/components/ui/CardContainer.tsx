import { ReactNode } from "react";

export default function CardContainer(props: {
  children: ReactNode;
  alwaysOn?: boolean;
  noBorder?: boolean;
}) {
  return (
    <div className="relative group cursor-pointer">
      {/* border overlay */}
      <div
        className={`absolute top-0 left-0 ${
          props.alwaysOn
            ? "from-green-500 to-blue-500 dark:to-blue-500 dark:from-green-500"
            : "to-neutral-200 from-neutral-200 dark:to-neutral-950 dark:from-neutral-950"
        } bg-gradient-to-br group-hover:from-green-500 group-hover:to-blue-500 w-full h-full rounded-lg`}
      />

      {/* padding so the container with border is visible */}
      <div className="h-full p-0.5 rounded-md overflow-hidden flex items-center justify-center">
        {props.children}
      </div>
    </div>
  );
}

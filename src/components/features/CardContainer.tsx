import { ReactNode } from "react";

export default function CardContainer(props: {
    children: ReactNode,
}) {
    return (<div className="relative group cursor-pointer float-left">
        {
            /* border overlay */
        }
        <div className="absolute top-0 left-0 to-neutral-200 from-neutral-200 dark:to-neutral-950 dark:from-neutral-950 bg-gradient-to-br group-hover:from-green-500 group-hover:to-blue-500 w-full h-full rounded-lg" />

        {
            /* padding so the container with border is visible */
        }
        <div className="h-full p-0.5 rounded-md overflow-hidden">
            {props.children}
        </div>
    </div>);
}
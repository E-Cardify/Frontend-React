import { ReactNode } from "react";


export function SideNavBarItem(props: {
    active?: boolean;
    children?: ReactNode;
    text?: string;
}) {
    return (
        <div className={`flex gap-x-1 cursor-pointer items-center min-w-[200px] py-2 rounded-md px-1 font-Roboto text-sm ${props.active ? "bg-green-500 text-white" : "text-neutral-500"}`}>
            <div className="h-5 w-5 flex items-center justify-center">
                {props.children}
            </div>
            {props.text && <h1 className="flex items-center justify-center">{props.text}</h1>}
        </div>
    );
}

import { ReactNode } from "react";

export function DashboardInfoButton(props: {
    children: ReactNode;
    title?: string;
}) {
    return (
        <div title={props.title} className="w-9 h-9 text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-300 dark:bg-neutral-900 dark:border-black flex cursor-pointer items-center justify-center bg-white border-2 rounded-full">
            <div className="w-4 h-4">
                {props.children}
            </div>
        </div>
    );
}

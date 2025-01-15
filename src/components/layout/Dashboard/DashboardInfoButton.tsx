import { ReactNode } from "react";

export function DashboardInfoButton(props: {
    children: ReactNode;
}) {
    return (
        <div className="w-9 h-9 text-neutral-500 dark:bg-neutral-900 dark:border-black flex cursor-pointer items-center justify-center bg-white border-2 rounded-full">
            <div className="w-4 h-4">
                {props.children}
            </div>
        </div>
    );
}

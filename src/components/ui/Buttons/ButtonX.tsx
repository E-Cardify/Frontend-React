import { XIcon } from "@icons";

export default function ButtonX(props: {
  onClick: () => void;
}) {
  return (
    <div
      className="w-6 h-6 cursor-pointer text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200"
      onClick={props.onClick}
    >
      <XIcon />
    </div>
  );
}

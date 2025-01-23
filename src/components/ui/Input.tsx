export default function Input(props: {
  wFull?: boolean;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  value?: string;
  id?: string;
  title?: string;
}) {
  return (
    <input
      title={props.title}
      id={props.id}
      value={props.value}
      onChange={props.onChange}
      className={`dark:bg-neutral-800 ${
        props.wFull
          ? "w-full"
          : "max-w-80"
      } dark:border-black dark:focus:border-neutral-600 focus:border-neutral-500 outline-none border-2 p-1 px-4 rounded-lg font-Poppins`}
    />
  );
}

import {
  useEffect,
  useRef,
} from "react";

export default function Textarea(props: {
  onChange: (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  value: string;
  id: string;
  title: string;
}) {
  const textareaRef =
    useRef<HTMLTextAreaElement | null>(
      null
    );

  useEffect(() => {
    if (
      textareaRef &&
      textareaRef.current
    ) {
      textareaRef.current.style.height =
        "auto";
      textareaRef.current.style.height = `${
        textareaRef.current
          .scrollHeight + 10
      }px`;
    }
  }, []);

  const handleTextAreaSetHeight =
    () => {
      if (
        textareaRef &&
        textareaRef.current
      ) {
        textareaRef.current.style.height =
          "auto";
        textareaRef.current.style.height = `${
          textareaRef.current
            .scrollHeight + 10
        }px`;
      }
    };

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    props.onChange(e);
    handleTextAreaSetHeight();
  };

  return (
    <textarea
      ref={textareaRef}
      title={props.title}
      id={props.id}
      value={props.value}
      onChange={handleChange}
      className="dark:bg-neutral-800 max-w-80 dark:border-black dark:focus:border-neutral-600 min-h-20 focus:border-neutral-500 outline-none border-2 p-1 px-4 rounded-lg font-Poppins"
    />
  );
}

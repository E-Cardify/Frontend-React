import { EyeIcon, EyeOffIcon } from "@icons";
import { useState } from "react";

export default function Input(props: {
  wFull?: boolean;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  id?: string;
  title?: string;
  required?: boolean;
  type?: "password" | "text" | "email";
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative w-max">
      <input
        placeholder={props.placeholder || ""}
        type={showPassword ? "text" : props.type || "text"}
        required={props.required}
        title={props.title}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onClick={props.onClick}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        className={`dark:bg-neutral-800 ${
          props.wFull ? "w-full" : "max-w-80"
        } dark:border-black dark:focus:border-neutral-600 focus:border-neutral-500 pr-8 outline-none border-2 p-1 px-4 rounded-lg font-Poppins`}
      />
      {props.type == "password" && (
        <button
          title="Show password"
          className="absolute top-1/2 -translate-y-1/2 right-2"
        >
          <div
            className="w-5 h-5 text-neutral-500"
            onClick={() => {
              setShowPassword(!showPassword);
            }}
          >
            {showPassword ? <EyeIcon /> : <EyeOffIcon />}
          </div>
        </button>
      )}
    </div>
  );
}

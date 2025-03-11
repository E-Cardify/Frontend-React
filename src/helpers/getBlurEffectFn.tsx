import { Dispatch, SetStateAction } from "react";

export type GetEffectsFnType = (
  e: React.FocusEvent<HTMLInputElement>,
  fn?: Dispatch<SetStateAction<string>>
) => void;

const getBlurEffectFn: GetEffectsFnType = (e, fn) => {
  const inputElement = e.target as HTMLInputElement;
  if (inputElement.value === inputElement.placeholder) {
    if (fn) {
      fn("");
      return;
    }

    inputElement.value = "";
  }
};

const getFocusEffectFn: GetEffectsFnType = (e, fn) => {
  const inputElement = e.target as HTMLInputElement;
  if (inputElement.value === "") {
    if (fn) {
      fn(inputElement.placeholder);
      return;
    }

    inputElement.value = inputElement.placeholder;
  }
};

export { getBlurEffectFn, getFocusEffectFn };

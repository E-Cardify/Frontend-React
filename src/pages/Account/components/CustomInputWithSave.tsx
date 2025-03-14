import { getBlurEffectFn, getFocusEffectFn } from "@helpers/getBlurEffectFn";
import { Button, Group, PasswordInput, TextInput } from "@mantine/core";
import { useMutation } from "@tanstack/react-query";
import { ChangeEvent, FC, FormEvent, useMemo, useState } from "react";
import {
  updateUserData as updateUserDataFn,
  UpdateUserDataKeys,
  UpdateUserDataProps,
} from "../../../lib/api";
import queryClient from "../../../config/queryClient";
import { AUTH } from "@hooks/useAuth";
import { useTranslation } from "react-i18next";
import { defaultErrorMessage } from "../../../api/apiClient";

export type CustomInputWithSaveProps = {
  label: string;
  placeholder: string;
  objectKey: UpdateUserDataKeys;
  showSaveOptions?: false;
  showEffects?: false;
  type?: "password" | "text";
};

const CustomInputWithSave: FC<CustomInputWithSaveProps> = (props) => {
  const {
    label,
    placeholder,
    objectKey,
    showSaveOptions = true,
    showEffects = true,
    type = "text",
  } = props;
  const [inputValue, setInputValue] = useState<string>("");
  const [errorState, setErrorState] = useState<string>("");
  const { t } = useTranslation();

  const { mutate: updateUserData, isPending } = useMutation({
    mutationFn: updateUserDataFn,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [AUTH],
      });
      setInputValue("");
      setErrorState("");
    },
    onError: (err) => {
      setErrorState(err.message || defaultErrorMessage);
    },
  });

  const shouldUpdate = useMemo(() => {
    return Boolean(inputValue !== placeholder && inputValue);
  }, [inputValue, placeholder]);

  const onChangeHandlerFn = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value.replace(" ", ""));
    setErrorState("");
  };

  const submitHandlerFn = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorState("");

    if (shouldUpdate) {
      updateUserData({ [objectKey]: inputValue } as UpdateUserDataProps);
    }
  };

  const resetHandlerFn = () => {
    setInputValue("");
    setErrorState("");
  };

  return (
    <form onSubmit={submitHandlerFn}>
      <Group align="end" w="100%">
        {type === "text" && (
          <TextInput
            flex={1}
            error={t(errorState || "")}
            label={t(label)}
            placeholder={placeholder}
            value={inputValue}
            onChange={onChangeHandlerFn}
            onBlur={(e) => {
              if (!showEffects) return;
              getBlurEffectFn(e, setInputValue);
            }}
            onFocus={(e) => {
              if (!showEffects) return;
              getFocusEffectFn(e, setInputValue);
              setErrorState("");
            }}
          />
        )}

        {type === "password" && (
          <PasswordInput
            flex={1}
            error={t(errorState || "")}
            label={t(label)}
            placeholder={placeholder}
            value={inputValue}
            onChange={onChangeHandlerFn}
          />
        )}

        {shouldUpdate && showSaveOptions && (
          <Group>
            <Button variant="filled" type="submit" loading={isPending}>
              {t("Save")}
            </Button>

            <Button
              variant="filled"
              color="red"
              type="button"
              onClick={resetHandlerFn}
            >
              {t("Reset")}
            </Button>
          </Group>
        )}
      </Group>
    </form>
  );
};

export default CustomInputWithSave;

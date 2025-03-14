import Input from "@components/ui/Input";
import useAuth from "@hooks/useAuth";
import { Button, Divider, Stack, Title } from "@mantine/core";
import { useTranslation } from "react-i18next";
import CustomInputWithSave from "./CustomInputWithSave";
import { useMemo } from "react";
import { UpdateUserDataKeys, logout as logoutFn } from "../../../lib/api";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

interface FormFieldProps {
  id: string;
  label: string;
  type?: "text" | "email" | "password";
  placeholder?: string;
  useBlurFocusEffects?: boolean;
}

export const FormField = ({
  id,
  label,
  type = "text",
  placeholder,
  useBlurFocusEffects = false,
}: FormFieldProps) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col">
      <label
        className="font-Poppins font-semibold text-neutral-500"
        htmlFor={id}
      >
        {t(label)}:
      </label>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
          if (useBlurFocusEffects) {
            const inputElement = e.target as HTMLInputElement;
            if (inputElement.value === inputElement.placeholder) {
              inputElement.value = "";
            }
          }
        }}
        onFocus={(e: React.FocusEvent<HTMLInputElement>) => {
          if (useBlurFocusEffects) {
            const inputElement = e.target as HTMLInputElement;
            if (inputElement.value === "") {
              inputElement.value = inputElement.placeholder;
            }
          }
        }}
      />
    </div>
  );
};

export type InputInfoType = {
  label: string;
  placeholder: string;
  objectKey: UpdateUserDataKeys;
  type?: "password" | "text";
};

export default function PersonalTab() {
  const { user } = useAuth();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { mutate: logout, isPending } = useMutation({
    mutationFn: logoutFn,
    onSettled: () => {
      navigate("/login");
    },
  });

  const inputsInfo = useMemo<InputInfoType[]>(() => {
    return [
      {
        label: "First Name",
        placeholder: user.data.firstName,
        objectKey: "firstName",
      },
      {
        label: "Last Name",
        placeholder: user.data.lastName,
        objectKey: "lastName",
      },
      {
        label: "Email",
        placeholder: user.data.email,
        objectKey: "email",
      },
      {
        label: "Password",
        placeholder: "••••••••",
        objectKey: "password",
        type: "password",
      },
    ];
  }, [user.data.email, user.data.firstName, user.data.lastName]);

  return (
    <>
      <Title order={2}>{t("General")}</Title>
      <Divider size="xs" pb="20" />
      <Stack maw="500">
        {inputsInfo.map((inputInfo, index) => {
          const { label, placeholder, objectKey, type } = inputInfo;

          return (
            <CustomInputWithSave
              label={label}
              placeholder={placeholder}
              objectKey={objectKey}
              type={type}
              key={index}
            />
          );
        })}

        <Button
          w="max-content"
          color="red"
          loading={isPending}
          onClick={() => {
            logout();
          }}
        >
          {t("Logout")}
        </Button>
      </Stack>
    </>
  );
}

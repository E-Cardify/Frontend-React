import { Stack } from "@mantine/core";
import { updateUserData as updateUserDataFn } from "../../../lib/api";
import { useMutation } from "@tanstack/react-query";
import {
  UpdateProfileFormProvider,
  useUpdateProfileForm,
} from "../context/UpdateProfileContext";
import {
  emailValidator,
  namesValidator,
  passwordValidator,
} from "../../../lib/validators";
import { FormEvent } from "react";
import GeneralTextInput from "@components/Inputs/GeneralTextInput/GeneralTextInput";
import FormSubmitButton from "@components/Buttons/FormSubmitButton";
import { APIErrorResponse } from "../../../api/apiClient";
import useAuth, { AUTH } from "@hooks/useAuth";
import { notifications } from "@mantine/notifications";
import queryClient from "../../../config/queryClient";
import PasswordInputWithStrength from "@components/Inputs/PasswordInputWithStrength/PasswordInputWithStrength";
import getPasswordStrength from "@helpers/getPasswordStrength";
import TitleDivider from "@components/Typography/TitleDivider/TitleDivider";

export default function PersonalTab() {
  const { user } = useAuth();
  const form = useUpdateProfileForm({
    mode: "uncontrolled",
    validateInputOnBlur: true,
    onValuesChange: () => {
      form.clearErrors();
    },
    validate: {
      email: (v) => {
        if (!v) return;
        return emailValidator(v);
      },
      firstName: (v) => {
        if (!v) return;
        return namesValidator(v);
      },
      lastName: (v) => {
        if (!v) return;
        return namesValidator(v);
      },
      password: (v) => {
        if (!v) return;
        if (getPasswordStrength(v) < 100) {
          return "Password is not strong enough";
        }
        return passwordValidator(v);
      },
    },
  });

  const { mutate: updateUserData, isPending: isUpdating } = useMutation({
    mutationFn: updateUserDataFn,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [AUTH],
      });
      notifications.show({
        message: "Your profile has been updated",
      });
      form.reset();
    },
    onError: (err: APIErrorResponse) => {
      if (err.status === 500) {
        notifications.show({
          message: err.message,
          color: "red",
        });

        return;
      }

      form.setValues({
        password: "",
      });

      form.setErrors({
        email: err.message,
      });
    },
  });

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { hasErrors } = form.validate();
    if (hasErrors) return;

    const { email, lastName, firstName, password } = form.getValues();

    if (!email && !lastName && !firstName && !password) {
      return;
    }

    const dataToUpdate = {
      ...(email && { email }),
      ...(lastName && { lastName }),
      ...(firstName && { firstName }),
      ...(password && { password }),
    };

    updateUserData(dataToUpdate);
  };

  return (
    <UpdateProfileFormProvider form={form}>
      <form onSubmit={submitHandler}>
        <TitleDivider text="General" />
        <Stack maw="500">
          <GeneralTextInput
            key={form.key("firstName")}
            {...form.getInputProps("firstName")}
            placeholder={user.data.firstName}
            label="First name"
          />

          <GeneralTextInput
            key={form.key("lastName")}
            {...form.getInputProps("lastName")}
            placeholder={user.data.lastName}
            label="Last name"
          />

          <GeneralTextInput
            key={form.key("email")}
            {...form.getInputProps("email")}
            placeholder={user.data.email}
            label="Email address"
          />

          <PasswordInputWithStrength
            key={form.key("password")}
            {...form.getInputProps("password")}
            label="Password"
            placeholder="Your password"
          />

          <FormSubmitButton
            text="Update your profile"
            mt="sm"
            loading={isUpdating}
          />
        </Stack>
      </form>
    </UpdateProfileFormProvider>
  );
}

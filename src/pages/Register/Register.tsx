import { Anchor, Paper, Text } from "@mantine/core";
import { FormEvent } from "react";
import classes from "./Register.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { register } from "../../lib/api";
import { useTranslation } from "react-i18next";
import { passwordSchema } from "../../lib/schemas";
import { APIErrorResponse } from "../../api/apiClient";
import { notifications } from "@mantine/notifications";
import LoginWithOAuth from "@components/LoginWithOAuth/LoginWIthOAuth";
import {
  RegisterFormProvider,
  useRegisterForm,
} from "./Context/RegisterContext";
import getPasswordStrength from "@helpers/getPasswordStrength";
import PasswordInputWithStrength from "@components/Inputs/PasswordInputWithStrength/PasswordInputWithStrength";
import GeneralPasswordInput from "@components/Inputs/GeneralPasswordInput/GeneralPasswordInput";
import GeneralTextInput from "@components/Inputs/GeneralTextInput/GeneralTextInput";
import SignForm from "@components/Typography/SignForm/SignForm";
import FormSubmitButton from "@components/Buttons/FormSubmitButton";
import ChangeSignForm from "@components/Links/ChangeSignForm/ChangeSignForm";
import GeneralCheckbox from "@components/Inputs/GeneralCheckbox/GeneralCheckbox";
import { emailValidator, namesValidator } from "../../lib/validators";

const Register = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const form = useRegisterForm({
    validateInputOnBlur: true,
    mode: "uncontrolled",
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      repeatPassword: "",
      privacyPolicy: false,
    },

    onValuesChange(values, previous) {
      if (!values.password && !values.repeatPassword) {
        return;
      }

      if (values)
        if (
          previous.password === values.password &&
          previous.repeatPassword === values.repeatPassword
        )
          return;

      if (values.password === values.repeatPassword) {
        form.clearFieldError("password");
        form.clearFieldError("repeatPassword");
      }
    },

    validate: {
      email: emailValidator,
      firstName: namesValidator,
      lastName: namesValidator,

      repeatPassword: (value) => {
        if (!value) {
          return "Repeat password not provided";
        }

        if (value !== form.getValues().password) {
          return " ";
        }

        return null;
      },

      password: (value) => {
        if (getPasswordStrength(value) < 100) {
          return "Password is not strong enough";
        }

        if (value !== form.getValues().repeatPassword) {
          return "Passwords don't match";
        }

        const parsed = passwordSchema.safeParse(value);
        if (parsed.success) return null;
        return parsed.error.issues[0].message;
      },

      privacyPolicy: (value) =>
        !value ? "You must accept privacy policy" : null,
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: register,
    onSuccess: () => {
      notifications.show({
        message: t("Account has been created, now you can log in"),
      });
      navigate("/login");
    },
    onError: (error: APIErrorResponse) => {
      form.setValues({
        password: "",
        repeatPassword: "",
        privacyPolicy: false,
      });

      if (error.status === 500) {
        notifications.show({
          message: error.message,
          color: "red",
        });

        return;
      }

      form.setErrors({
        email: error.message,
      });
    },
  });

  const handleRegister = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password, firstName, lastName, privacyPolicy } =
      form.getValues();

    const { hasErrors } = form.validate();
    console.log(hasErrors);

    if (hasErrors) {
      return;
    }

    mutate({ email, password, firstName, lastName, privacyPolicy });
  };

  return (
    <RegisterFormProvider form={form}>
      <div className={classes.wrapper}>
        <Paper p={30} className={classes.registerForm}>
          <form onSubmit={handleRegister}>
            <SignForm text="Join Cardify and stay connected" ta="left" />

            <LoginWithOAuth />

            <GeneralTextInput
              key={form.key("firstName")}
              {...form.getInputProps("firstName")}
              placeholder="Your first name"
              label="First name"
              withAsterisk
            />

            <GeneralTextInput
              key={form.key("lastName")}
              {...form.getInputProps("lastName")}
              placeholder="Your last name"
              label="Last name"
              withAsterisk
            />

            <GeneralTextInput
              key={form.key("email")}
              {...form.getInputProps("email")}
              placeholder="Your email address"
              label="Email address"
              withAsterisk
            />

            <PasswordInputWithStrength
              key={form.key("password")}
              {...form.getInputProps("password")}
              label="Password"
              placeholder="Your password"
            />

            <GeneralPasswordInput
              key={form.key("repeatPassword")}
              {...form.getInputProps("repeatPassword")}
              label="Repeat password"
              placeholder="Repeat your password"
            />

            <GeneralCheckbox
              key={form.key("privacyPolicy")}
              {...form.getInputProps("privacyPolicy")}
              mt="xl"
              label={
                <Text>
                  {t("Accept")}{" "}
                  <Anchor component={Link} to="/terms" target="_blank">
                    {t("Terms")}
                  </Anchor>{" "}
                  {t("and")}{" "}
                  <Anchor component={Link} to="/privacy" target="_blank">
                    {t("Privacy Policy")}
                  </Anchor>
                </Text>
              }
            />

            <FormSubmitButton text="Register" loading={isPending} />

            <ChangeSignForm
              text="Have an account?"
              to="/login"
              linkText="Login"
            />
          </form>
        </Paper>
      </div>
    </RegisterFormProvider>
  );
};

export default Register;

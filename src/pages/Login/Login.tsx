import { Paper } from "@mantine/core";
import { FC, FormEvent } from "react";
import classes from "./Login.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../lib/api";
import { notifications } from "@mantine/notifications";
import { APIErrorResponse } from "../../api/apiClient";
import LoginWithOAuth from "@components/LoginWithOAuth/LoginWIthOAuth";
import { LoginFormProvider, useLoginForm } from "./context/LoginContext";
import GeneralTextInput from "@components/Inputs/GeneralTextInput/GeneralTextInput";
import GeneralPasswordInput from "@components/Inputs/GeneralPasswordInput/GeneralPasswordInput";
import GeneralCheckbox from "@components/Inputs/GeneralCheckbox/GeneralCheckbox";
import FormSubmitButton from "@components/Buttons/FormSubmitButton";
import ForgotPasswordLink from "@components/Links/ForgotPasswordLink/ForgotPasswordLink";
import ChangeSignForm from "@components/Links/ChangeSignForm/ChangeSignForm";
import SignForm from "@components/Typography/SignForm/SignForm";
import { emailValidator, passwordValidator } from "../../lib/validators";

const Login: FC = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const redirect = location.state?.redirect || "/";

  const form = useLoginForm({
    validateInputOnBlur: true,
    mode: "uncontrolled",
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },

    validate: {
      email: emailValidator,
      password: passwordValidator,
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: login,
    onSuccess: () => {
      navigate(redirect, {
        replace: true,
      });
    },
    onError: (error: APIErrorResponse) => {
      form.setValues({
        password: "",
        rememberMe: false,
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

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password, rememberMe } = form.getValues();
    const { hasErrors } = form.validate();

    if (hasErrors) {
      return;
    }

    mutate({ email, password, rememberMe });
  };

  return (
    <LoginFormProvider form={form}>
      <div className={classes.wrapper}>
        <Paper p={30} className={classes.loginForm}>
          <form onSubmit={handleLogin}>
            <SignForm text="Welcome back to Cardify" />
            <LoginWithOAuth />

            <GeneralTextInput
              key={form.key("email")}
              {...form.getInputProps("email")}
              placeholder="Your email address"
              label="Email address"
              withAsterisk
            />

            <GeneralPasswordInput
              key={form.key("password")}
              {...form.getInputProps("password")}
              placeholder="Your password"
              label="Password"
              withAsterisk
            />

            <GeneralCheckbox
              key={form.key("rememberMe")}
              {...form.getInputProps("rememberMe")}
              label="Remember me"
              mt="xl"
            />

            <FormSubmitButton text="Login" loading={isPending} />

            <ForgotPasswordLink />

            <ChangeSignForm
              text="Don't have an account?"
              to="/register"
              linkText="Register"
            />
          </form>
        </Paper>
      </div>
    </LoginFormProvider>
  );
};

export default Login;

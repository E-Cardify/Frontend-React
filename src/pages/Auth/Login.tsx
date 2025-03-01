import { useState } from "react";
import ButtonPrimary from "@components/ui/Buttons/ButtonPrimary";
import AuthHeader from "./components/AuthHeader";
import FormInput from "./components/FormInput";
import RememberMeRow from "./components/RememberMeRow";
import AuthLink from "./components/AuthLink";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../lib/api";
import { useLocation, useNavigate } from "react-router-dom";

export default function Login() {
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const redirect = location.state?.redirect || "/management";

  const { mutate, isPending, isError } = useMutation({
    mutationFn: login,
    onSuccess: () => {
      navigate(redirect, {
        replace: true,
      });
    },
  });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    mutate({ email, password });
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-neutral-800 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-neutral-900 p-8 rounded-lg shadow-lg w-full max-w-md">
        <AuthHeader title="Welcome back" />

        <form onSubmit={handleLogin} className="space-y-6">
          <FormInput
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="john@example.com"
            label="Email"
          />

          <FormInput
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            label="Password"
          />

          <RememberMeRow />

          <ButtonPrimary
            text="Sign in"
            isLoading={isPending}
            type="submit"
            className="w-full justify-center"
          />
          <p className="text-red-500 text-sm">
            {isError && "Invalid email or password."}
          </p>
        </form>

        <AuthLink
          text="Don't have an account?"
          linkText="Sign up"
          to="/register"
        />
      </div>
    </div>
  );
}

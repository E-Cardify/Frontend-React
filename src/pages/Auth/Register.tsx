import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import ButtonPrimary from "@components/ui/Buttons/ButtonPrimary";
import Input from "@components/ui/Input";
import { UserIcon } from "@icons";
import { useMutation } from "@tanstack/react-query";
import { register } from "../../lib/api";

export default function Register() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const navigate = useNavigate();

  const { mutate, isPending, isError } = useMutation({
    mutationFn: register,
    onSuccess: () => {
      navigate("/login", {
        replace: true,
      });
    },
  });

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return;
    }
    mutate({ email, password, firstName, lastName });
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-neutral-800 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-neutral-900 p-8 rounded-lg shadow-lg w-full max-w-md">
        {/* Logo and Title */}
        <div className="flex items-center justify-center mb-8 flex-col gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
            <div className="w-6 h-6 text-white">
              <UserIcon />
            </div>
          </div>
          <h1 className="text-2xl font-bold font-Poppins text-center dark:text-white">
            {t("Create your account")}
          </h1>
        </div>

        {/* Register Form */}
        <form onSubmit={handleRegister} className="space-y-6">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
            >
              {t("First Name")}
            </label>
            <Input
              id="firstName"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              placeholder={t("John")}
            />
          </div>

          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
            >
              {t("Last Name")}
            </label>
            <Input
              id="lastName"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              placeholder={t("Doe")}
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
            >
              {t("Email")}
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
            >
              {t("Password")}
            </label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="••••••••"
            />
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
            >
              {t("Confirm Password")}
            </label>
            <Input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              placeholder="••••••••"
            />
          </div>

          <div className="flex items-center">
            <input
              id="terms"
              type="checkbox"
              required
              className="rounded border-gray-300 text-green-500 focus:ring-green-500"
              aria-label={t("Accept Terms and Privacy Policy")}
            />
            <label
              htmlFor="terms"
              className="ml-2 text-sm text-neutral-600 dark:text-neutral-400"
            >
              {t("I agree to the")}{" "}
              <Link to="/terms" className="text-green-500 hover:text-green-600">
                {t("Terms")}
              </Link>{" "}
              {t("and")}{" "}
              <Link
                to="/privacy"
                className="text-green-500 hover:text-green-600"
              >
                {t("Privacy Policy")}
              </Link>
            </label>
          </div>

          <ButtonPrimary
            text={t("Create Account")}
            type="submit"
            className="w-full justify-center"
            isLoading={isPending}
          />
          <p className="text-red-500 text-sm">
            {isError && "Invalid email or password."}
          </p>
        </form>

        {/* Login Link */}
        <p className="mt-4 text-center text-sm text-neutral-600 dark:text-neutral-400">
          {t("Already have an account?")}{" "}
          <Link
            to="/login"
            className="font-medium text-green-500 hover:text-green-600"
          >
            {t("Sign in")}
          </Link>
        </p>
      </div>
    </div>
  );
}

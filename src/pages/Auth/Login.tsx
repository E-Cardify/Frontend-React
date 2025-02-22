import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ButtonPrimary from "@components/ui/Buttons/ButtonPrimary";
import { useAuth } from "../../services/auth/useAuth";
import AuthHeader from "./components/AuthHeader";
import FormInput from "./components/FormInput";
import RememberMeRow from "./components/RememberMeRow";
import AuthLink from "./components/AuthLink";
import LoadingScreen from "@components/ui/LoadingScreen";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isAuthenticated, isAuthChecking } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isAuthenticated && !isAuthChecking) {
      console.log("Authenticated, redirecting...");
      const from = location.state?.from?.pathname || "/management/dashboard";
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, isAuthChecking, navigate, location]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting login form...");
    login.mutate({ email, password });
  };

  if (isAuthChecking) {
    return <LoadingScreen message="Checking authentication..." />;
  }

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
            type="submit"
            className="w-full justify-center"
          />
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

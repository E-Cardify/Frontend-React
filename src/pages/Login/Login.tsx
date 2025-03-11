import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../lib/api";
import { useLocation, useNavigate, Link } from "react-router-dom";
import {
  Anchor,
  Button,
  Center,
  Checkbox,
  Paper,
  PasswordInput,
  Stack,
  TextInput,
  ThemeIcon,
  Title,
  Text,
  Group,
} from "@mantine/core";
import { useTranslation } from "react-i18next";
import { UserIcon } from "@icons";
import { emailRegex } from "../../utils/REGEX";

export default function Login() {
  const location = useLocation();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState<{
    message: string;
    input: string;
  }>();

  const redirect = location.state?.redirect || "/";

  const { mutate, isPending } = useMutation({
    mutationFn: login,
    onSuccess: () => {
      navigate(redirect, {
        replace: true,
      });
    },
    onError: (error) => {
      console.log(error);
      setError({ message: error.message, input: "general" });
    },
  });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!emailRegex.test(email)) {
      setError({ message: "You must input a valid email.", input: "email" });
      return;
    }

    if (password == "") {
      setError({
        message: "You must input a password.",
        input: "password",
      });
      return;
    }

    mutate({ email, password, rememberMe });
  };

  const { t } = useTranslation();

  return (
    <Center w="100%">
      <Paper shadow="lg" p="xl" radius="md">
        <Stack align="center" mb="xl">
          <ThemeIcon size="xl" radius="md" color="blue">
            <UserIcon />
          </ThemeIcon>

          <Title order={2} ta="center">
            {t("Login")}
          </Title>
        </Stack>

        <form onSubmit={handleLogin} className="space-y-6">
          <Stack>
            <TextInput
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError(undefined);
              }}
              placeholder="john@example.com"
              label="Email"
              withAsterisk
              error={error?.input === "email" && error?.message}
            />

            <PasswordInput
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(undefined);
              }}
              placeholder="••••••••"
              label="Password"
              withAsterisk
              error={error?.input === "password" && error?.message}
            />

            <Text size="sm" c="red">
              {error?.input === "general" && error?.message}
            </Text>

            <Checkbox
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              label="Remember me"
              size="sm"
            />

            <Stack gap="5">
              <Button
                variant="gradient"
                gradient={{ from: "blue", to: "cyan" }}
                loaderProps={{ type: "dots" }}
                loading={isPending}
                type="submit"
                className="w-full"
              >
                {t("Login")}
              </Button>
              <Anchor href="/forgot-password" size="xs">
                {t("Forgot password?")}
              </Anchor>
            </Stack>
          </Stack>
        </form>

        <Group c="dimmed" justify="center" gap="5" mt="lg">
          <Text size="xs">{t("Don't have an account?")}</Text>
          <Link to="/register">
            <Anchor size="xs">{t("Register")}</Anchor>
          </Link>
        </Group>
      </Paper>
    </Center>
  );
}

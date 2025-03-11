import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { UserIcon, CheckIcon, XIcon } from "@icons";
import { useMutation } from "@tanstack/react-query";
import { register } from "../../lib/api";
import {
  Paper,
  PasswordInput,
  Stack,
  TextInput,
  ThemeIcon,
  Title,
  Text,
  Box,
  Progress,
  Popover,
  Checkbox,
  Anchor,
  Button,
  Group,
} from "@mantine/core";
import { Center } from "@mantine/core";
import { ErrorResponse } from "../../api/apiClient";
import { emailRegex } from "../../utils/REGEX";

function PasswordRequirement({
  meets,
  label,
}: {
  meets: boolean;
  label: string;
}) {
  return (
    <Text
      c={meets ? "teal" : "red"}
      style={{ display: "flex", alignItems: "center" }}
      mt={7}
      size="sm"
    >
      {meets ? <CheckIcon size={14} /> : <XIcon size={14} />}
      <Box ml={10}>{label}</Box>
    </Text>
  );
}

const requirements = [
  { re: /[0-9]/, label: "Includes number" },
  { re: /[a-z]/, label: "Includes lowercase letter" },
  { re: /[A-Z]/, label: "Includes uppercase letter" },
  { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: "Includes special symbol" },
];

function getStrength(password: string) {
  let multiplier = password.length > 5 ? 0 : 1;

  requirements.forEach((requirement) => {
    if (!requirement.re.test(password)) {
      multiplier += 1;
    }
  });

  return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 10);
}

export default function Register() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [popoverOpened, setPopoverOpened] = useState(false);
  const [terms, setTerms] = useState(false);
  const checks = requirements.map((requirement, index) => (
    <PasswordRequirement
      key={index}
      label={requirement.label}
      meets={requirement.re.test(password)}
    />
  ));
  const navigate = useNavigate();

  const strength = getStrength(password);
  const color = strength === 100 ? "teal" : strength > 50 ? "yellow" : "red";

  const { mutate, isPending } = useMutation({
    mutationFn: register,
    onSuccess: () => {
      navigate("/login", {
        replace: true,
      });
    },
    onError: (error: ErrorResponse) => {
      setError({ message: error.message, input: "general" });
    },
  });

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (firstName === "") {
      setError({ message: "First name is required", input: "firstName" });
      return;
    }
    if (lastName === "") {
      setError({ message: "Last name is required", input: "lastName" });
      return;
    }
    if (email === "") {
      setError({ message: "Email is required", input: "email" });
      return;
    }
    if (!emailRegex.test(email)) {
      setError({ message: "Invalid email", input: "email" });
      return;
    }
    if (password !== confirmPassword) {
      setError({ message: "Passwords do not match", input: "confirmPassword" });
      return;
    }
    if (getStrength(password) < 100) {
      setError({
        message: "Password doesn't meet the requirements",
        input: "password",
      });
      return;
    }
    if (!terms) {
      setError({ message: "You must accept the terms", input: "terms" });
      return;
    }
    mutate({ email, password, firstName, lastName });
  };

  const [error, setError] = useState<{
    message: string;
    input: string;
  }>();

  return (
    <Center w="100%">
      <Paper shadow="lg" p="xl" radius="md">
        <Stack align="center" mb="xl">
          <ThemeIcon size="xl" radius="md" color="blue">
            <UserIcon />
          </ThemeIcon>

          <Title order={2} ta="center">
            {t("Register")}
          </Title>
        </Stack>

        {/* Register Form */}
        <form onSubmit={handleRegister} className="space-y-6">
          <Stack>
            <TextInput
              id="firstName"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
                setError(undefined);
              }}
              placeholder={t("John")}
              label={t("First Name")}
              withAsterisk
              error={error?.input === "firstName" && error?.message}
            />

            <TextInput
              id="lastName"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
                setError(undefined);
              }}
              placeholder={t("Doe")}
              label={t("Last Name")}
              withAsterisk
              error={error?.input === "lastName" && error?.message}
            />

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
            <Popover
              opened={popoverOpened}
              position="bottom"
              width="target"
              transitionProps={{ transition: "pop-top-left" }}
            >
              <Popover.Target>
                <div
                  onFocusCapture={() => setPopoverOpened(true)}
                  onBlurCapture={() => setPopoverOpened(false)}
                >
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
                </div>
              </Popover.Target>
              <Popover.Dropdown>
                <Progress color={color} value={strength} size={5} mb="xs" />
                <PasswordRequirement
                  label="Includes at least 6 characters"
                  meets={password.length > 5}
                />
                {checks}
              </Popover.Dropdown>
            </Popover>

            <PasswordInput
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => {
                setError(undefined);
                setConfirmPassword(e.target.value);
              }}
              placeholder="••••••••"
              label="Confirm Password"
              withAsterisk
              error={error?.input === "confirmPassword" && error?.message}
            />

            <Checkbox
              id="terms"
              label={
                <Text size="xs">
                  {t("Accept")}{" "}
                  <Link to="/terms" target="_blank">
                    <Anchor>{t("Terms")}</Anchor>
                  </Link>{" "}
                  {t("and")}{" "}
                  <Link to="/privacy" target="_blank">
                    <Anchor>{t("Privacy Policy")}</Anchor>
                  </Link>
                </Text>
              }
              onChange={() => {
                setError(undefined);
                setTerms(!terms);
              }}
              size="sm"
              error={error?.input === "terms" && error?.message}
            />

            <Text size="sm" c="red">
              {error?.input === "general" && error?.message}
            </Text>

            <Button
              variant="gradient"
              gradient={{ from: "blue", to: "cyan" }}
              loaderProps={{ type: "dots" }}
              loading={isPending}
              type="submit"
              className="w-full"
              onClick={handleRegister}
            >
              {t("Create Account")}
            </Button>
          </Stack>
        </form>

        <Group c="dimmed" justify="center" gap="5" mt="lg">
          <Text size="xs">{t("Already have an account?")}</Text>
          <Link to="/login">
            <Anchor size="xs">{t("Login")}</Anchor>
          </Link>
        </Group>
      </Paper>
    </Center>
  );
}

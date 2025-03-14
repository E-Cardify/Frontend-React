import { useTranslation } from "react-i18next";
// import queryClient from "../../../config/queryClient";
// import { useNavigate } from "react-router-dom";
// import { useMutation } from "@tanstack/react-query";
import useAuth from "@hooks/useAuth";
// import { logout as logoutFn } from "../../../lib/api";
import { Avatar, Group, Stack, Text, Title, Tooltip } from "@mantine/core";
// import ButtonPrimary from "@components/ui/Buttons/ButtonPrimary";
// import ButtonRectangle from "@components/ui/Buttons/ButtonRectangle";

export default function ProfileHeader() {
  const { t } = useTranslation();

  // const navigate = useNavigate();

  const { user } = useAuth();

  // const { mutate: logout } = useMutation({
  //   mutationFn: logoutFn,
  //   onSuccess: () => {
  //     queryClient.clear();
  //     navigate("/login", { replace: true });
  //   },
  //   onError: (error) => {
  //     console.log(error);
  //     queryClient.clear();
  //     navigate("/login", { replace: true });
  //   },
  // });

  return (
    <Group>
      <Tooltip label={t("Your profile picture")} openDelay={750}>
        <Avatar name={user.data.firstName + user.data.lastName} size={100} />
      </Tooltip>

      <Stack gap="0">
        <Title order={1}>
          {user.data.firstName} {user.data.lastName}
        </Title>
        <Text size="sm" c="dimmed">
          {user.data.email}
        </Text>
      </Stack>

      {/* <div className="flex-1">
        <h2 className="font-Poppins font-bold text-2xl dark:text-white">
          {user.data.firstName} {user.data.lastName}
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400">
          {user.data.email}
        </p>
        <div className="flex gap-2 mt-3">
          <ButtonPrimary text={t("Edit Profile")} />
          <ButtonRectangle
            text={t("Logout")}
            onClick={logout}
            className="bg-red-500 border-red-500 text-white hover:text-white hover:bg-red-600 hover:border-red-600"
          />
        </div>
      </div> */}
    </Group>
  );
}

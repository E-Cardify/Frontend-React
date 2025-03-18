import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { logout as logoutFn } from "../../lib/api";
import { Button, ButtonProps } from "@mantine/core";
import { useTranslation } from "react-i18next";

const LogoutButton = (props: ButtonProps) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { mutate: logout, isPending } = useMutation({
    mutationFn: logoutFn,
    onSettled: () => {
      navigate("/login");
    },
  });

  return (
    <Button
      w="max-content"
      color="red"
      loading={isPending}
      onClick={() => {
        logout();
      }}
      {...props}
    >
      {t("Logout")}
    </Button>
  );
};

export default LogoutButton;

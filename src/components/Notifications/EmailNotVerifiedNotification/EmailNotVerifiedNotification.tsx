import { Alert } from "@mantine/core";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const EmailNotVerifiedNotification = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      {isVisible && (
        <Alert
          variant="light"
          color="yellow"
          title="Email Verification Required"
          mb="30"
          withCloseButton
          onClose={() => {
            setIsVisible(false);
          }}
        >
          {t(
            "Check your email and please verify your email to access all features."
          )}
        </Alert>
      )}
    </>
  );
};

export default EmailNotVerifiedNotification;

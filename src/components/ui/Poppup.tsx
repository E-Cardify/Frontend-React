import { XIcon } from "@icons";
import { useModal } from "@contexts/useModelContext";
import { Notification } from "@mantine/core";

export default function Poppup() {
  const { modalContent, isModalVisible, hideModal, modalSecondaryText, isOk } =
    useModal();

  return (
    isModalVisible && (
      <div className="fixed top-5 right-5 z-50">
        <Notification
          icon={<XIcon />}
          color={isOk ? "green" : "red"}
          title={modalContent}
          onClick={hideModal}
        >
          {modalSecondaryText}
        </Notification>
      </div>
    )
  );
}

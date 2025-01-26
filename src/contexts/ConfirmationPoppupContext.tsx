import React, { createContext, useState, ReactNode } from "react";

export interface ConfirmationPoppupContextType {
  showModal: (
    content: string,
    text: string,
    onConfirm?: () => void,
    hideAfter?: number
  ) => void;
  hideModal: () => void;
  modalContent: string | null;
  modalSecondaryText: string | null;
  isModalVisible: boolean;
  hidePoppupAnimation: boolean;
  onConfirm: (() => void) | null;
}

const ConfirmationPoppupContext = createContext<
  ConfirmationPoppupContextType | undefined
>(undefined);

const ConfirmationPoppupProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [modalContent, setModalContent] = useState<string | null>(null);
  const [modalSecondaryText, setModalSecondaryText] = useState<string | null>(
    null
  );
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [hidePoppupAnimation, setHidePoppupAnimation] = useState(false);
  const [onConfirm, setOnConfirm] = useState<(() => void) | null>(null);

  const hideModal = () => {
    setHidePoppupAnimation(true);

    // setTimeout(() => {
    //   setIsModalVisible(false);
    //   setModalContent(null);
    //   setModalSecondaryText(null);
    // }, 450);

    setIsModalVisible(false);
    setModalContent(null);
    setModalSecondaryText(null);
    setOnConfirm(null);
  };

  const showModal = (
    content: string,
    text: string,
    onConfirm?: () => void,
    hideAfter?: number
  ) => {
    setModalContent(content);
    setModalSecondaryText(text);
    setIsModalVisible(true);
    setHidePoppupAnimation(false);
    setOnConfirm(() => onConfirm);

    if (hideAfter) {
      setTimeout(() => {
        hideModal();
      }, hideAfter);
    }
  };

  return (
    <ConfirmationPoppupContext.Provider
      value={{
        hidePoppupAnimation,
        showModal,
        hideModal,
        modalContent,
        isModalVisible,
        modalSecondaryText,
        onConfirm,
      }}
    >
      {children}
    </ConfirmationPoppupContext.Provider>
  );
};

export { ConfirmationPoppupContext, ConfirmationPoppupProvider };

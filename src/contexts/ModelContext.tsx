import React, { createContext, useState, ReactNode } from "react";

export interface ModalContextType {
  showModal: (content: string, text: string, hideAfter?: number) => void;
  hideModal: () => void;
  modalContent: string | null;
  modalSecondaryText: string | null;
  isModalVisible: boolean;
  hidePoppupAnimation: boolean;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [modalContent, setModalContent] = useState<string | null>(null);
  const [modalSecondaryText, setModalSecondaryText] = useState<string | null>(
    null
  );
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [hidePoppupAnimation, setHidePoppupAnimation] = useState(false);

  const hideModal = () => {
    setHidePoppupAnimation(true);

    setTimeout(() => {
      setIsModalVisible(false);
      setModalContent(null);
      setModalSecondaryText(null);
    }, 450);
  };

  const showModal = (content: string, text: string, hideAfter?: number) => {
    setModalContent(content);
    setModalSecondaryText(text);
    setIsModalVisible(true);
    setHidePoppupAnimation(false);

    if (hideAfter) {
      setTimeout(() => {
        hideModal();
      }, hideAfter);
    }
  };

  return (
    <ModalContext.Provider
      value={{
        hidePoppupAnimation,
        showModal,
        hideModal,
        modalContent,
        isModalVisible,
        modalSecondaryText,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };

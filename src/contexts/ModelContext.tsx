import React, { createContext, useState, ReactNode, useRef } from "react";

export interface ModalContextType {
  showModal: (
    content: string,
    text: string,
    hideAfter?: number,
    isOk?: boolean
  ) => void;
  hideModal: () => void;
  modalContent: string | null;
  modalSecondaryText: string | null;
  isModalVisible: boolean;
  hidePoppupAnimation: boolean;
  isOk: boolean | undefined;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [modalContent, setModalContent] = useState<string | null>(null);
  const [modalSecondaryText, setModalSecondaryText] = useState<string | null>(
    null
  );
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [hidePoppupAnimation, setHidePoppupAnimation] = useState(false);
  const [isOk, setIsOk] = useState<boolean | undefined>(true);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const animationTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const hideModal = () => {
    setHidePoppupAnimation(true);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    animationTimeoutRef.current = setTimeout(() => {
      setIsModalVisible(false);
      setModalContent(null);
      setModalSecondaryText(null);
      setIsOk(true);

      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current);
        animationTimeoutRef.current = null;
      }
    }, 450);
  };

  const showModal = (
    content: string,
    text: string,
    hideAfter?: number,
    isOk?: boolean
  ) => {
    setModalContent(content);
    setModalSecondaryText(text);
    setIsModalVisible(true);
    setHidePoppupAnimation(false);
    if (isOk == false) {
      setIsOk(isOk);
    }

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (hideAfter) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      if (hideAfter) {
        timeoutRef.current = setTimeout(() => {
          hideModal();
        }, hideAfter);
      }
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
        isOk,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };

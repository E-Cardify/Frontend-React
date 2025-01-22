import useCardCreationTabContext from "@contexts/useCardCreationTabContext";
import { RotateIcon } from "@icons";
import { SaveIcon } from "@icons";
import { CheckIcon } from "@icons";
import { XIcon } from "@icons";
import { useState } from "react";
// import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { getDefaultCardInterfaceObject } from "@interfaces/CardInfoInterface";
import ButtonRectangle from "@components/ui/Buttons/ButtonRectangle";

export function SaveResetCardCustomizer() {
  const { t } = useTranslation();
  const { cardInfo, setCardInfo } =
    useCardCreationTabContext();
  const [showPoppup, setShowPoppup] =
    useState(false);
  const [
    hidePoppupAnimation,
    setHidePoppupAnimation,
  ] = useState(false);

  const [
    showResetPoppup,
    setShowResetPoppup,
  ] = useState(false);

  const handleCardInfoSave = () => {
    localStorage.setItem(
      "cardInfo",
      JSON.stringify(cardInfo)
    );

    setHidePoppupAnimation(false);
    setShowPoppup(true);

    setTimeout(() => {
      setHidePoppupAnimation(true);

      setTimeout(() => {
        setShowPoppup(false);
        setHidePoppupAnimation(false);
      }, 450);
    }, 3000);
  };

  const handleCardInfoReset = () => {
    // console.log("Card info resetting");
    // console.log("Default card interface: ");
    // console.log(defaultCardInterfaceObject);
    localStorage.setItem(
      "cardInfo",
      JSON.stringify(
        getDefaultCardInterfaceObject()
      )
    );

    setCardInfo(
      getDefaultCardInterfaceObject()
    );
    setShowResetPoppup(false);
  };

  // useEffect(() => {
  //     console.log(cardInfo)
  // }, [setCardInfo, cardInfo])

  const handleHidePoppup = () => {
    setHidePoppupAnimation(true);

    setTimeout(() => {
      setShowPoppup(false);
      setHidePoppupAnimation(false);
    }, 450);
  };

  return (
    <>
      {showResetPoppup && (
        <div className="fixed inset-0">
          <div className="relative w-full h-full flex justify-center items-center">
            <div className="absolute inset-0 bg-black/50 -z-10" />
            <div className="flex flex-col dark:bg-neutral-800 dark:border-black bg-white py-6 px-8 rounded-lg shadow border-2">
              <div className="w-11 h-11 bg-red-200 text-red-500 rounded-lg p-1.5 flex justify-center items-center">
                <RotateIcon />
              </div>
              <h1 className="text-lg font-Poppins font-bold pt-3">
                {t(
                  "Are you sure you want to reset"
                )}
                ?
              </h1>
              <p className="font-Poppins text-sm text-neutral-700 dark:text-neutral-400">
                {t(
                  "Your data will be deleted and this can't be undone"
                )}
                .
              </p>

              <div className="flex justify-end gap-2 pt-8">
                <ButtonRectangle
                  onClick={() =>
                    setShowResetPoppup(
                      false
                    )
                  }
                  text="Cancel"
                  className="font-normal text-sm rounded-md"
                />
                <ButtonRectangle
                  onClick={
                    handleCardInfoReset
                  }
                  primary={true}
                  className="font-normal text-sm rounded-md bg-red-500 border-red-500 shadow-none"
                  text="Reset"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {showPoppup && (
        <div
          className={`fixed top-5 right-5 text-black bg-green-200 border-green-300 border-2 flex items-center gap-3 py-2.5 px-3 rounded-lg shadow-xl ${
            hidePoppupAnimation
              ? "animate-fade-left-reverse"
              : "animate-fade-left"
          }`}
        >
          <div className="w-8 h-8 bg-green-500 text-white rounded-full p-1">
            <CheckIcon />
          </div>
          <div>
            <h1 className="font-bold font-Poppins">
              {t("Success")}!
            </h1>
            <p className="font-Montserrat text-sm text-neutral-800">
              {t(
                "Card has been saved successfully"
              )}
              .
            </p>
          </div>
          <div
            className="w-5 h-5 hover:cursor-pointer text-neutral-700 hover:text-neutral-950"
            onClick={handleHidePoppup}
          >
            <XIcon />
          </div>
        </div>
      )}

      <div className="pt-2 flex items-center gap-2 flex-row-reverse">
        <ButtonRectangle
          onClick={() => {
            setShowResetPoppup(true);
          }}
          icon={<RotateIcon />}
          text="Reset"
        />
        <ButtonRectangle
          primary={true}
          onClick={handleCardInfoSave}
          icon={<SaveIcon />}
          text="Save"
        />
      </div>
    </>
  );
}

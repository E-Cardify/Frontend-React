import QRCode from "react-qr-code";
import CardContainer from "../../../features/CardContainer";

export default function QrCodeCard(props: {
  handleShowQrCodePreview: () => void;
}) {
  return (
    <CardContainer>
      <div
        onClick={
          props.handleShowQrCodePreview
        }
        className="overflow-hidden rounded-md relative flex gap-1 dark:border-black dark:to-neutral-950 dark:from-neutral-950 bg-white dark:bg-neutral-900 dark:text-white text-black cursor-pointer p-1 justify-center m-2 aspect-square"
      >
        <QRCode
          value="H"
          className="w-20 h-20"
        />
      </div>
    </CardContainer>
  );
}

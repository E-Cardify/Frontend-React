import QRCode from "react-qr-code";

export default function QrCodeCard(props: { value?: string | undefined }) {
  return (
    <QRCode
      value={`http://192.168.1.112:3000/card/${props.value}`}
      className="h-full w-full"
    />
  );
}

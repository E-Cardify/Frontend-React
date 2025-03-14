export default function Arrow(props: {
  width?: string;
  height?: string;
  rotate?: string;
}) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      style={{
        rotate: props.rotate,
      }}
      width={props.width || "1em"}
      height={props.height || "1em"}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="7" x2="17" y1="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

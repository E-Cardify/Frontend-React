export default function CreditCard({ size }: { size?: number }) {
  const newSize = (size && size * 2) || 24;

  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width={`${size && newSize}px`}
      height={`${size && newSize}px`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect height="16" rx="2" ry="2" width="22" x="1" y="4" />
      <line x1="1" x2="23" y1="10" y2="10" />
    </svg>
  );
}

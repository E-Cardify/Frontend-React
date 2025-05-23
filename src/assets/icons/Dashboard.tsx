export default function Dashboard({ size }: { size?: number }) {
  const newSize = (size && size * 2) || 24;

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      width={`${size && newSize}px`}
      height={`${size && newSize}px`}
      strokeWidth="1.25"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8v-10h-8v10zm0-18v6h8V3h-8z" />
    </svg>
  );
}

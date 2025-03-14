export default function Check({ size }: { size?: number }) {
  const newSize = (size && size * 1.5) || 14;

  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      width={size && `${newSize}px`}
      height={size && `${newSize}px`}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

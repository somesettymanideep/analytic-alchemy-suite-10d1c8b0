/**
 * "AI" processor-chip icon — drop-in replacement for Phosphor icons where
 * AI capabilities are highlighted. Accepts the same size/className props.
 */
export default function AiChipIcon({
  size = 24,
  className,
}: {
  size?: number | string;
  className?: string;
  /** accepted for Phosphor API compatibility; rendering is single-weight */
  weight?: string;
  color?: string;
}) {
  const pins = [9, 12, 15];
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="6.4" y="6.4" width="11.2" height="11.2" rx="2.2" />
      {pins.map((p) => (
        <g key={p}>
          {/* top / bottom pins */}
          <line x1={p} y1="6.4" x2={p} y2="4" />
          <circle cx={p} cy="3" r="0.95" />
          <line x1={p} y1="17.6" x2={p} y2="20" />
          <circle cx={p} cy="21" r="0.95" />
          {/* left / right pins */}
          <line x1="6.4" y1={p} x2="4" y2={p} />
          <circle cx="3" cy={p} r="0.95" />
          <line x1="17.6" y1={p} x2="20" y2={p} />
          <circle cx="21" cy={p} r="0.95" />
        </g>
      ))}
      <text
        x="12"
        y="14.4"
        textAnchor="middle"
        fontSize="6.4"
        fontWeight="700"
        fontFamily="inherit"
        fill="currentColor"
        stroke="none"
      >
        AI
      </text>
    </svg>
  );
}

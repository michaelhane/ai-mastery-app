export function ProgressBar({ percentage, size = 'md' }) {
  const heights = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3'
  };

  return (
    <div className={`progress-bar ${heights[size]}`}>
      <div
        className="progress-fill"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}

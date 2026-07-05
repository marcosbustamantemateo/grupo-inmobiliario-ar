import { useScrollProgress } from "../../hooks/useScrollProgress";

export function ScrollProgressBar() {
  const percent = useScrollProgress();

  return (
    <div className="scroll-progress-track">
      <div className="scroll-progress-fill" style={{ width: `${percent}%` }} />
    </div>
  );
}

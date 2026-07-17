import { cn } from "../../lib/cn";

export function Card({ children, className }) {
  return (
    <div
      className={cn(
        "rounded-xl border border-gray-200 bg-white shadow-sm p-6",
        className,
      )}
    >
      {children}
    </div>
  );
}

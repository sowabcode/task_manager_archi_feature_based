import { forwardRef } from "react";
import { cn } from "../../lib/cn";

export const Textarea = forwardRef(
  ({ label, error, required = false, className, ...props }, ref) => {
    return (
      <div className="space-y-1">
        {label && (
          <label className="block text-sm font-medium">
            {label}

            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}

        <textarea
          ref={ref}
          className={cn(
            "w-full rounded-lg border px-3 py-2 min-h-32 outline-none",
            "focus:ring-2 focus:ring-blue-500",
            error ? "border-red-500" : "border-gray-300",
            className,
          )}
          {...props}
        />

        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    );
  },
);

Textarea.displayName = "Textarea";

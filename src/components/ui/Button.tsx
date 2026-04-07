import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";

}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-150 disabled:opacity-50",
        variant === "primary" && "bg-brand-600 text-white hover:bg-brand-800",
        variant === "outline" && "border border-neutral-200 text-neutral-700 hover:bg-neutral-50",
        variant === "ghost"   && "text-neutral-600 hover:bg-neutral-100",
        size === "sm" && "text-xs px-3 py-1.5",
        size === "md" && "text-sm px-4 py-2",
        size === "lg" && "text-base px-6 py-3",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
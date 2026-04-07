import { cn } from "@/lib/utils";

interface BadgeProps {
  label: string;
  variant?: "default" | "brand" | "success" | "dark";
  className?: string;
}

export function Badge({ label, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block text-[11px] font-medium px-2 py-0.5 rounded-full",
        variant === "default" && "bg-neutral-100 text-neutral-600",
        variant === "brand"   && "bg-brand-50 text-brand-800",
        variant === "success" && "bg-emerald-50 text-emerald-700",
        variant === "dark"    && "bg-neutral-800 text-neutral-200",
        className
      )}
    >
      {label}
    </span>
  );
}   
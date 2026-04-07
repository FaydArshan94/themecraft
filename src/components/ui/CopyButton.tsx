"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface CopyButtonProps {
  text: string;
  label?: string;
  className?: string;
}

export function CopyButton({ text, label = "Copy", className }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className={cn(
        "inline-flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-lg border transition-all duration-150",
        copied
          ? "border-emerald-200 bg-emerald-50 text-emerald-700"
          : "border-neutral-200 text-neutral-600 hover:bg-neutral-50",
        className
      )}
    >
      {copied ? (
        <><Check size={14} /> Copied</>
      ) : (
        <><Copy size={14} /> {label}</>
      )}
    </button>
  );
}
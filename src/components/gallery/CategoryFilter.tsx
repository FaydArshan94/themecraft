"use client";

import { CATEGORIES } from "@/constants/defaultstyles";
import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  active: string;
  onChange: (category: string) => void;
}

export function CategoryFilter({ active, onChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {CATEGORIES.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onChange(cat.id)}
          className={cn(
            "text-sm px-4 py-1.5 rounded-full border transition-all duration-150",
            active === cat.id
              ? "bg-brand-600 text-white border-brand-600"
              : "bg-white text-neutral-600 border-neutral-200 hover:border-brand-300 hover:text-brand-600"
          )}
        >
          {cat.label}
          <span
            className={cn(
              "ml-1.5 text-xs",
              active === cat.id ? "text-brand-200" : "text-neutral-400"
            )}
          >
            {cat.count}
          </span>
        </button>
      ))}
    </div>
  );
}
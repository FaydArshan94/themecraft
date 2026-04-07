"use client";

import { useState } from "react";
import { DesignStyle } from "@/types/styles";
import { StyleCard } from "./StyleCard";
import { CategoryFilter } from "./CategoryFilter";
import { getStylesByCategory } from "@/constants/defaultstyles";

interface StyleGridProps {
  styles: DesignStyle[];
}

export function StyleGrid({ styles }: StyleGridProps) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? styles
      : styles.filter((s) => s.category === activeCategory);

  return (
    <div>
      <CategoryFilter
        active={activeCategory}
        onChange={setActiveCategory}
      />

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((style) => (
          <StyleCard key={style.id} style={style} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mt-16 text-center text-neutral-400 text-sm">
          No styles in this category yet.
        </div>
      )}
    </div>
  );
}
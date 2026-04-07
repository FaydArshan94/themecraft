import stylesData from "@/data/styles.json";
import categoriesData from "@/data/categories.json";
import { DesignStyle } from "@/types/styles";

export const ALL_STYLES: DesignStyle[] = stylesData as DesignStyle[];

export const FEATURED_STYLES: DesignStyle[] = ALL_STYLES.filter(
  (s) => s.featured
);

export const CATEGORIES = categoriesData;

export function getStyleById(id: string): DesignStyle | undefined {
  return ALL_STYLES.find((s) => s.id === id);
}

export function getStylesByCategory(category: string): DesignStyle[] {
  if (category === "all") return ALL_STYLES;
  return ALL_STYLES.filter((s) => s.category === category);
}
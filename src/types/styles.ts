export type StyleCategory =
  | "minimal"
  | "bold"
  | "dark"
  | "retro"
  | "playful"
  | "corporate";

export interface CSSVars {
  // Colors
  colorPrimary: string;
  colorSecondary: string;
  colorAccent: string;
  colorBackground: string;
  colorSurface: string;
  colorText: string;
  colorTextMuted: string;
  colorBorder: string;

  // Typography
  fontHeading: string;
  fontBody: string;
  fontMono: string;
  fontSizeBase: string;
  fontSizeHeading: string;
  fontWeightHeading: string;
  lineHeight: string;
  letterSpacing: string;

  // Shape
  borderRadius: string;
  borderWidth: string;

  // Spacing
  spacingUnit: string;

  // Shadows
  shadow: string;
}

export interface DesignStyle {
  id: string;
  name: string;
  description: string;
  category: StyleCategory;
  tags: string[];
  cssVars: CSSVars;
  prompt: string;
  previewImage?: string;
  featured?: boolean;
}
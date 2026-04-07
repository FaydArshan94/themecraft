import { ALL_STYLES } from "@/constants/defaultstyles";
import { StyleGrid } from "@/components/gallery/StyleGrid";
import { Layers } from "lucide-react";

export const metadata = {
  title: "Browse styles — Themecraft",
  description:
    "Explore 15+ design styles. Copy the AI prompt or customize it visually and export the code.",
};

export default function GalleryPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12">

      {/* Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 text-xs font-medium text-brand-600 bg-brand-50 px-3 py-1 rounded-full mb-4">
          <Layers size={12} />
          {ALL_STYLES.length} design styles
        </div>
        <h1 className="text-3xl font-semibold text-neutral-900 tracking-tight">
          Browse styles
        </h1>
        <p className="mt-2 text-neutral-500 max-w-xl">
          Pick a style, copy the AI prompt, or open the visual editor to make
          it yours — then export clean CSS or deploy directly.
        </p>
      </div>

      {/* Grid with filters */}
      <StyleGrid styles={ALL_STYLES} />

    </main>
  );
}
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DesignStyle } from "@/types/styles";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

interface StyleCardProps {
  style: DesignStyle;
}

export function StyleCard({ style }: StyleCardProps) {
  const vars = style.cssVars;

  return (
    <Link href={`/editor/${style.id}`} className="group block">
      <div className="border border-neutral-100 rounded-xl overflow-hidden hover:border-brand-200 hover:shadow-sm transition-all duration-200">

        {/* Preview swatch — built from actual CSS vars */}
        <div
          className="h-44 w-full relative p-4 flex flex-col justify-between"
          style={{ backgroundColor: vars.colorBackground }}
        >
          {/* Mock navbar */}
          <div className="flex items-center justify-between">
            <div
              className="h-2 w-16 rounded-full"
              style={{ backgroundColor: vars.colorPrimary, opacity: 0.9 }}
            />
            <div className="flex gap-1.5">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-1.5 rounded-full"
                  style={{
                    width: i === 1 ? 20 : i === 2 ? 28 : 16,
                    backgroundColor: vars.colorTextMuted,
                    opacity: 0.5,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Mock hero content */}
          <div className="flex flex-col gap-2">
            <div
              className="h-3 rounded-full"
              style={{
                width: "75%",
                backgroundColor: vars.colorText,
                opacity: 0.85,
                borderRadius: vars.borderRadius === "0px" ? "0" : "999px",
              }}
            />
            <div
              className="h-2 rounded-full"
              style={{
                width: "55%",
                backgroundColor: vars.colorTextMuted,
                opacity: 0.5,
                borderRadius: vars.borderRadius === "0px" ? "0" : "999px",
              }}
            />
            <div className="flex gap-2 mt-1">
              <div
                className="h-6 w-20 rounded flex items-center justify-center"
                style={{
                  backgroundColor: vars.colorPrimary,
                  borderRadius: vars.borderRadius === "0px"
                    ? "0"
                    : vars.borderRadius === "24px"
                    ? "12px"
                    : "6px",
                  boxShadow: vars.shadow !== "none" ? vars.shadow : undefined,
                }}
              >
                <div className="h-1.5 w-10 rounded-full bg-white opacity-90" />
              </div>
              <div
                className="h-6 w-20 rounded"
                style={{
                  border: `${vars.borderWidth} solid ${vars.colorBorder}`,
                  borderRadius: vars.borderRadius === "0px"
                    ? "0"
                    : vars.borderRadius === "24px"
                    ? "12px"
                    : "6px",
                }}
              />
            </div>
          </div>

          {/* Featured dot */}
          {style.featured && (
            <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-brand-600" />
          )}
        </div>

        {/* Card footer */}
        <div className="p-4 bg-white flex items-start justify-between gap-2">
          <div>
            <p className="text-sm font-medium text-neutral-900">{style.name}</p>
            <p className="text-xs text-neutral-400 mt-0.5 line-clamp-1">
              {style.description}
            </p>
            <div className="flex flex-wrap gap-1 mt-2">
              <Badge label={style.category} variant="brand" />
              {style.tags.slice(0, 2).map((tag) => (
                <Badge key={tag} label={tag} variant="default" />
              ))}
            </div>
          </div>
          <ArrowRight
            size={16}
            className="text-neutral-300 group-hover:text-brand-600 group-hover:translate-x-0.5 transition-all mt-1 shrink"
          />
        </div>

      </div>
    </Link>
  );
}
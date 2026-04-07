import Link from "next/link";
import { Layers } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-100 bg-white/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">

        <Link href="/" className="flex items-center gap-2 font-medium text-neutral-900">
          <div className="w-7 h-7 rounded-md bg-brand-800 flex items-center justify-center">
            <Layers size={14} className="text-white" />
          </div>
          <span>
            Theme<span className="text-brand-600">craft</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-500">
          <Link href="/gallery" className="hover:text-neutral-900 transition-colors">
            Styles
          </Link>
          
            <a href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-900 transition-colors"
          >
            GitHub
          </a>
        </nav>

         <div className="flex items-center gap-2">
          <Link
            href="/gallery"
            className="text-sm font-medium px-3 py-1.5 rounded-lg border border-neutral-200 text-neutral-700 hover:bg-neutral-50 transition-all"
          >
            Browse styles
          </Link>
        </div>s

      </div>
    </header>
  );
}
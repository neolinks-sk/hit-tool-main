import { ArrowLeft, Wrench } from "lucide-react";
import Link from "next/link";
import { SITE_CONFIG } from "../lib/site-config";

export default function SubPageHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2.5 transition-opacity hover:opacity-80"
          aria-label="HITtools トップページへ"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
            <Wrench className="h-5 w-5" aria-hidden="true" />
          </div>
          <span className="text-lg font-bold tracking-tight text-slate-800">
            {SITE_CONFIG.name}
          </span>
        </Link>

        <Link
          href="/"
          className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3.5 py-1.5 text-sm font-medium text-slate-600 transition-colors hover:border-indigo-200 hover:bg-indigo-50/50 hover:text-indigo-600 shadow-sm"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          <span>トップページへ戻る</span>
        </Link>
      </div>
    </header>
  );
}

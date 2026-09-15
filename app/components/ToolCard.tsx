import { ArrowUpRight, Sparkles } from "lucide-react";
import type { Tool, ToolColor } from "../data/tools";

type ToolCardProps = {
  tool: Tool;
};

const COLOR_STYLES: Record<
  ToolColor,
  {
    iconBg: string;
    iconHoverBg: string;
    iconText: string;
    badgeBg: string;
    badgeText: string;
    badgeBorder: string;
    borderHover: string;
    shadowHover: string;
    arrowHover: string;
  }
> = {
  orange: {
    iconBg: "bg-orange-50",
    iconHoverBg: "group-hover:bg-orange-100",
    iconText: "text-orange-600",
    badgeBg: "bg-orange-50/80",
    badgeText: "text-orange-700",
    badgeBorder: "border-orange-200/70",
    borderHover: "hover:border-orange-300",
    shadowHover: "hover:shadow-orange-100/60",
    arrowHover: "group-hover:text-orange-600",
  },
  green: {
    iconBg: "bg-emerald-50",
    iconHoverBg: "group-hover:bg-emerald-100",
    iconText: "text-emerald-600",
    badgeBg: "bg-emerald-50/80",
    badgeText: "text-emerald-700",
    badgeBorder: "border-emerald-200/70",
    borderHover: "hover:border-emerald-300",
    shadowHover: "hover:shadow-emerald-100/60",
    arrowHover: "group-hover:text-emerald-600",
  },
  blue: {
    iconBg: "bg-sky-50",
    iconHoverBg: "group-hover:bg-sky-100",
    iconText: "text-sky-600",
    badgeBg: "bg-sky-50/80",
    badgeText: "text-sky-700",
    badgeBorder: "border-sky-200/70",
    borderHover: "hover:border-sky-300",
    shadowHover: "hover:shadow-sky-100/60",
    arrowHover: "group-hover:text-sky-600",
  },
  emerald: {
    iconBg: "bg-teal-50",
    iconHoverBg: "group-hover:bg-teal-100",
    iconText: "text-teal-600",
    badgeBg: "bg-teal-50/80",
    badgeText: "text-teal-700",
    badgeBorder: "border-teal-200/70",
    borderHover: "hover:border-teal-300",
    shadowHover: "hover:shadow-teal-100/60",
    arrowHover: "group-hover:text-teal-600",
  },
};

export default function ToolCard({ tool }: ToolCardProps) {
  const Icon = tool.icon;
  const theme = COLOR_STYLES[tool.color] ?? COLOR_STYLES.blue;

  return (
    <a
      href={tool.url}
      className={`group relative flex h-full flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${theme.borderHover} ${theme.shadowHover}`}
    >
      <div>
        {/* カード上部：アイコン + バッジ類 + 矢印 */}
        <div className="mb-4 flex items-start justify-between gap-3">
          <div
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${theme.iconBg} ${theme.iconText} transition-colors ${theme.iconHoverBg}`}
          >
            <Icon className="h-6 w-6" aria-hidden="true" />
          </div>

          <div className="flex items-center gap-2">
            {tool.isNew && (
              <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 px-2 py-0.5 text-[10px] font-bold tracking-wider text-white shadow-xs">
                <Sparkles className="h-2.5 w-2.5" aria-hidden="true" />
                NEW
              </span>
            )}

            <span
              className={`rounded-md border px-2 py-0.5 text-[11px] font-medium ${theme.badgeBg} ${theme.badgeText} ${theme.badgeBorder}`}
            >
              {tool.category}
            </span>

            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-50 text-slate-400 transition-colors group-hover:bg-slate-100">
              <ArrowUpRight
                className={`h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${theme.arrowHover}`}
                aria-hidden="true"
              />
            </div>
          </div>
        </div>

        {/* メインタイトル */}
        <h3 className="mb-1 text-base font-bold leading-snug text-slate-800 transition-colors group-hover:text-slate-900 sm:text-lg">
          {tool.title}
        </h3>

        {/* サブタイトル（補足文） */}
        {tool.subTitle && (
          <p className="mb-3 text-xs font-medium text-slate-400 sm:text-[13px]">
            {tool.subTitle}
          </p>
        )}

        {/* 説明文 */}
        <p className="text-xs leading-relaxed text-slate-600 line-clamp-3 sm:text-sm">
          {tool.description}
        </p>
      </div>

      {/* カード下部のアクション表示 */}
      <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
        <span>ツールを開く</span>
        <span
          className={`font-medium transition-colors ${theme.arrowHover} text-slate-500 group-hover:underline`}
        >
          使ってみる →
        </span>
      </div>
    </a>
  );
}

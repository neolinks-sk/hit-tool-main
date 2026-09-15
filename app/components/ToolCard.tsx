import { ArrowUpRight } from "lucide-react";
import type { Tool, ToolCategory, ToolColor } from "../data/tools";

type ToolCardProps = {
  tool: Tool;
};

// カテゴリ名に基づく一律のバッジカラー
const CATEGORY_BADGE_STYLES: Record<
  ToolCategory,
  {
    badgeBg: string;
    badgeText: string;
    badgeBorder: string;
  }
> = {
  料理: {
    badgeBg: "bg-orange-50",
    badgeText: "text-orange-700",
    badgeBorder: "border-orange-200/80",
  },
  ライフスタイル: {
    badgeBg: "bg-sky-50",
    badgeText: "text-sky-700",
    badgeBorder: "border-sky-200/80",
  },
  便利ツール: {
    badgeBg: "bg-emerald-50",
    badgeText: "text-emerald-700",
    badgeBorder: "border-emerald-200/80",
  },
};

// ツール固有のテーマカラーに基づくアイコン色（独立）
const TOOL_ICON_STYLES: Record<
  ToolColor,
  {
    iconBg: string;
    iconText: string;
  }
> = {
  orange: {
    iconBg: "bg-orange-50",
    iconText: "text-orange-600",
  },
  green: {
    iconBg: "bg-emerald-50",
    iconText: "text-emerald-600",
  },
  blue: {
    iconBg: "bg-sky-50",
    iconText: "text-sky-600",
  },
  emerald: {
    iconBg: "bg-teal-50",
    iconText: "text-teal-600",
  },
};

export default function ToolCard({ tool }: ToolCardProps) {
  const Icon = tool.icon;
  const iconStyle = TOOL_ICON_STYLES[tool.color] ?? TOOL_ICON_STYLES.blue;
  const badgeStyle =
    CATEGORY_BADGE_STYLES[tool.category] ?? CATEGORY_BADGE_STYLES["便利ツール"];

  return (
    <a
      href={tool.url}
      className="group relative flex h-full flex-col justify-start rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-6"
    >
      {/* カード上部：アイコン + バッジ類 + 矢印 */}
      <div className="mb-3.5 flex items-start justify-between gap-3">
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${iconStyle.iconBg} ${iconStyle.iconText}`}
        >
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2">
          {tool.isNew && (
            <span className="inline-flex items-center rounded-full bg-gradient-to-r from-rose-500 to-pink-500 px-2 py-0.5 text-[10px] font-bold tracking-wider text-white shadow-xs">
              NEW
            </span>
          )}

          <span
            className={`rounded-md border px-2 py-0.5 text-[11px] font-medium ${badgeStyle.badgeBg} ${badgeStyle.badgeText} ${badgeStyle.badgeBorder}`}
          >
            {tool.category}
          </span>

          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-50 text-slate-400">
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>

      {/* メインタイトル */}
      <h3 className="mb-2 text-base font-bold leading-snug text-slate-800 sm:text-[17px]">
        {tool.title}
      </h3>

      {/* 説明文 */}
      <p className="text-xs leading-relaxed text-slate-600 line-clamp-2 sm:text-sm">
        {tool.description}
      </p>
    </a>
  );
}

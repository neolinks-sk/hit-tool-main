"use client";

import { Search, SearchX, X } from "lucide-react";
import { useMemo, useState } from "react";
import ToolCard from "./ToolCard";
import { CATEGORIES, Tool, ToolCategory, tools } from "../data/tools";

type FilterCategory = "すべて" | ToolCategory;

export default function ToolExplorer() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState<FilterCategory>("すべて");

  // カテゴリごとのツール件数を計算
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { すべて: tools.length };
    CATEGORIES.forEach((cat) => {
      counts[cat] = tools.filter((t) => t.category === cat).length;
    });
    return counts;
  }, []);

  // 検索・カテゴリでフィルタリング（リアルタイム連動）
  const filteredTools = useMemo(() => {
    const trimmedQuery = searchQuery.trim().toLowerCase();

    return tools.filter((tool) => {
      // 1. カテゴリ一致判定
      const matchesCategory =
        selectedCategory === "すべて" || tool.category === selectedCategory;

      if (!matchesCategory) return false;

      // 2. 検索キーワード一致判定
      if (!trimmedQuery) return true;

      const titleMatch = tool.title.toLowerCase().includes(trimmedQuery);
      const descriptionMatch = tool.description.toLowerCase().includes(trimmedQuery);
      const categoryMatch = tool.category.toLowerCase().includes(trimmedQuery);

      return titleMatch || descriptionMatch || categoryMatch;
    });
  }, [searchQuery, selectedCategory]);

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("すべて");
  };

  const isFiltered = searchQuery.trim() !== "" || selectedCategory !== "すべて";

  return (
    <section
      id="tools"
      className="relative z-10 isolate mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 pointer-events-auto"
      aria-labelledby="tools-heading"
    >
      {/* セクションヘッダー */}
      <div className="mb-6 flex flex-row items-center justify-between gap-4">
        <h2
          id="tools-heading"
          className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl"
        >
          取り扱いツール一覧
        </h2>

        {/* ツール件数バッジ */}
        <div className="flex items-center gap-2">
          <span className="rounded-full border border-slate-200/80 bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-2xs">
            全 <strong className="text-slate-900">{tools.length}</strong> 件中{" "}
            <strong className="text-indigo-600">{filteredTools.length}</strong>{" "}
            件を表示
          </span>
        </div>
      </div>

      {/* 検索バー＆カテゴリフィルターコントロール */}
      <div className="relative z-50 pointer-events-auto mb-8 space-y-4 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm sm:p-5">
        {/* 検索入力バー */}
        <div className="relative w-full pointer-events-auto">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
            <Search className="h-4 w-4" aria-hidden="true" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="ツール名、キーワード、機能などで検索..."
            className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-2.5 pl-10 pr-10 text-sm text-slate-800 placeholder-slate-400 transition-all focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10 pointer-events-auto"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3 text-slate-400 hover:text-slate-600 pointer-events-auto touch-manipulation"
              aria-label="検索キーワードをクリア"
            >
              <X className="pointer-events-none h-4 w-4" />
            </button>
          )}
        </div>

        {/* カテゴリ切り替えタブ */}
        <div className="flex items-center justify-between gap-2 border-t border-slate-100 pt-1 pointer-events-auto">
          <div className="flex w-full items-center gap-2 overflow-x-auto py-1 scrollbar-none pointer-events-auto">
            <button
              type="button"
              onClick={() => setSelectedCategory("すべて")}
              className={`inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-all pointer-events-auto touch-manipulation ${
                selectedCategory === "すべて"
                  ? "bg-indigo-600 text-white shadow-xs"
                  : "bg-slate-100/80 text-slate-600 hover:bg-slate-200/80 hover:text-slate-800"
              }`}
            >
              <span className="pointer-events-none select-none">すべて</span>
              <span
                className={`pointer-events-none select-none rounded-full px-1.5 py-0.2 text-[10px] ${
                  selectedCategory === "すべて"
                    ? "bg-white/20 text-white"
                    : "bg-slate-200/70 text-slate-500"
                }`}
              >
                {categoryCounts["すべて"]}
              </span>
            </button>

            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-all pointer-events-auto touch-manipulation ${
                    isActive
                      ? "bg-indigo-600 text-white shadow-xs"
                      : "bg-slate-100/80 text-slate-600 hover:bg-slate-200/80 hover:text-slate-800"
                  }`}
                >
                  <span className="pointer-events-none select-none">{cat}</span>
                  <span
                    className={`pointer-events-none select-none rounded-full px-1.5 py-0.2 text-[10px] ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-slate-200/70 text-slate-500"
                    }`}
                  >
                    {categoryCounts[cat] ?? 0}
                  </span>
                </button>
              );
            })}
          </div>

          {/* フィルターリセットボタン（絞り込み中のみ表示） */}
          {isFiltered && (
            <button
              type="button"
              onClick={handleResetFilters}
              className="hidden shrink-0 cursor-pointer text-xs text-indigo-600 underline-offset-4 hover:underline sm:inline-block pointer-events-auto touch-manipulation"
            >
              条件をリセット
            </button>
          )}
        </div>
      </div>

      {/* ツールカード一覧グリッド（1列 / 2列 / 3列） */}
      {filteredTools.length > 0 ? (
        <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 sm:gap-6">
          {filteredTools.map((tool: Tool) => (
            <li key={tool.id} className="h-full">
              <ToolCard tool={tool} />
            </li>
          ))}
        </ul>
      ) : (
        /* 該当なし（Empty State） */
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-white/60 px-6 py-16 text-center">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
            <SearchX className="h-7 w-7" aria-hidden="true" />
          </div>
          <h3 className="mb-2 text-base font-semibold text-slate-800 sm:text-lg">
            該当するツールが見つかりませんでした
          </h3>
          <p className="mb-6 max-w-sm text-xs leading-relaxed text-slate-500 sm:text-sm">
            検索キーワードを変更するか、カテゴリフィルターをリセットしてお試しください。
          </p>
          <button
            type="button"
            onClick={handleResetFilters}
            className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition-all hover:bg-indigo-700 hover:shadow-md pointer-events-auto touch-manipulation"
          >
            フィルターをリセットする
          </button>
        </div>
      )}
    </section>
  );
}

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

  // 検索・カテゴリでフィルタリング
  const filteredTools = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return tools.filter((tool) => {
      // カテゴリ一致チェック
      const matchesCategory =
        selectedCategory === "すべて" || tool.category === selectedCategory;

      if (!matchesCategory) return false;

      // 検索キーワード一致チェック
      if (!query) return true;

      const searchableText = `${tool.title} ${tool.description} ${tool.category}`.toLowerCase();
      return searchableText.includes(query);
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
      className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16"
      aria-labelledby="tools-heading"
    >
      {/* セクションヘッダー */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="inline-flex items-center text-xs font-medium uppercase tracking-wider text-slate-400 mb-1">
            Tool Directory
          </div>
          <h2
            id="tools-heading"
            className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
          >
            取り扱いツール一覧
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            日常生活や作業効率化に役立つWebアプリをラインナップしています。
          </p>
        </div>

        {/* ツール件数バッジ */}
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
            全 <strong className="text-slate-900">{tools.length}</strong> 件中{" "}
            <strong className="text-indigo-600">{filteredTools.length}</strong>{" "}
            件を表示
          </span>
        </div>
      </div>

      {/* 検索バー＆カテゴリフィルターコントロール */}
      <div className="mb-8 space-y-4 rounded-2xl border border-slate-200/80 bg-white/80 p-4 shadow-sm backdrop-blur-sm sm:p-5">
        {/* 検索入力バー */}
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
            <Search className="h-4 w-4" aria-hidden="true" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="ツール名、キーワード、機能などで検索..."
            className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-2.5 pl-10 pr-10 text-sm text-slate-800 placeholder-slate-400 transition-all focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 transition-colors hover:text-slate-600"
              aria-label="検索キーワードをクリア"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* カテゴリ切り替えタブ（スマホ時は横スクロール可能） */}
        <div className="flex items-center justify-between gap-2 pt-1 border-t border-slate-100">
          <div className="flex w-full items-center gap-2 overflow-x-auto py-1 scrollbar-none">
            <button
              type="button"
              onClick={() => setSelectedCategory("すべて")}
              className={`inline-flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                selectedCategory === "すべて"
                  ? "bg-indigo-600 text-white shadow-xs"
                  : "bg-slate-100/80 text-slate-600 hover:bg-slate-200/80 hover:text-slate-800"
              }`}
            >
              <span>すべて</span>
              <span
                className={`rounded-full px-1.5 py-0.2 text-[10px] ${
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
                  className={`inline-flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                    isActive
                      ? "bg-indigo-600 text-white shadow-xs"
                      : "bg-slate-100/80 text-slate-600 hover:bg-slate-200/80 hover:text-slate-800"
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`rounded-full px-1.5 py-0.2 text-[10px] ${
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
              className="hidden shrink-0 text-xs text-indigo-600 underline-offset-4 hover:underline sm:inline-block"
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
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition-all hover:bg-indigo-700 hover:shadow-md"
          >
            フィルターをリセットする
          </button>
        </div>
      )}
    </section>
  );
}

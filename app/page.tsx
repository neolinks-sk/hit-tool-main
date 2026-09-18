import { Check, Laptop } from "lucide-react";
import { Plus_Jakarta_Sans } from "next/font/google";
import Header from "./components/Header";
import ToolExplorer from "./components/ToolExplorer";
import { SITE_CONFIG } from "./lib/site-config";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["700", "800"],
});

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex-1 isolate">
        {/* ヒーローセクション（上品なインディゴ〜ブルーのメッシュグラデーション） */}
        <section className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-b from-indigo-50/60 via-slate-50/30 to-white">
          {/* 背景の微細な光彩デコレーション */}
          <div
            className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-200/20 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute top-12 left-1/4 -z-10 h-72 w-72 rounded-full bg-sky-200/20 blur-2xl"
            aria-hidden="true"
          />

          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
            <div className="mx-auto max-w-2xl text-center">
              {/* ピルバッジ */}
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1 text-xs font-semibold text-indigo-600 shadow-sm">
                <span>シンプルで使いやすいWebツール</span>
              </div>

              {/* メインタイトル */}
              <h1
                className={`${plusJakartaSans.className} mb-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl`}
              >
                {SITE_CONFIG.name}
              </h1>

              {/* サブタイトル */}
              <p className="text-sm font-normal leading-relaxed text-slate-600 sm:text-base">
                <span className="inline-block">日常のちょっとした「困りごと」を、</span>
                <br />
                <span className="inline-block">すぐに解決できるWebツールを集めたポータルサイトです</span>
              </p>

              {/* メリット要素：アイコン付きミニバッジ（中央揃え・2項目） */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-white px-3.5 py-1.5 font-medium text-slate-600 shadow-xs">
                  <Check className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" />
                  完全無料・登録不要
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-white px-3.5 py-1.5 font-medium text-slate-600 shadow-xs">
                  <Laptop className="h-3.5 w-3.5 text-indigo-600" aria-hidden="true" />
                  スマホ・PC両対応
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ツール検索・絞り込み＆一覧セクション */}
        <ToolExplorer />
      </main>
    </>
  );
}

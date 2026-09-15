import Header from "./components/Header";
import ToolExplorer from "./components/ToolExplorer";
import { SITE_CONFIG } from "./lib/site-config";

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex-1">
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
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3.5 py-1 text-xs font-medium text-indigo-700 shadow-sm ring-1 ring-indigo-100/80 backdrop-blur-xs">
                <span>シンプルで使いやすいWebツール</span>
              </div>

              {/* メインタイトル */}
              <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
                {SITE_CONFIG.name}
              </h1>

              {/* サブタイトル（スマホ2行維持） */}
              <p className="text-[13px] leading-relaxed text-slate-600 tracking-tight min-[360px]:text-sm min-[360px]:tracking-tight sm:text-base sm:tracking-normal md:text-lg">
                <span className="inline-block">日常生活のちょっとした困りごとを、</span>
                <br />
                <span className="inline-block">すぐに解決できるWebツールを集めたポータルサイトです。</span>
              </p>

              {/* 特徴ピル */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500">
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  完全無料・登録不要
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                  スマホ・PC両対応
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
                  随時新ツール追加中
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

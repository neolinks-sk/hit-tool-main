import { Sparkles } from "lucide-react";
import Header from "./components/Header";
import ToolCard from "./components/ToolCard";
import { tools } from "./data/tools";
import { SITE_CONFIG } from "./lib/site-config";

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex-1">
        <section className="border-b border-slate-100 bg-gradient-to-b from-sky-50/80 to-white">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
            <div className="mx-auto max-w-2xl text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-medium text-indigo-700 shadow-sm ring-1 ring-indigo-100">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                シンプルで使いやすいWebツール
              </div>
              <h1 className="mb-4 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
                {SITE_CONFIG.name}
              </h1>
              <p className="text-[13px] leading-relaxed text-slate-600 tracking-tight min-[360px]:text-sm min-[360px]:tracking-tight sm:text-base sm:tracking-normal md:text-lg">
                <span className="inline-block">日常生活のちょっとした困りごとを、</span>
                <br />
                <span className="inline-block">すぐに解決できるWebツールを集めたポータルサイトです。</span>
              </p>
            </div>
          </div>
        </section>

        <section
          id="tools"
          className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-16"
          aria-labelledby="tools-heading"
        >
          <div className="mb-8">
            <h2
              id="tools-heading"
              className="text-xl font-semibold text-slate-800 sm:text-2xl"
            >
              取り扱いツール一覧
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              クリックすると各ツールのページへ移動します
            </p>
          </div>

          <ul className="grid gap-5 sm:grid-cols-2">
            {tools.map((tool) => (
              <li key={tool.id}>
                <ToolCard tool={tool} />
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}

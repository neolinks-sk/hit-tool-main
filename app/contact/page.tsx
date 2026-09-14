import {
  ExternalLink,
  Info,
  ShieldCheck,
  User,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import SubPageHeader from "../components/SubPageHeader";
import { SITE_CONFIG } from "../lib/site-config";

export const metadata: Metadata = {
  title: "お問い合わせ・ご意見窓口",
  description:
    "HITtoolsへのお問い合わせ、ご意見・ご要望、ツールの不具合報告などを受け付ける窓口です。Googleフォームよりお気軽にご連絡ください。",
  openGraph: {
    title: `お問い合わせ・ご意見窓口 | ${SITE_CONFIG.name}`,
    description:
      "HITtoolsへのお問い合わせ、ご意見・ご要望、ツールの不具合報告などを受け付ける窓口です。Googleフォームよりお気軽にご連絡ください。",
  },
};

export default function ContactPage() {
  return (
    <>
      <SubPageHeader />

      <main className="flex-1 bg-slate-50 py-10 sm:py-14">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm md:p-10">
            <header className="mb-8 border-b border-slate-100 pb-6">
              <h1 className="border-l-4 border-indigo-600 pl-3 text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl">
                お問い合わせ・ご意見窓口
              </h1>
              <p className="mt-2 pl-4 text-sm font-medium text-indigo-600">
                googleフォームにて受け付けております
              </p>
            </header>

            {/* 案内文 */}
            <p className="mb-6 leading-relaxed text-slate-700">
              当サイト「HITtools」に関するご意見・ご要望、不具合（バグ）の報告、掲載ツールに関するお問い合わせは、以下のフォームより受け付けております。
            </p>

            {/* 受付内容の例 */}
            <div className="mb-8 rounded-xl border border-slate-200/80 bg-slate-50/70 p-4 sm:p-5">
              <h2 className="mb-3 text-sm font-semibold text-slate-800">
                受付内容の例：
              </h2>
              <ul className="space-y-2 text-[11.5px] text-slate-700 tracking-tighter min-[360px]:text-xs min-[360px]:tracking-tight min-[390px]:tracking-normal sm:text-sm">
                <li className="flex items-center gap-1.5 whitespace-nowrap">
                  <span className="select-none text-slate-400">□</span>
                  <span>ツールの不具合・計算結果の誤りに関する報告</span>
                </li>
                <li className="flex items-center gap-1.5 whitespace-nowrap">
                  <span className="select-none text-slate-400">□</span>
                  <span>「こんなツールが欲しい」という追加リクエスト</span>
                </li>
                <li className="flex items-center gap-1.5 whitespace-nowrap">
                  <span className="select-none text-slate-400">□</span>
                  <span>ご意見・ご感想・その他のお問い合わせ</span>
                </li>
              </ul>
            </div>

            {/* Googleフォーム ボタンエリア */}
            <div className="mb-8 rounded-xl bg-gradient-to-br from-indigo-500/10 via-sky-500/10 to-transparent p-6 text-center">
              <a
                href={SITE_CONFIG.contactFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 px-6 py-4 text-base font-semibold text-white shadow-md shadow-indigo-500/20 transition-all duration-200 hover:-translate-y-0.5 hover:from-indigo-500 hover:to-indigo-600 hover:shadow-lg hover:shadow-indigo-500/30 sm:w-auto"
              >
                <span>お問い合わせを開く</span>
                <ExternalLink
                  className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
              <p className="mt-3 text-xs text-slate-500">
                ※外部サイト（Googleフォーム）へ遷移します
              </p>
            </div>

            {/* 返信・対応について */}
            <div className="mb-10 rounded-xl border border-amber-200/80 bg-amber-50/40 p-4 sm:p-5">
              <div className="flex gap-3">
                <Info
                  className="h-5 w-5 shrink-0 text-amber-600"
                  aria-hidden="true"
                />
                <div className="text-xs leading-relaxed text-slate-700 sm:text-sm">
                  <p className="font-semibold text-slate-800">
                    返信・対応について
                  </p>
                  <p className="mt-1">
                    お送りいただいた内容はすべて確認しております。個人開発の無料ツールのため、すべてのお問い合わせへの個別返信をお約束できない場合がございます。あらかじめご了承ください。
                  </p>
                </div>
              </div>
            </div>

            {/* 導線リンク */}
            <section
              aria-labelledby="contact-nav-title"
              className="border-t border-slate-100 pt-8"
            >
              <h2
                id="contact-nav-title"
                className="mb-4 text-sm font-semibold text-slate-800"
              >
                関連ページ
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                <Link
                  href="/about"
                  className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50/60 p-4 transition-all hover:border-indigo-200 hover:bg-indigo-50/40"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-indigo-600 shadow-xs">
                    <User className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <span className="text-sm font-semibold text-slate-800 group-hover:text-indigo-600">
                    運営者情報
                  </span>
                </Link>

                <Link
                  href="/privacy"
                  className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50/60 p-4 transition-all hover:border-indigo-200 hover:bg-indigo-50/40"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-indigo-600 shadow-xs">
                    <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <span className="text-sm font-semibold text-slate-800 group-hover:text-indigo-600">
                    プライバシーポリシー
                  </span>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

import {
  Calendar,
  Globe,
  Info,
  Mail,
  ShieldCheck,
  User,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import SubPageHeader from "../components/SubPageHeader";
import { SITE_CONFIG } from "../lib/site-config";

export const metadata: Metadata = {
  title: "運営者情報・サイト概要",
  description:
    "HITtoolsの運営者情報・サイト概要ページです。日常生活や料理、作業効率化に役立つWeb便利ツールの企画・開発・運営を行っています。",
  openGraph: {
    title: `運営者情報・サイト概要 | ${SITE_CONFIG.name}`,
    description:
      "HITtoolsの運営者情報・サイト概要ページです。日常生活や料理、作業効率化に役立つWeb便利ツールの企画・開発・運営を行っています。",
  },
};

export default function AboutPage() {
  return (
    <>
      <SubPageHeader />

      <main className="flex-1 bg-slate-50 py-10 sm:py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm md:p-10">
            <header className="mb-8 border-b border-slate-100 pb-6">
              <h1 className="border-l-4 border-indigo-600 pl-3 text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl">
                運営者情報・サイト概要
              </h1>
              <p className="mt-2 pl-4 text-sm leading-relaxed text-slate-600">
                HITtoolsの基本情報および運営方針について掲載しています。
              </p>
            </header>

            <section aria-labelledby="about-details-title" className="mb-10">
              <h2 id="about-details-title" className="sr-only">
                基本情報一覧
              </h2>
              <dl className="divide-y divide-slate-100 overflow-hidden rounded-xl border border-slate-200/80">
                <div className="grid grid-cols-1 gap-2 bg-slate-50/50 p-4 sm:grid-cols-3 sm:gap-4 sm:p-5">
                  <dt className="flex items-center gap-2 font-medium text-slate-700">
                    <Globe className="h-4 w-4 text-indigo-600" aria-hidden="true" />
                    サイト名
                  </dt>
                  <dd className="font-semibold text-slate-900 sm:col-span-2">
                    {SITE_CONFIG.operator.siteName}
                  </dd>
                </div>

                <div className="grid grid-cols-1 gap-2 p-4 sm:grid-cols-3 sm:gap-4 sm:p-5">
                  <dt className="flex items-center gap-2 font-medium text-slate-700">
                    <Globe className="h-4 w-4 text-indigo-600" aria-hidden="true" />
                    サイトURL
                  </dt>
                  <dd className="text-slate-800 sm:col-span-2">
                    <a
                      href={SITE_CONFIG.url}
                      className="text-indigo-600 underline-offset-4 hover:underline"
                    >
                      {SITE_CONFIG.url}
                    </a>
                  </dd>
                </div>

                <div className="grid grid-cols-1 gap-2 bg-slate-50/50 p-4 sm:grid-cols-3 sm:gap-4 sm:p-5">
                  <dt className="flex items-center gap-2 font-medium text-slate-700">
                    <User className="h-4 w-4 text-indigo-600" aria-hidden="true" />
                    運営者
                  </dt>
                  <dd className="text-slate-800 sm:col-span-2">
                    {SITE_CONFIG.operator.operatorName}
                  </dd>
                </div>

                <div className="grid grid-cols-1 gap-2 p-4 sm:grid-cols-3 sm:gap-4 sm:p-5">
                  <dt className="flex items-center gap-2 font-medium text-slate-700">
                    <Calendar className="h-4 w-4 text-indigo-600" aria-hidden="true" />
                    開設年月
                  </dt>
                  <dd className="text-slate-800 sm:col-span-2">
                    {SITE_CONFIG.operator.established}
                  </dd>
                </div>

                <div className="grid grid-cols-1 gap-2 bg-slate-50/50 p-4 sm:grid-cols-3 sm:gap-4 sm:p-5">
                  <dt className="flex items-start gap-2 pt-0.5 font-medium text-slate-700">
                    <Info className="h-4 w-4 text-indigo-600" aria-hidden="true" />
                    運営目的・概要
                  </dt>
                  <dd className="leading-relaxed text-slate-700 sm:col-span-2">
                    {SITE_CONFIG.operator.summary}
                  </dd>
                </div>
              </dl>
            </section>

            {/* 導線リンク */}
            <section
              aria-labelledby="navigation-links-title"
              className="mt-10 border-t border-slate-100 pt-8"
            >
              <h2
                id="navigation-links-title"
                className="mb-4 text-sm font-semibold text-slate-800"
              >
                関連ページ
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
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

                <Link
                  href="/contact"
                  className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50/60 p-4 transition-all hover:border-indigo-200 hover:bg-indigo-50/40"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-indigo-600 shadow-xs">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <span className="text-sm font-semibold text-slate-800 group-hover:text-indigo-600">
                    お問い合わせ
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

import { ExternalLink, Mail, User } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import SubPageHeader from "../components/SubPageHeader";
import { SITE_CONFIG } from "../lib/site-config";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description:
    "HITtoolsにおける個人情報やデータの取り扱い、Cookieの使用、免責事項等についてのプライバシーポリシーを定めています。",
  openGraph: {
    title: `プライバシーポリシー | ${SITE_CONFIG.name}`,
    description:
      "HITtoolsにおける個人情報やデータの取り扱い、Cookieの使用、免責事項等についてのプライバシーポリシーを定めています。",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <SubPageHeader />

      <main className="flex-1 bg-slate-50 py-10 sm:py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <article className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm md:p-10">
            <header className="mb-8 border-b border-slate-100 pb-6">
              <h1 className="border-l-4 border-indigo-600 pl-3 text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl">
                プライバシーポリシー
              </h1>
            </header>

            <div className="space-y-8 text-sm leading-relaxed text-slate-700 sm:text-base sm:leading-relaxed">
              <p>
                「HITtools」（以下、「当サイト」といいます）は、ユーザーの個人情報および各種データの取り扱いについて、以下のとおりプライバシーポリシー（以下、「本ポリシー」といいます）を定め、適切な保護と運用に努めます。
              </p>

              <section className="space-y-3">
                <h2 className="border-l-4 border-indigo-600 pl-3 text-lg font-bold text-slate-800 sm:text-xl">
                  1. 個人情報の取得と利用目的
                </h2>
                <p>
                  当サイトでは、お問い合わせフォームのご利用時に、メールアドレス等の個人情報をご入力いただく場合があります。取得した個人情報は、お問い合わせに対する回答や必要な情報を電子メール等でご連絡する場合にのみ利用し、これらの目的以外では利用いたしません。
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="border-l-4 border-indigo-600 pl-3 text-lg font-bold text-slate-800 sm:text-xl">
                  2. Cookieおよびローカルストレージの使用について
                </h2>
                <p>
                  当サイトの一部のツール（「レシピ人数変更・調味料g変換」や「冷蔵庫レスキュー」等）では、ユーザーの利便性向上（入力した計量データ、検索条件、お気に入り情報、アプリの設定値などの一時保持）のため、お使いのブラウザのCookieおよびローカルストレージ（LocalStorage）機能を使用しています。
                </p>
                <p>
                  これらのデータはユーザーの端末内にのみ保持され、当サイトのサーバーに直接収集・蓄積されるものではありません。ブラウザの設定により、これらの機能を無効化またはデータを削除することが可能です。
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="border-l-4 border-indigo-600 pl-3 text-lg font-bold text-slate-800 sm:text-xl">
                  3. 広告の配信について（Google AdSense等）
                </h2>
                <p>
                  当サイトでは、第三者配信の広告サービス「Google AdSense（グーグルアドセンス）」を利用しています。
                </p>
                <p>
                  広告配信事業者は、Cookie（クッキー）等を使用して、ユーザーの興味や関心に応じた広告を表示する場合があります。これにより、当サイトやお客さまが過去にアクセスしたWebサイトの情報に基づき、適切な広告が配信されます。
                </p>
                <p>
                  パーソナライズ広告を無効にする設定やGoogleアドセンスに関する詳細は「
                  <a
                    href="https://adssettings.google.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-600 underline decoration-indigo-300 underline-offset-4 transition-colors hover:text-indigo-800 hover:decoration-indigo-600"
                  >
                    <span>Google 広告設定</span>
                    <ExternalLink className="ml-0.5 h-3.5 w-3.5 inline" aria-hidden="true" />
                  </a>
                  」および「
                  <a
                    href="https://policies.google.com/technologies/ads?hl=ja"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-600 underline decoration-indigo-300 underline-offset-4 transition-colors hover:text-indigo-800 hover:decoration-indigo-600"
                  >
                    <span>Google 政策と規約</span>
                    <ExternalLink className="ml-0.5 h-3.5 w-3.5 inline" aria-hidden="true" />
                  </a>
                  」をご覧ください。
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="border-l-4 border-indigo-600 pl-3 text-lg font-bold text-slate-800 sm:text-xl">
                  4. アクセス解析ツールについて（Google Analytics）
                </h2>
                <p>
                  当サイトでは、サイトの利用状況を把握し、サービスの改善やコンテンツの充実を図るため、Googleが提供するアクセス解析ツール「Google Analytics」を利用しています。
                </p>
                <p>
                  Google Analyticsでは、Cookie（クッキー）等を利用して、当サイトへのアクセス状況、閲覧したページ、利用日時、使用している端末やブラウザに関する情報、IPアドレス等の情報が収集される場合があります。
                </p>
                <p>
                  これらの情報は、当サイトの利用状況の分析やサービス改善を目的として利用されます。Google Analyticsによって収集されたデータは、Googleのプライバシーポリシーに基づいて管理されます。
                </p>
                <p>
                  当サイトでは、Google Analyticsを利用することで、ユーザー個人を直接特定することを目的としていません。
                </p>
                <p>
                  Google Analyticsによるデータ収集を希望されない場合は、ブラウザの設定等によりCookieを無効にすることができます。また、Googleが提供する「Google アナリティクス オプトアウト アドオン」を利用することで、Google Analyticsによるデータ収集を拒否することもできます。
                </p>
                <p>
                  Google Analyticsの利用規約およびプライバシーに関する詳細については、Googleのウェブサイトをご確認ください。
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="border-l-4 border-indigo-600 pl-3 text-lg font-bold text-slate-800 sm:text-xl">
                  5. 免責事項
                </h2>
                <p>
                  当サイトで提供している各アプリの計算結果、変換精度、提案内容（レシピ分量の変更、ケーキ型のサイズ換算、あまり物レシピの提案等）については、可能な限り正確な情報を提示できるよう万全を期しておりますが、その正確性、安全性、完全性を保証するものではありません。
                </p>
                <p>
                  当サイトおよび各アプリの利用によって生じた、いかなる損害・不利益（調理失敗、食材損害等を含む）についても、当サイトは一切の責任を負いかねます。あらかじめご了承のうえ、自己責任にてご利用ください。
                </p>
                <p>
                  また、当サイトからのリンク等によって移動した外部サイトで提供される情報やサービスについても一切の責任を負いません。
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="border-l-4 border-indigo-600 pl-3 text-lg font-bold text-slate-800 sm:text-xl">
                  6. 特定アプリに関する特記事項
                </h2>
                <p className="font-semibold text-slate-800">
                  【料理・お菓子作りの計算ツール（レシピ人数変更・調味料g変換）】
                </p>
                <p className="font-medium text-slate-800">
                  ・レシピ画像解析機能における画像データの取り扱い
                </p>
                <p>
                  「レシピ画像から人数変更」機能においてユーザーがアップロードした画像は、材料名および分量のテキスト読み取り・計算処理のみを目的として外部API（Google Gemini API等）に送信されます。画像データが当サイトのサーバー上に永続的に保存されたり、第三者に提供・公開されたりすることは一切ありません。
                </p>
              </section>
            </div>

            {/* 導線リンク */}
            <section
              aria-labelledby="privacy-nav-title"
              className="mt-10 border-t border-slate-100 pt-8"
            >
              <h2
                id="privacy-nav-title"
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
          </article>
        </div>
      </main>
    </>
  );
}

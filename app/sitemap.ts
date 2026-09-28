import type { MetadataRoute } from "next";

const BASE_URL = "https://hit-tool.com";

// 子アプリのスラッグ一覧（5アプリ）
const SUB_APPS = [
  "recipe-calculator",
  "zubora-recipe",
  "fashion-weather",
  "travel-checklist",
  "calcnote",
] as const;

// 各子アプリ配下のコラム記事（各10記事 / 合計50記事）
// ※ 記事の追加やカスタムスラッグへの変更がある場合はこの配列に追記・編集が可能です
const COLUMN_PATHS: string[] = SUB_APPS.flatMap((app) =>
  Array.from({ length: 10 }, (_, i) => `/${app}/column/${i + 1}`)
);

// 固定ページ（運営者情報、お問い合わせ、プライバシーポリシー）
const STATIC_PAGES = ["/about", "/contact", "/privacy"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // 1. メインポータル TOP
  const mainPortalEntry: MetadataRoute.Sitemap[number] = {
    url: `${BASE_URL}/`,
    lastModified: now,
    changeFrequency: "daily",
    priority: 1.0,
  };

  // 2. 各子アプリ TOP（5件）
  const subAppEntries: MetadataRoute.Sitemap = SUB_APPS.map((app) => ({
    url: `${BASE_URL}/${app}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // 3. 固定ページ（3件）
  const staticPageEntries: MetadataRoute.Sitemap = STATIC_PAGES.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  // 4. 全子アプリのコラム記事（50件）
  const columnEntries: MetadataRoute.Sitemap = COLUMN_PATHS.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [
    mainPortalEntry,
    ...subAppEntries,
    ...staticPageEntries,
    ...columnEntries,
  ];
}

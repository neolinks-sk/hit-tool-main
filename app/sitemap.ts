import type { MetadataRoute } from "next";

const BASE_URL = "https://hit-tool.com";

// 子アプリのルート一覧（5アプリ）
const SUB_APPS = [
  "recipe-calculator",
  "zubora-recipe",
  "fashion-weather",
  "travel-checklist",
  "calcnote",
] as const;

// 1. recipe-calculator（計量・人数・型換算）のコラム記事スラッグ一覧（10件）
const RECIPE_CALCULATOR_COLUMN_SLUGS = [
  "tablespoon-to-gram-conversion-guide",
  "tablespoon-half-teaspoon-conversion-tips",
  "recipe-serving-scaling-tips",
  "single-to-family-serving-tips",
  "cake-pan-size-conversion-rules",
  "pound-cake-round-pan-conversion",
  "recipe-photo-serving-calculator",
  "screen-wake-lock-cooking-tips",
  "gram-vs-milliliter-density-guide",
  "baking-measurement-accuracy-guide",
] as const;

// 2. calcnote（電卓ノート・手書きメモ）のコラム記事スラッグ一覧（10件）
const CALCNOTE_COLUMN_SLUGS = [
  "basic-usage",
  "tax-return",
  "handwriting-tips",
  "share-image",
  "diy-calculator",
  "travel-split",
  "prevent-mistakes",
  "utility-costs",
  "smart-editing",
  "visualize-process",
] as const;

// 3. travel-checklist（持ち物チェックリスト）のお役立ちコラムスラッグ一覧（10件）
const TRAVEL_CHECKLIST_ARTICLE_SLUGS = [
  "save-edition-travel-packing-list",
  "smart-light-packing-1-2-nights",
  "overseas-theft-prevention-guide",
  "useful-travel-goods-12",
  "travel-prep-schedule",
  "carry-on-rules-guide",
  "capsule-wardrobe-laundry",
  "cute-emergency-pouch-diy",
  "post-travel-cleanup-10min",
  "fold-clothes-compression",
] as const;

// 4. zubora-recipe（冷蔵庫レスキュー・ズボラ飯）のコラム記事スラッグ一覧（10件）
const ZUBORA_RECIPE_ARTICLE_SLUGS = [
  "zubora-han-basics",
  "fridge-organization-tips",
  "versatile-vegetables-recipes",
  "easy-seasonings-recipes",
  "budget-high-protein-recipes",
  "microwave-bowl-recipes",
  "kitchen-scissors-recipes",
  "one-pan-recipes",
  "easy-donburi-oneplate-recipes",
  "frozen-and-prep-recipes",
] as const;

// 5. fashion-weather（今日の服装ナビ）のコラム記事スラッグ一覧（10件）
const FASHION_WEATHER_ARTICLE_SLUGS = [
  "temperature-outfit-15-20-25",
  "rainy-office-casual",
  "daily-temperature-swing-outer",
  "rain-probability-umbrella-guide",
  "winter-layering-under-10",
  "seasonal-wardrobe-spring-autumn",
  "extreme-heat-uv-style",
  "rain-boots-care-guide",
  "humid-season-hair-clothes",
  "travel-weather-packing",
] as const;

// 全コラム・記事のパス一覧（合計50件）
const COLUMN_PATHS: string[] = [
  ...RECIPE_CALCULATOR_COLUMN_SLUGS.map(
    (slug) => `/recipe-calculator/column/${slug}`
  ),
  ...CALCNOTE_COLUMN_SLUGS.map((slug) => `/calcnote/column/${slug}`),
  ...TRAVEL_CHECKLIST_ARTICLE_SLUGS.map(
    (slug) => `/travel-checklist/articles/${slug}`
  ),
  ...ZUBORA_RECIPE_ARTICLE_SLUGS.map(
    (slug) => `/zubora-recipe/articles/${slug}`
  ),
  ...FASHION_WEATHER_ARTICLE_SLUGS.map(
    (slug) => `/fashion-weather/articles/${slug}`
  ),
];

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

  // 4. 全子アプリのコラム・記事（50件）
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

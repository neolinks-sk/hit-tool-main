import {
  ChefHat,
  CloudSun,
  FileSpreadsheet,
  ListChecks,
  Refrigerator,
  type LucideIcon,
} from "lucide-react";

export type ToolCategory = "料理" | "ライフスタイル" | "便利ツール";

export type ToolColor = "orange" | "green" | "blue" | "emerald";

export type Tool = {
  id: string;
  title: string;
  description: string;
  url: string;
  icon: LucideIcon;
  category: ToolCategory;
  color: ToolColor;
  isNew?: boolean;
};

export const CATEGORIES: readonly ToolCategory[] = [
  "料理",
  "ライフスタイル",
  "便利ツール",
] as const;

export const tools: Tool[] = [
  {
    id: "recipe-calculator",
    title: "レシピ人数変更・調味料g変換｜ケーキ型サイズ変更",
    description:
      "人数の変更やケーキ型のサイズ変更に伴う調味料・材料の分量を自動計算するツール",
    url: "/recipe-calculator",
    icon: ChefHat,
    category: "料理",
    color: "orange",
    isNew: true,
  },
  {
    id: "zubora-recipe",
    title: "冷蔵庫レスキュー｜あまり物でズボラ飯",
    description:
      "冷蔵庫に残っている食材から作れるズボラ飯・簡単レシピを提案するツール",
    url: "/zubora-recipe",
    icon: Refrigerator,
    category: "料理",
    color: "orange",
    isNew: false,
  },
  {
    id: "travel-checklist",
    title: "持ち物チェックリスト",
    description:
      "旅行や出張の準備・持ち物を一覧でスマートにチェック・管理できるツール",
    url: "/travel-checklist",
    icon: ListChecks,
    category: "ライフスタイル",
    color: "green",
    isNew: true,
  },
  {
    id: "fashion-weather",
    title: "今日の服装ナビ｜天気に合わせた服装提案",
    description:
      "気温や天候に合わせた最適なコーディネートや服装を提案するツール",
    url: "/fashion-weather",
    icon: CloudSun,
    category: "ライフスタイル",
    color: "blue",
    isNew: true,
  },
  {
    id: "calcnote",
    title: "Calcnote-メモ＆手書きができる無料電卓アプリ",
    description:
      "テキストと一緒に計算式を残して自動計算・保存できる計算メモツール",
    url: "/calcnote",
    icon: FileSpreadsheet,
    category: "便利ツール",
    color: "emerald",
    isNew: true,
  },
];

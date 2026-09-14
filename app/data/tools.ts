import { Calculator, Refrigerator, type LucideIcon } from "lucide-react";

export type Tool = {
  id: string;
  title: string;
  description: string;
  url: string;
  icon: LucideIcon;
};

export const tools: Tool[] = [
  {
    id: "recipe-calculator",
    title: "レシピ人数変更・調味料g変換｜ケーキ型サイズ変更",
    description:
      "人数の変更やケーキ型のサイズ変更に伴う調味料・材料の分量を自動計算するツール",
    url: "https://hit-tool.com/recipe-calculator",
    icon: Calculator,
  },
  {
    id: "zubora-recipe",
    title: "冷蔵庫レスキュー｜あまり物でズボラ飯",
    description:
      "冷蔵庫に残っている食材から作れるズボラ飯・簡単レシピを提案するツール",
    url: "https://hit-tool.com/zubora-recipe",
    icon: Refrigerator,
  },
];

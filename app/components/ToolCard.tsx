import { ArrowUpRight } from "lucide-react";
import type { Tool } from "../data/tools";

type ToolCardProps = {
  tool: Tool;
};

export default function ToolCard({ tool }: ToolCardProps) {
  const Icon = tool.icon;

  return (
    <a
      href={tool.url}
      className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-lg hover:shadow-sky-100/60"
    >
      <div className="mb-4 flex items-start justify-between gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-600 transition-colors group-hover:bg-sky-100">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </div>
        <ArrowUpRight
          className="h-5 w-5 shrink-0 text-slate-300 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-sky-500"
          aria-hidden="true"
        />
      </div>
      <h3 className="mb-2 text-base font-semibold leading-snug text-slate-800">
        {tool.title}
      </h3>
      <p className="text-sm leading-relaxed text-slate-500">{tool.description}</p>
    </a>
  );
}

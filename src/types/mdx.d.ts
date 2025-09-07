import type { ComponentType } from "react";

export type MDXModule = {
  default: ComponentType<Record<string, unknown>>;
  meta?: { title?: string; summary?: string; [k: string]: unknown };
};

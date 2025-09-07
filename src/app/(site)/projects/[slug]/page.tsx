import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projectMeta } from "@/content/projects/manifest";
import ProjectMDX from "@/components/project-mdx.client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const meta = projectMeta[slug as keyof typeof projectMeta];
  if (!meta) return { title: "Project | Nara" };
  return {
    title: `${meta.title} | Nara`,
    description: meta.summary ?? "Project | Nara",
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!(slug in projectMeta)) notFound();
  return (
    <main className="container py-10">
      <ProjectMDX slug={slug} />
    </main>
  );
}

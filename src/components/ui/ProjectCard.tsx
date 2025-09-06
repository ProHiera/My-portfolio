"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

type Props = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  cover: string;
};

export default function ProjectCard({
  slug,
  title,
  summary,
  tags,
  cover,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <Link href={`/projects/${slug}`}>
        <Card className="overflow-hidden hover:shadow-lg transition-shadow">
          <div className="relative aspect-[16/10]">
            <Image src={cover} alt={title} fill className="object-cover" />
          </div>
          <CardContent className="p-5">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm opacity-80">{summary}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border px-2 py-0.5 text-xs opacity-80"
                >
                  {t}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}

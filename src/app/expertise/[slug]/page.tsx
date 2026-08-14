import type { Metadata } from "next";
import { expertise } from "@/data/expertise";
import { ExpertisePageClient } from "@/components/pages/ExpertisePageClient";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return expertise.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = expertise.find((e) => e.slug === slug);

  if (!item) {
    return { title: "Expertise Not Found" };
  }

  return {
    title: `${item.name} Services | Axox`,
    description: item.description,
  };
}

export default async function ExpertisePage({ params }: Props) {
  const { slug } = await params;
  const item = expertise.find((e) => e.slug === slug);

  if (!item) {
    notFound();
  }

  return <ExpertisePageClient slug={slug} />;
}

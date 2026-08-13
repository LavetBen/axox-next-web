import type { Metadata } from "next";
import { industries } from "@/data/industries";
import { IndustryPageClient } from "@/components/pages/IndustryPageClient";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return industries.map((industry) => ({
    slug: industry.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);

  if (!industry) {
    return { title: "Industry Not Found" };
  }

  return {
    title: `${industry.name} Solutions | Axox`,
    description: industry.description,
  };
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);

  if (!industry) {
    notFound();
  }

  return <IndustryPageClient slug={slug} />;
}

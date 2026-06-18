import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BRAND } from "@/lib/brand";
import { LogoMark } from "@/components/Logo";
import { getAllPosts, getPost, formatDate } from "@/lib/blog";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: `Not found — ${BRAND.name}` };
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: `/blog/${post.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  // Article structured data for richer search results.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Organization", name: post.author },
    publisher: { "@type": "Organization", name: BRAND.name },
  };

  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="flex items-center justify-between px-6 py-4" style={{ borderBottom: "0.5px solid var(--border)" }}>
        <Link href="/" className="flex items-center gap-2.5">
          <LogoMark size={20} />
          <span className="font-display text-lg" style={{ color: "var(--text-primary)" }}>{BRAND.name}</span>
        </Link>
        <Link href="/dashboard" className="btn-primary text-sm">Start free →</Link>
      </nav>

      <article className="max-w-2xl mx-auto px-6 py-12">
        <Link href="/blog" className="text-sm" style={{ color: "var(--primary)" }}>← All guides</Link>
        <div className="text-xs mt-5 mb-2" style={{ color: "var(--text-muted)" }}>
          {formatDate(post.date)} · {post.author}
        </div>
        <div className="blog-article" dangerouslySetInnerHTML={{ __html: post.html }} />

        {/* End-of-post CTA */}
        <div className="card p-7 mt-12 text-center" style={{ border: "2px solid var(--primary)", background: "var(--primary-light)" }}>
          <h3 className="font-display text-xl mb-2" style={{ color: "var(--text-primary)" }}>Study smarter with {BRAND.name}</h3>
          <p className="text-sm mb-5" style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>
            Original readings, trap-aware practice questions, spaced-repetition flashcards, and timed mock exams — on an adaptive daily plan. Start free, no card needed.
          </p>
          <Link href="/dashboard" className="btn-primary">Start free →</Link>
        </div>
      </article>
    </div>
  );
}

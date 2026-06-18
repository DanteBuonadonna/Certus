// ============================================================
// Certus — blog loader
// Reads markdown posts from src/content/blog, parses the frontmatter,
// and renders the body to HTML with marked. Used by /blog and the
// per-post pages. New post = drop a new .md file in that folder.
// ============================================================

import fs from "fs";
import path from "path";
import { marked } from "marked";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
}

export interface Post extends PostMeta {
  html: string;
}

function parseFile(file: string): { meta: Omit<PostMeta, "slug">; body: string } {
  const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
  const m = raw.match(/^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/);
  const fm: Record<string, string> = {};
  let body = raw;
  if (m) {
    body = m[2];
    for (const line of m[1].split("\n")) {
      const i = line.indexOf(":");
      if (i > 0) {
        const k = line.slice(0, i).trim();
        const v = line.slice(i + 1).trim().replace(/^["']|["']$/g, "");
        fm[k] = v;
      }
    }
  }
  return {
    meta: {
      title: fm.title ?? "",
      description: fm.description ?? "",
      date: fm.date ?? "",
      author: fm.author ?? "The Certus Team",
    },
    body,
  };
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const slug = f.replace(/\.md$/, "");
      const { meta } = parseFile(f);
      return { slug, ...meta };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1)); // newest first
}

export function getPost(slug: string): Post | null {
  const file = `${slug}.md`;
  if (!fs.existsSync(path.join(BLOG_DIR, file))) return null;
  const { meta, body } = parseFile(file);
  const html = marked.parse(body, { async: false }) as string;
  return { slug, ...meta, html };
}

export function formatDate(d: string): string {
  if (!d) return "";
  const date = new Date(d);
  if (isNaN(date.getTime())) return d;
  return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

import { NextResponse } from "next/server";

export interface BlogPost {
  id: string | number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  link: string;
  tags: string[];
  cover: string;
}

const FALLBACK_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "Image Optimization Tactics: The Practical Guide to Shrinking LCP",
    excerpt:
      "Learn practical techniques to optimize images, convert formats to WebP/AVIF, set proper fetch priorities, and dramatically reduce LCP times.",
    date: "Feb 28, 2026",
    readTime: "6 min read",
    link: "https://shiningsudiptoo.medium.com/image-optimization-tactics-the-practical-guide-to-shrinking-lcp-f11c0bc8fffd",
    tags: ["Lcp", "Web Optimization", "React"],
    cover: "/blogs/react-dropdown.png",
  },
  {
    id: 2,
    title:
      "React Customizable Dropdown: The Complete Guide to Building Better Forms in React",
    excerpt:
      "A deep dive into building highly customizable, accessible, and performant dropdowns in React. Learn how to handle complex form states with ease.",
    date: "Jan 29, 2026",
    readTime: "8 min read",
    link: "https://shiningsudiptoo.medium.com/react-customizable-dropdown-the-complete-guide-to-building-better-forms-in-react-c03953bdba41",
    tags: ["React", "Forms", "UX"],
    cover: "/blogs/react-dropdown.png",
  },
  {
    id: 3,
    title:
      "Complete SEO Guide for Next.js: Make Your Website Search Engine Friendly",
    excerpt:
      "Unlock the full potential of Next.js with advanced SEO strategies. From dynamic metadata to optimized core web vitals, this guide covers it all.",
    date: "Nov 28, 2025",
    readTime: "12 min read",
    link: "https://shiningsudiptoo.medium.com/complete-seo-guide-for-next-js-make-your-website-search-engine-friendly-967b8c34e7fd",
    tags: ["SEO", "Next.js", "Web Performance"],
    cover: "/blogs/nextjs-seo.png",
  },
];

function formatDate(dateStr: string): string {
  try {
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return dateStr;
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
}

function parseMediumXML(xml: string): BlogPost[] {
  const items: BlogPost[] = [];
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  let match;
  let index = 0;

  while ((match = itemRegex.exec(xml)) !== null) {
    const itemXml = match[1];

    // Title
    const titleMatch =
      itemXml.match(/<title><!\[CDATA\[([\s\S]*?)\]\]><\/title>/) ||
      itemXml.match(/<title>([\s\S]*?)<\/title>/);
    const rawTitle = titleMatch ? titleMatch[1].trim() : "Untitled Post";
    const title = rawTitle
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'");

    // Link
    const linkMatch = itemXml.match(/<link>([\s\S]*?)<\/link>/);
    const rawLink = linkMatch ? linkMatch[1].trim() : "#";
    const link = rawLink.split("?")[0];

    // Date
    const pubDateMatch = itemXml.match(/<pubDate>([\s\S]*?)<\/pubDate>/);
    const rawDate = pubDateMatch ? pubDateMatch[1].trim() : "";
    const date = formatDate(rawDate);

    // Tags
    const tags: string[] = [];
    const tagRegex = /<category><!\[CDATA\[([\s\S]*?)\]\]><\/category>/g;
    let tagMatch;
    while ((tagMatch = tagRegex.exec(itemXml)) !== null) {
      const rawTag = tagMatch[1].trim();
      if (rawTag) {
        const formattedTag = rawTag
          .split("-")
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
          .join(" ");
        if (!tags.includes(formattedTag)) {
          tags.push(formattedTag);
        }
      }
    }

    // Content encoded / description
    const contentMatch =
      itemXml.match(/<content:encoded><!\[CDATA\[([\s\S]*?)\]\]><\/content:encoded>/) ||
      itemXml.match(/<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>/);
    const contentHtml = contentMatch ? contentMatch[1] : "";

    // Cover Image
    const imgRegex = /<img[^>]+src=["'](https:\/\/cdn-images-1\.medium\.com\/[^"']+)["']/g;
    let imgMatch;
    let cover = "";
    while ((imgMatch = imgRegex.exec(contentHtml)) !== null) {
      if (!imgMatch[1].includes("stat?event=")) {
        cover = imgMatch[1];
        break;
      }
    }

    // Excerpt calculation
    const plainText = contentHtml
      .replace(/<figcaption>[\s\S]*?<\/figcaption>/gi, "")
      .replace(/<pre>[\s\S]*?<\/pre>/gi, "")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim();

    // Word count & read time
    const words = plainText.split(/\s+/).filter(Boolean);
    const readTimeMinutes = Math.max(1, Math.ceil(words.length / 200));
    const readTime = `${readTimeMinutes} min read`;

    // Excerpt string
    let excerpt = plainText;
    if (excerpt.length > 160) {
      excerpt = excerpt.slice(0, 160).trim() + "...";
    }

    items.push({
      id: index++,
      title,
      excerpt: excerpt || "Click to read the full article on Medium.",
      date: date || "Recent",
      readTime,
      link,
      tags: tags.length > 0 ? tags.slice(0, 3) : ["Technical"],
      cover: cover || "/blogs/react-dropdown.png",
    });
  }

  return items;
}

export async function GET() {
  try {
    const res = await fetch("https://medium.com/feed/@shiningsudiptoo", {
      next: { revalidate: 3600 },
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
    });

    if (!res.ok) {
      throw new Error(`Medium RSS fetch failed with status ${res.status}`);
    }

    const xml = await res.text();
    const posts = parseMediumXML(xml);

    if (posts.length === 0) {
      return NextResponse.json({ posts: FALLBACK_POSTS });
    }

    return NextResponse.json({ posts });
  } catch (error) {
    console.error("Error fetching Medium RSS feed:", error);
    return NextResponse.json({ posts: FALLBACK_POSTS });
  }
}

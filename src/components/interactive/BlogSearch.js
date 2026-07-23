"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, Search } from "lucide-react";
import { blogCategories, blogPosts } from "@/data/blogs";

export function BlogSearch({ limit }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const posts = useMemo(() => {
    return blogPosts
      .filter((post) => {
        const inCategory = category === "All" || post.category === category;
        const text = `${post.title} ${post.category} ${post.summary}`.toLowerCase();
        return inCategory && text.includes(query.toLowerCase());
      })
      .slice(0, limit || blogPosts.length);
  }, [category, limit, query]);

  return (
    <div className="grid gap-6">
      {!limit ? (
        <div className="grid gap-4 lg:grid-cols-[1fr_auto]">
          <label className="form-field">
            <span className="form-label">Search articles</span>
            <span className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate" aria-hidden="true" />
              <input className="form-input pl-10" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search oral health topics..." />
            </span>
          </label>
          <label className="form-field min-w-64">
            <span className="form-label">Category</span>
            <select className="form-input" value={category} onChange={(event) => setCategory(event.target.value)}>
              {blogCategories.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>
        </div>
      ) : null}

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {posts.map((post) => (
          <article className="panel overflow-hidden" key={post.slug}>
            <div className="image-placeholder-grid min-h-44 p-5">
              <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-extrabold text-teal">{post.category}</span>
            </div>
            <div className="p-5">
              <p className="text-xs font-bold text-slate">{post.date} - {post.readingTime}</p>
              <h3 className="mt-2 font-display text-xl font-extrabold text-ink">{post.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate">{post.summary}</p>
              {post.draft ? <p className="mt-3 text-xs font-bold text-amber">Editable draft - clinic review required</p> : null}
              <Link className="button-secondary mt-5 min-h-10 px-4 text-sm" href={`/blogs/${post.slug}`}>
                Read More <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

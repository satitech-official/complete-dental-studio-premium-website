import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BlogSearch } from "@/components/interactive/BlogSearch";
import { PageHero } from "@/components/ui/PageHero";
import { blogPosts } from "@/data/blogs";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Blogs",
  description:
    "Educational oral-health blog with search, category filters, featured article, related articles, draft labels, and SEO metadata readiness.",
  path: "/blogs"
});

export default function BlogsPage() {
  const featured = blogPosts[0];
  return (
    <>
      <PageHero
        eyebrow="Blogs"
        title="Oral healthcare articles and clinic updates"
        copy="Educational drafts are clearly marked and should be reviewed by the clinic before public launch. Content does not replace professional diagnosis."
        breadcrumbs={[{ name: "Blogs", href: "/blogs", current: true }]}
      />
      <section className="section bg-white">
        <div className="container">
          <article className="panel mb-8 grid overflow-hidden lg:grid-cols-[0.9fr_1.1fr]">
            <div className="image-placeholder-grid min-h-72 p-6">
              <span className="rounded-full bg-white px-3 py-1 text-xs font-extrabold text-teal">Featured Article</span>
            </div>
            <div className="p-6 md:p-8">
              <p className="eyebrow">{featured.category}</p>
              <h2 className="heading-md mt-3 font-extrabold text-ink">{featured.title}</h2>
              <p className="mt-4 leading-7 text-slate">{featured.summary}</p>
              <Link className="button-primary mt-6" href={`/blogs/${featured.slug}`}>
                Read Featured Article <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </article>
          <BlogSearch />
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CalendarCheck, Share2 } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { cleanJsonLd, createMetadata } from "@/lib/seo";
import { blogPostSchema, breadcrumbSchema } from "@/lib/schema";
import { blogPosts } from "@/data/blogs";
import { clinic } from "@/data/clinic";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }) {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) return createMetadata({ title: "Blog Not Found", noIndex: true });
  return createMetadata({
    title: post.title,
    description: post.summary,
    path: `/blogs/${post.slug}`
  });
}

export default function BlogDetailPage({ params }) {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) notFound();
  const related = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);
  const breadcrumbs = [
    { name: "Blogs", href: "/blogs" },
    { name: post.title, href: `/blogs/${post.slug}`, current: true }
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: cleanJsonLd(blogPostSchema(post)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: cleanJsonLd(breadcrumbSchema(breadcrumbs)) }} />
      <PageHero eyebrow={post.category} title={post.title} copy={post.summary} breadcrumbs={breadcrumbs} />
      <section className="section bg-white">
        <div className="container grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <aside className="panel h-fit p-6">
            <p className="eyebrow">Article Details</p>
            <dl className="mt-5 grid gap-3 text-sm text-slate">
              <div><dt className="font-extrabold text-deep">Published</dt><dd>{post.date}</dd></div>
              <div><dt className="font-extrabold text-deep">Updated</dt><dd>{post.updated}</dd></div>
              <div><dt className="font-extrabold text-deep">Reading time</dt><dd>{post.readingTime}</dd></div>
              <div><dt className="font-extrabold text-deep">Author</dt><dd>{clinic.doctor}</dd></div>
            </dl>
            <button className="button-secondary mt-6 w-full" type="button">
              <Share2 className="h-4 w-4" aria-hidden="true" />
              Share readiness
            </button>
            {post.draft ? <p className="mt-4 rounded-[8px] bg-ice p-4 text-xs font-bold text-amber">Editable draft - dental team review required before publishing.</p> : null}
          </aside>
          <article className="prose prose-slate max-w-none">
            <nav className="panel not-prose mb-8 p-5" aria-label="Table of contents">
              <p className="font-display text-lg font-extrabold text-ink">Table of Contents</p>
              <ol className="mt-3 grid gap-2 text-sm font-bold text-slate">
                {post.sections.map((section) => (
                  <li key={section.heading}>
                    <a className="hover:text-deep" href={`#${section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                      {section.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
            {post.sections.map((section) => (
              <section className="mb-9" id={section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-")} key={section.heading}>
                <h2 className="heading-md font-extrabold text-ink">{section.heading}</h2>
                <p className="mt-4 leading-8 text-slate">{section.body}</p>
              </section>
            ))}
            <p className="rounded-[8px] bg-ice p-5 text-sm font-bold leading-7 text-deep">{clinic.disclaimer}</p>
            <div className="mt-10">
              <h2 className="heading-md font-extrabold text-ink">Related Articles</h2>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                {related.map((item) => (
                  <Link className="panel p-5 no-underline transition hover:-translate-y-1 hover:shadow-glow" href={`/blogs/${item.slug}`} key={item.slug}>
                    <p className="font-display text-lg font-extrabold text-ink">{item.title}</p>
                    <p className="mt-2 text-sm text-slate">Read More <ArrowRight className="inline h-4 w-4" aria-hidden="true" /></p>
                  </Link>
                ))}
              </div>
            </div>
            <Link className="button-primary not-prose mt-8" href="/book-appointment">
              <CalendarCheck className="h-4 w-4" aria-hidden="true" />
              Request Consultation
            </Link>
          </article>
        </div>
      </section>
    </>
  );
}

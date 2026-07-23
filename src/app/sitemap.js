import { blogPosts } from "@/data/blogs";
import { treatments } from "@/data/treatments";
import { siteUrl } from "@/lib/seo";

const staticRoutes = [
  "",
  "/about-doctor",
  "/about-clinic",
  "/treatments",
  "/smile-gallery",
  "/testimonials",
  "/blogs",
  "/faq",
  "/contact",
  "/book-appointment",
  "/privacy-policy",
  "/terms-and-conditions",
  "/medical-disclaimer"
];

export default function sitemap() {
  const routes = [
    ...staticRoutes,
    ...treatments.map((item) => `/treatments/${item.slug}`),
    ...blogPosts.map((post) => `/blogs/${post.slug}`)
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route.includes("blogs") ? "monthly" : "weekly",
    priority: route === "" ? 1 : 0.75
  }));
}

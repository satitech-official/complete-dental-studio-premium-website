import { clinic } from "@/data/clinic";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://completedentalstudio.example";

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function createMetadata({
  title,
  description,
  path = "/",
  image = "/images/real-dental-operatory.jpg",
  noIndex = false
}) {
  const pageTitle = title ? `${title} | ${clinic.name}` : clinic.name;
  const pageDescription = description || clinic.description;
  const url = absoluteUrl(path);

  return {
    title: pageTitle,
    description: pageDescription,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: url
    },
    robots: noIndex ? { index: false, follow: false } : undefined,
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url,
      siteName: clinic.name,
      images: [
        {
          url: absoluteUrl(image),
          width: 1800,
          height: 1199,
          alt: `${clinic.name} premium dental clinic visual`
        }
      ],
      locale: "en_IN",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [absoluteUrl(image)]
    }
  };
}

export function cleanJsonLd(data) {
  return JSON.stringify(data, (_key, value) => {
    if (value === undefined || value === null || value === "") return undefined;
    if (typeof value === "string" && value.includes("[Add")) return undefined;
    return value;
  }).replace(/</g, "\\u003c");
}

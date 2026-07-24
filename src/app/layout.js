import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./globals.css";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { BasePathGuard } from "@/components/layout/BasePathGuard";
import { CookieConsent } from "@/components/layout/CookieConsent";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ScrollEffects } from "@/components/layout/ScrollEffects";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { clinic } from "@/data/clinic";
import { cleanJsonLd, createMetadata } from "@/lib/seo";
import { dentistSchema } from "@/lib/schema";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://satitech-official.github.io/complete-dental-studio-premium-website";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata = {
  ...createMetadata({
    title: "Dentist and Dental Surgery in Indore",
    description:
      "Complete Dental Studio in Indore is led by Dr. Nikita Rawat Jain, Consultant Oral and Dental Surgeon and Cosmetic Dental Surgeon."
  }),
  metadataBase: new URL(siteUrl),
  icons: {
    icon: `${basePath}/images/instagram-profile.jpg`,
    shortcut: `${basePath}/images/instagram-profile.jpg`
  },
  openGraph: {
    title: "Complete Dental Studio | Premium Dental Care in Indore",
    description: "Modern dental care, cosmetic dentistry and oral surgery by Dr. Nikita Rawat Jain.",
    url: siteUrl,
    siteName: "Complete Dental Studio",
    type: "website",
    images: [`${basePath}/images/real-dental-operatory.jpg`]
  },
  twitter: {
    card: "summary_large_image",
    title: "Complete Dental Studio",
    description: "Premium dental care in Indore.",
    images: [`${basePath}/images/real-dental-operatory.jpg`]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <BasePathGuard />
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SmoothScroll />
        <ScrollEffects />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: cleanJsonLd(dentistSchema()) }}
        />
        <div className="site-shell">
          <AnnouncementBar />
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
          <FloatingActions />
          <CookieConsent />
        </div>
        <div className="sr-only" aria-live="polite">
          {clinic.name} page loaded.
        </div>
      </body>
    </html>
  );
}

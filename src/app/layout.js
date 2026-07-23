import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./globals.css";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { CookieConsent } from "@/components/layout/CookieConsent";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ScrollEffects } from "@/components/layout/ScrollEffects";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { clinic } from "@/data/clinic";
import { cleanJsonLd, createMetadata } from "@/lib/seo";
import { dentistSchema } from "@/lib/schema";

export const metadata = createMetadata({
  title: "Dentist and Dental Surgery in Indore",
  description:
    "Complete Dental Studio in Indore is led by Dr. Nikita Rawat Jain, Consultant Oral and Dental Surgeon and Cosmetic Dental Surgeon."
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
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

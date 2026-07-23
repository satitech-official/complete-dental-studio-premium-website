# Complete Dental Studio Website

Premium, responsive Next.js website for Complete Dental Studio and Dr. Nikita Rawat Jain. The build is structured for verified clinic information, future CMS integration, appointment workflow integration, and Vercel deployment.

## Technology Stack

- Next.js with JavaScript
- Tailwind CSS
- Framer Motion
- GSAP with ScrollTrigger
- Lenis smooth scrolling
- React Hook Form with Zod validation
- Swiper carousel
- Embla-ready dependency
- React Compare Slider
- Lucide React icons
- Lottie React
- Next Image
- API-route-ready form handlers

## Folder Structure

```text
src/
  app/                 Route pages, API routes, metadata, sitemap, robots
  components/          Layout, home, forms, interactive, and UI components
  data/                Editable clinic, treatments, FAQs, blogs, gallery, SEO data
  lib/                 Validation, WhatsApp, SEO, and schema helpers
public/images/         Replaceable website assets
```

## Installation

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run start
```

## Environment Variables

Copy `.env.example` to `.env.local` and update:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_WHATSAPP_NUMBER`
- `NEXT_PUBLIC_PRIMARY_PHONE`
- `NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL`
- `APPOINTMENT_EMAIL_TO`
- `CONTACT_EMAIL_TO`
- Email provider credentials, CAPTCHA, and rate-limiting secrets when implemented

## Updating Clinic Information

Most clinic details live in `src/data/clinic.js`:

- Address, city, state, PIN
- Phone, emergency phone, WhatsApp, email
- Instagram profile URL
- Business hours
- Social links
- Doctor qualifications, certifications, registration number
- Technologies and clinic equipment
- Google rating and review data once verified

Do not add degrees, memberships, certifications, ratings, reviews, treatment results, or patient photos unless verified and approved.

## Adding Treatments

Edit `src/data/treatments.js`. Add a new object with:

- `slug`
- `title`
- `category`
- `summary`
- `concern`
- `steps`
- `duration`
- `faqs`

The route `/treatments/[slug]` is generated automatically.

## Adding Blog Posts

Edit `src/data/blogs.js`. Draft content is clearly marked. Clinic review is required before publication.

## Appointment and Contact Forms

The forms validate on the client and server. API routes are in:

- `src/app/api/appointment/route.js`
- `src/app/api/contact/route.js`

They currently return demo success responses. Connect Resend, Nodemailer, SMTP, a CRM, or an appointment-management system in these API routes. Keep API keys in environment variables only.

## WhatsApp Configuration

Templates live in `src/lib/whatsapp.js`. Update the number through `NEXT_PUBLIC_WHATSAPP_NUMBER` or `src/data/clinic.js`.

## Google Maps

Update `NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL` and `clinic.contact.directionsUrl`. The map component is `src/components/ui/MapSection.js`.

## Image Replacement

See `public/images/README.md` and `public/images/ATTRIBUTION.md`. The current build uses the public Instagram profile image plus real dental-clinic photos. Replace support visuals with clinic-owned originals before launch where possible.

## SEO and Schema

- Metadata helper: `src/lib/seo.js`
- Schema helpers: `src/lib/schema.js`
- SEO readiness data: `src/data/seo.js`
- Sitemap: `src/app/sitemap.js`
- Robots: `src/app/robots.js`

Review and aggregate rating schema are intentionally disabled until genuine review data is available.

## Vercel Deployment

1. Push the project to a Git provider.
2. Import the repository into Vercel.
3. Set environment variables from `.env.example`.
4. Run the default Next.js build command: `npm run build`.
5. Verify routes, forms, metadata, sitemap, and mobile layout after deployment.

## Future CMS Roadmap

Recommended CMS boundaries:

- Clinic profile and business hours
- Doctor profile and verified credentials
- Treatment pages
- Blog posts and author review workflow
- Gallery cases with consent records
- Testimonials and moderation status
- SEO metadata

Keep clinical approvals and consent status as explicit fields in the CMS.

## Spam Protection Roadmap

- Add server-side rate limiting.
- Add CAPTCHA or Turnstile.
- Keep honeypot fields.
- Sanitize all form inputs.
- Add safe error messages.
- Add email provider event logging.

## QA Checklist

- All navigation links load.
- Mobile menu opens, closes, and locks background scroll.
- Appointment form validates each step and shows success/error states.
- Contact form validates and handles success/error states.
- WhatsApp messages are URL-encoded.
- Call links use `tel:`.
- No unverified reviews, ratings, awards, memberships, or patient results are published.
- All treatment pages include disclaimers.
- FAQ search and accordion work by keyboard.
- Smile gallery uses demo placeholders until consented images are supplied.
- Sitemap and robots routes are generated.
- `npm run build` completes before deployment.

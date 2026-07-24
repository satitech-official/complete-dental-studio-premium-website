export const defaultDentalVisual = {
  src: "/images/real-treatment-room.jpg",
  alt: "Modern dental treatment room at Complete Dental Studio"
};

export const treatmentVisuals = {
  "cosmetic-dentistry": {
    src: "/images/gallery-veneers-after.jpg",
    alt: "Cosmetic dentistry smile restoration reference"
  },
  "smile-makeover": {
    src: "/images/gallery-full-mouth-after.jpg",
    alt: "Full smile makeover restoration reference"
  },
  "teeth-whitening": {
    src: "/images/gallery-whitening-process.jpg",
    alt: "Professional teeth whitening process reference"
  },
  "dental-implants": {
    src: "/images/gallery-implant-restoration.jpg",
    alt: "Dental implant restoration reference"
  },
  "root-canal-treatment": {
    src: "/images/gallery-crown-before.jpg",
    alt: "Tooth restoration assessment before root canal and crown care"
  },
  "crowns-and-bridges": {
    src: "/images/gallery-crown-after.jpg",
    alt: "Dental crown restoration reference"
  },
  "dental-veneers": {
    src: "/images/gallery-veneers-after.jpg",
    alt: "Dental veneers smile enhancement reference"
  },
  orthodontics: {
    src: "/images/gallery-braces-after.jpg",
    alt: "Orthodontic alignment treatment reference"
  },
  "invisible-aligners": {
    src: "/images/gallery-braces-before.jpg",
    alt: "Dental alignment assessment reference"
  },
  "pediatric-dentistry": {
    src: "/images/real-dental-operatory.jpg",
    alt: "Clean and comfortable dental operatory for family dental care"
  },
  "gum-treatment": {
    src: "/images/real-treatment-room.jpg",
    alt: "Clinical treatment room prepared for gum care"
  },
  "oral-surgery": {
    src: "/images/gallery-implant-fixture.jpg",
    alt: "Oral surgery and implant planning reference"
  },
  "tooth-extraction": {
    src: "/images/real-treatment-room.jpg",
    alt: "Dental treatment room prepared for oral surgery care"
  },
  dentures: {
    src: "/images/gallery-cast-after.jpg",
    alt: "Dental cast and denture restoration reference"
  },
  "full-mouth-rehabilitation": {
    src: "/images/gallery-full-mouth-after.jpg",
    alt: "Full mouth rehabilitation reference"
  },
  "preventive-dentistry": {
    src: "/images/real-dental-operatory.jpg",
    alt: "Modern dental operatory for preventive dental care"
  },
  "digital-x-rays": {
    src: "/images/gallery-implant-fixture.jpg",
    alt: "Digital diagnostic imaging and implant planning reference"
  },
  "routine-dental-checkups": {
    src: "/images/real-dental-operatory.jpg",
    alt: "Dental operatory for routine dental checkups"
  }
};

export const blogVisuals = {
  "correct-brushing-technique": {
    src: "/images/real-dental-operatory.jpg",
    alt: "Professional dental setting for oral hygiene guidance"
  },
  "routine-dental-checkups": {
    src: "/images/real-treatment-room.jpg",
    alt: "Modern treatment room for routine dental checkups"
  },
  "protect-childrens-teeth": {
    src: "/images/gallery-braces-before.jpg",
    alt: "Child and teen dental alignment assessment reference"
  },
  "when-tooth-pain-needs-care": {
    src: "/images/gallery-crown-before.jpg",
    alt: "Damaged tooth assessment reference for professional dental care"
  }
};

export function getTreatmentVisual(slug) {
  return treatmentVisuals[slug] || defaultDentalVisual;
}

export function getBlogVisual(slug) {
  return blogVisuals[slug] || defaultDentalVisual;
}

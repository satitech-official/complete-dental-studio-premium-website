export const galleryCategories = [
  "All",
  "Smile Makeovers",
  "Teeth Whitening",
  "Veneers",
  "Dental Implants",
  "Crowns and Bridges",
  "Orthodontics",
  "Full Mouth Rehabilitation",
  "Clinic Photos"
];

const referenceConsent = "Illustrative reference - not a Complete Dental Studio patient case";

export const galleryCases = [
  {
    id: "reference-veneers-before-after",
    category: "Veneers",
    title: "Veneers smile refinement",
    consent: referenceConsent,
    summary:
      "A real before-and-after reference image showing cosmetic veneer planning for tooth shape, shade, and smile proportion.",
    beforeLabel: "Before",
    afterLabel: "After",
    beforeImage: "/images/gallery-veneers-before.jpg",
    afterImage: "/images/gallery-veneers-after.jpg",
    cardImage: "/images/gallery-veneers-after.jpg",
    beforeAlt: "Before reference image showing teeth before veneer treatment",
    afterAlt: "After reference image showing teeth after veneer treatment",
    sourceName: "Wikimedia Commons - Faccette estetiche confronto prima e dopo",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Faccette_estetiche_confronto_prima_e_dopo.jpg"
  },
  {
    id: "reference-braces-before-after",
    category: "Orthodontics",
    title: "Orthodontic alignment comparison",
    consent: referenceConsent,
    summary:
      "A real orthodontic before-and-after reference photo demonstrating how alignment can change after planned treatment.",
    beforeLabel: "Before",
    afterLabel: "After",
    beforeImage: "/images/gallery-braces-before.jpg",
    afterImage: "/images/gallery-braces-after.jpg",
    cardImage: "/images/gallery-braces-after.jpg",
    beforeAlt: "Before orthodontic reference image with crowded teeth",
    afterAlt: "After orthodontic reference image with improved alignment",
    sourceName: "Wikimedia Commons - Orthodontic treatment teeth braces",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Before_and_After_Photos_following_Orthodontic_Treatment_-_Teeth_Braces.jpg"
  },
  {
    id: "reference-orthodontic-casts",
    category: "Orthodontics",
    title: "Study model planning comparison",
    consent: referenceConsent,
    summary:
      "A real dental model comparison useful for explaining orthodontic planning, bite evaluation, and progress tracking.",
    beforeLabel: "Before",
    afterLabel: "After",
    beforeImage: "/images/gallery-cast-before.jpg",
    afterImage: "/images/gallery-cast-after.jpg",
    cardImage: "/images/gallery-cast-after.jpg",
    beforeAlt: "Before orthodontic dental cast reference image",
    afterAlt: "After orthodontic dental cast reference image",
    sourceName: "Wikimedia Commons - Gipsabguss Gebiss",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Gipsabguss_Gebiss.jpg"
  },
  {
    id: "reference-crown-radiograph",
    category: "Crowns and Bridges",
    title: "Crown restoration planning",
    consent: referenceConsent,
    summary:
      "A radiograph-based before-and-after reference visual for explaining crown restoration planning and clinical review.",
    beforeLabel: "Before",
    afterLabel: "Planned",
    beforeImage: "/images/gallery-crown-before.jpg",
    afterImage: "/images/gallery-crown-after.jpg",
    cardImage: "/images/gallery-crown-after.jpg",
    beforeAlt: "Before dental radiograph reference image",
    afterAlt: "After dental radiograph reference image with crown planning overlay",
    sourceName: "Wikimedia Commons - -5-CL before and after",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:-5-CL-before_and_after.jpg"
  },
  {
    id: "reference-full-mouth-rehab",
    category: "Full Mouth Rehabilitation",
    title: "Full-mouth rehabilitation reference",
    consent: referenceConsent,
    summary:
      "A real clinical reference showing full-mouth rehabilitation planning. Results vary and require diagnosis, staged planning, and follow-up.",
    beforeLabel: "Before",
    afterLabel: "After",
    beforeImage: "/images/gallery-full-mouth-before.jpg",
    afterImage: "/images/gallery-full-mouth-after.jpg",
    cardImage: "/images/gallery-full-mouth-after.jpg",
    beforeAlt: "Before full-mouth rehabilitation reference image",
    afterAlt: "After full-mouth rehabilitation reference image",
    sourceName: "Wikimedia Commons - Seaton eyes covered",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Seaton_eyes_covered.jpg"
  },
  {
    id: "reference-implant-restoration",
    category: "Dental Implants",
    title: "Implant component to crown restoration",
    consent: "Educational sequence - not a same-patient before-and-after case",
    summary:
      "A real implant fixture and crown restoration reference pair for explaining the parts of an implant-supported restoration.",
    beforeLabel: "Fixture",
    afterLabel: "Crown",
    beforeImage: "/images/gallery-implant-fixture.jpg",
    afterImage: "/images/gallery-implant-restoration.jpg",
    cardImage: "/images/gallery-implant-restoration.jpg",
    beforeAlt: "Dental implant fixture reference image",
    afterAlt: "Dental implant crown and abutment reference image",
    sourceName: "Wikimedia Commons - Dentalimplant and Single crown implant",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Single_crown_implant.jpg"
  },
  {
    id: "reference-whitening-process",
    category: "Teeth Whitening",
    title: "In-office whitening visual",
    consent: "Treatment-process reference - not an outcome claim",
    summary:
      "A real whitening procedure image added as a treatment-process visual. Actual shade change varies after clinical assessment.",
    cardImage: "/images/gallery-whitening-process.jpg",
    imageAlt: "Real in-office teeth whitening process reference photo",
    sourceName: "Wikimedia Commons - Office Teeth Whitening",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Office_Teeth_Whitening.jpg"
  },
  {
    id: "clinic-operatory-photo",
    category: "Clinic Photos",
    title: "Modern dental operatory",
    consent: "Licensed real clinic-style image",
    summary:
      "A real dental operatory photograph used as a professional clinic-environment visual until original clinic photos are supplied.",
    cardImage: "/images/real-dental-operatory.jpg",
    imageAlt: "Modern dental operatory photograph",
    sourceName: "Unsplash - dental operatory photo",
    sourceUrl: "https://unsplash.com/photos/yuTlQYeehHs"
  },
  {
    id: "clinic-treatment-room-photo",
    category: "Clinic Photos",
    title: "Treatment room detail",
    consent: "Licensed real clinic-style image",
    summary:
      "A real treatment-room photograph added to make the gallery fuller while waiting for original Complete Dental Studio interior photos.",
    cardImage: "/images/real-treatment-room.jpg",
    imageAlt: "Dental treatment room photograph",
    sourceName: "Unsplash - dental treatment room photo",
    sourceUrl: "https://unsplash.com/photos/dNeRKDj0T7I"
  }
];

export const clinic = {
  name: "Complete Dental Studio",
  doctor: "Dr. Nikita Rawat Jain",
  experience: "11 Years",
  specializations: [
    "Dentist and Dental Surgery",
    "Consultant Oral and Dental Surgeon",
    "Cosmetic Dental Surgeon"
  ],
  achievement: "ISP Merit (1st Rank)",
  tagline: "Complete Care. Confident Smiles.",
  description:
    "Dentist and dental surgery clinic in Indore led by Dr. Nikita Rawat Jain, Consultant Oral and Dental Surgeon and Cosmetic Dental Surgeon, practising dentistry since 11 years.",
  editableNotice:
    "Clinic details updated from the public Instagram profile and provided clinic information. Keep degrees, registrations, hours, ratings, and patient results editable until verified.",
  contact: {
    address: "E-87, 1st Floor, Surana's, LIG Link Road, Anurag Nagar (Main Road)",
    city: "Indore",
    state: "Madhya Pradesh",
    pinCode: "452011",
    primaryPhone: {
      display: "+91-9009398787",
      href: `tel:${process.env.NEXT_PUBLIC_PRIMARY_PHONE || "+919009398787"}`
    },
    emergencyPhone: {
      display: "+91-9009398787",
      href: "tel:+919009398787"
    },
    whatsapp: {
      display: "+91-9009398787",
      number: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919009398787"
    },
    email: "",
    mapsEmbed:
      process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL ||
      "https://www.google.com/maps?q=Complete%20Dental%20Studio%20E-87%201st%20Floor%20Surana%27s%20LIG%20Link%20Road%20Anurag%20Nagar%20Indore%20452011&output=embed",
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=Complete%20Dental%20Studio%20E-87%201st%20Floor%20Surana%27s%20LIG%20Link%20Road%20Anurag%20Nagar%20Indore%20452011",
    businessProfileUrl: "https://www.instagram.com/complete_dental_studio/",
    nearbyLandmark: "Surana's, LIG Link Road, Anurag Nagar Main Road",
    parking: "Please call the clinic to confirm current parking guidance."
  },
  hours: [
    { day: "Clinic hours", time: "Please call to confirm current timings" },
    { day: "Emergency concern", time: "Call +91-9009398787" }
  ],
  socials: {
    instagram: "https://www.instagram.com/complete_dental_studio/",
    facebook: "",
    youtube: ""
  },
  doctorProfile: {
    professionalTitles: [
      "Dentist and Dental Surgery",
      "Consultant Oral and Dental Surgeon",
      "Cosmetic Dental Surgeon"
    ],
    qualifications: ["Add verified degree details before launch"],
    registrationNumber: "[Add only if approved]",
    certifications: ["Add verified certification details before launch"],
    philosophy:
      "Every consultation should help patients feel informed, respected, and confident about the next step in their oral health journey.",
    journey: [
      {
        title: "Education",
        detail: "[Add institution and year once verified]"
      },
      {
        title: "Clinical Training",
        detail: "[Add training details once verified]"
      },
      {
        title: "ISP Merit Achievement",
        detail: "ISP Merit (1st Rank), as listed on the public Instagram profile."
      },
      {
        title: "Professional Practice",
        detail: "Practising dentistry since 11 years with oral and dental surgery and cosmetic dentistry focus."
      },
      {
        title: "Complete Dental Studio",
        detail: "Located at E-87, 1st Floor, Surana's, LIG Link Road, Anurag Nagar (Main Road), Indore."
      }
    ]
  },
  technology: [
    "Digital X-rays",
    "Sterilization systems",
    "Modern dental chair",
    "Diagnostic technology",
    "Dental imaging",
    "Patient comfort equipment"
  ],
  disclaimer:
    "The information provided on this website is intended for general educational purposes and should not be considered a substitute for professional dental consultation, diagnosis, or treatment. Treatment suitability, duration, cost, and results may vary according to individual clinical conditions."
};

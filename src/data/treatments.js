import {
  Activity,
  AlignCenter,
  Baby,
  BadgeCheck,
  Bone,
  Braces,
  Brush,
  CircleDot,
  HeartPulse,
  ScanLine,
  ShieldCheck,
  Smile,
  Sparkles,
  Stethoscope,
  Syringe,
  WandSparkles
} from "lucide-react";

export const treatmentCategories = [
  "All",
  "Cosmetic Dentistry",
  "Restorative Dentistry",
  "Surgical Dentistry",
  "Orthodontics",
  "Pediatric Dentistry",
  "Preventive Dentistry",
  "Gum Care",
  "General Dentistry"
];

const commonDetail = {
  diagnosis:
    "A clinical consultation is needed to understand symptoms, medical history, oral hygiene, X-rays or scans where appropriate, and treatment suitability.",
  technology:
    "Technology fields are editable until the clinic confirms exact equipment. The website is prepared for digital imaging, sterilization, chair-side diagnostics, and comfort-focused care notes.",
  benefits: [
    "Supports better oral health and function",
    "Can improve comfort, confidence, or appearance where clinically suitable",
    "Uses a personalized plan after examination"
  ],
  aftercare:
    "Aftercare may include medication guidance, hygiene instructions, dietary care, review visits, and maintenance advice. Exact instructions depend on the procedure and clinical condition.",
  disclaimer:
    "Treatment duration, suitability, cost, and results vary between patients. A professional consultation is required before deciding any treatment."
};

export const treatments = [
  {
    slug: "cosmetic-dentistry",
    title: "Cosmetic Dentistry",
    category: "Cosmetic Dentistry",
    icon: Sparkles,
    summary:
      "Aesthetic smile care focused on color, shape, proportion, and harmony while protecting long-term oral health.",
    concern: "Patients exploring smile enhancement, discoloration, minor chips, spacing, or cosmetic refinements.",
    steps: ["Smile assessment", "Clinical records", "Treatment options", "Aesthetic planning", "Phased care"],
    duration: "Varies by plan; simple procedures may be shorter, multi-step smile plans may need several visits.",
    faqs: [
      ["Is cosmetic dentistry suitable for everyone?", "Suitability depends on gum health, tooth structure, bite, and patient goals."],
      ["Will results look natural?", "The aim is a balanced, natural-looking result planned around facial features and oral health."]
    ]
  },
  {
    slug: "smile-makeover",
    title: "Smile Makeover",
    category: "Cosmetic Dentistry",
    icon: WandSparkles,
    summary:
      "A coordinated approach that may combine whitening, veneers, crowns, alignment, or gum care based on clinical needs.",
    concern: "Patients who want a comprehensive review of smile color, tooth shape, symmetry, and visible concerns.",
    steps: ["Smile goals discussion", "Oral health check", "Digital or photographic planning", "Sequenced treatment", "Maintenance plan"],
    duration: "Ranges from a few visits to a longer phased plan depending on selected treatments.",
    faqs: [
      ["Can I preview my smile?", "Preview workflows can be added where digital smile planning is available."],
      ["Is it only cosmetic?", "A good plan considers function, gum health, bite, and aesthetics together."]
    ]
  },
  {
    slug: "teeth-whitening",
    title: "Teeth Whitening",
    category: "Cosmetic Dentistry",
    icon: Sparkles,
    summary:
      "Professional whitening guidance for suitable patients who want to address external stains or tooth shade concerns.",
    concern: "Staining from food habits, age-related shade changes, or event-ready smile brightening.",
    steps: ["Shade assessment", "Sensitivity review", "Cleaning if needed", "Whitening protocol", "Maintenance guidance"],
    duration: "Depends on whitening method and sensitivity profile.",
    faqs: [
      ["Is whitening permanent?", "Whitening is not permanent; maintenance depends on diet, hygiene, and habits."],
      ["Can whitening cause sensitivity?", "Some patients experience temporary sensitivity, which should be discussed before treatment."]
    ]
  },
  {
    slug: "dental-implants",
    title: "Dental Implants",
    category: "Surgical Dentistry",
    icon: Bone,
    summary:
      "Implant consultation readiness for replacing missing teeth where bone health and clinical conditions allow.",
    concern: "Missing teeth, loose dentures, difficulty chewing, or long-term tooth replacement planning.",
    steps: ["Implant consultation", "Imaging and bone review", "Surgical planning", "Implant placement if suitable", "Restoration and follow-up"],
    duration: "Often planned over multiple visits and healing phases.",
    faqs: [
      ["Is everyone suitable for implants?", "Suitability depends on bone, gum health, medical history, habits, and diagnosis."],
      ["Are results guaranteed?", "No treatment result is guaranteed. Maintenance and individual biology matter."]
    ]
  },
  {
    slug: "root-canal-treatment",
    title: "Root Canal Treatment",
    category: "Restorative Dentistry",
    icon: Activity,
    summary:
      "Care for infected or inflamed tooth pulp, aiming to preserve the natural tooth where clinically possible.",
    concern: "Tooth pain, lingering sensitivity, swelling, deep decay, or infection signs.",
    steps: ["Diagnosis and X-ray", "Local anesthesia plan", "Canal cleaning", "Sealing", "Restoration or crown planning"],
    duration: "May take one or more appointments based on infection and tooth complexity.",
    faqs: [
      ["Will it be painful?", "Modern care is comfort-focused, but comfort varies and should be discussed with the clinician."],
      ["Will I need a crown?", "A crown may be recommended when the tooth needs added strength after treatment."]
    ]
  },
  {
    slug: "crowns-and-bridges",
    title: "Crowns and Bridges",
    category: "Restorative Dentistry",
    icon: BadgeCheck,
    summary:
      "Restorative options for strengthening damaged teeth or replacing missing teeth with planned prosthetic support.",
    concern: "Broken teeth, large fillings, missing teeth, or post-root-canal protection.",
    steps: ["Clinical assessment", "Tooth preparation", "Impressions or scans", "Temporary restoration", "Final fit and review"],
    duration: "Usually planned across multiple appointments.",
    faqs: [
      ["How long do crowns last?", "Longevity depends on material, bite, hygiene, habits, and follow-up care."],
      ["Are bridges always possible?", "Bridge suitability depends on neighboring teeth, gum support, and oral health."]
    ]
  },
  {
    slug: "dental-veneers",
    title: "Dental Veneers",
    category: "Cosmetic Dentistry",
    icon: AlignCenter,
    summary:
      "Thin aesthetic restorations that may improve tooth shape, color, or proportions for suitable cases.",
    concern: "Visible chips, spacing, discoloration, uneven edges, or cosmetic smile concerns.",
    steps: ["Smile analysis", "Mockup planning", "Minimal preparation if appropriate", "Veneer fabrication", "Bonding and care review"],
    duration: "Usually multiple visits after planning.",
    faqs: [
      ["Are veneers reversible?", "Some veneer plans involve tooth preparation, so reversibility must be discussed individually."],
      ["Do veneers stain?", "Material and maintenance influence stain resistance."]
    ]
  },
  {
    slug: "orthodontics",
    title: "Orthodontics",
    category: "Orthodontics",
    icon: Braces,
    summary:
      "Alignment consultation for bite, crowding, spacing, and smile harmony using appropriate orthodontic options.",
    concern: "Crooked teeth, gaps, crowding, bite concerns, or relapse after earlier orthodontics.",
    steps: ["Bite assessment", "Records and imaging", "Treatment option discussion", "Active alignment", "Retention planning"],
    duration: "Varies widely based on complexity and appliance type.",
    faqs: [
      ["Do adults need orthodontics?", "Adults may be suitable depending on oral health and alignment needs."],
      ["Is retention important?", "Retention helps maintain alignment after active treatment."]
    ]
  },
  {
    slug: "invisible-aligners",
    title: "Invisible Aligners",
    category: "Orthodontics",
    icon: ScanLine,
    summary:
      "Clear aligner planning readiness for patients seeking a discreet alignment option where clinically suitable.",
    concern: "Mild to moderate spacing, crowding, or alignment concerns.",
    steps: ["Aligner suitability check", "Records", "Digital plan readiness", "Aligner wear", "Monitoring and retention"],
    duration: "Depends on movement complexity and patient compliance.",
    faqs: [
      ["Are aligners removable?", "Most clear aligners are removable but must be worn as advised."],
      ["Can aligners fix every case?", "Some bite or movement needs may require alternate orthodontic care."]
    ]
  },
  {
    slug: "pediatric-dentistry",
    title: "Pediatric Dentistry",
    category: "Pediatric Dentistry",
    icon: Baby,
    summary:
      "Child-friendly preventive and restorative care focused on comfort, guidance, and early oral habits.",
    concern: "Child dental visits, cavities, tooth pain, habit counseling, or preventive checkups.",
    steps: ["Gentle introduction", "Oral exam", "Parent guidance", "Preventive or restorative plan", "Follow-up routine"],
    duration: "Visit length depends on the child, concern, and cooperation.",
    faqs: [
      ["When should children visit a dentist?", "Early dental visits help establish habits and detect problems sooner."],
      ["How do you support anxious children?", "A calm, step-by-step approach can help children feel safer."]
    ]
  },
  {
    slug: "gum-treatment",
    title: "Gum Treatment",
    category: "Gum Care",
    icon: HeartPulse,
    summary:
      "Assessment and care for bleeding gums, inflammation, deposits, gum recession, or periodontal concerns.",
    concern: "Bleeding gums, swelling, bad breath, loose teeth, or gum discomfort.",
    steps: ["Gum assessment", "Cleaning or deep cleaning plan", "Home care guidance", "Review", "Maintenance schedule"],
    duration: "Depends on severity and number of visits required.",
    faqs: [
      ["Are bleeding gums normal?", "Bleeding gums should be assessed; they can be a sign of inflammation."],
      ["Can gum disease return?", "Maintenance and oral hygiene are important for long-term gum health."]
    ]
  },
  {
    slug: "oral-surgery",
    title: "Oral Surgery",
    category: "Surgical Dentistry",
    icon: Syringe,
    summary:
      "Surgical dentistry consultation for clinically indicated procedures with safety, planning, and aftercare emphasis.",
    concern: "Impacted teeth, surgical extractions, oral lesions, infection, or pre-prosthetic needs.",
    steps: ["Surgical consultation", "Imaging if required", "Risk discussion", "Procedure planning", "Recovery follow-up"],
    duration: "Depends on procedure complexity.",
    faqs: [
      ["Will I receive aftercare instructions?", "Yes, procedure-specific aftercare should be provided before leaving."],
      ["Can surgery be done the same day?", "Same-day care depends on diagnosis, consent, preparation, and clinical safety."]
    ]
  },
  {
    slug: "tooth-extraction",
    title: "Tooth Extraction",
    category: "Surgical Dentistry",
    icon: Smile,
    summary:
      "Extraction planning when a tooth cannot be restored or removal is clinically indicated.",
    concern: "Severe decay, infection, damaged teeth, mobility, or orthodontic/surgical planning.",
    steps: ["Diagnosis", "X-ray if needed", "Anesthesia and consent", "Extraction", "Healing and replacement discussion"],
    duration: "Simple and surgical extractions vary in time and healing.",
    faqs: [
      ["Is extraction always necessary?", "Preserving teeth is considered where possible; extraction depends on diagnosis."],
      ["What happens after extraction?", "Replacement options and healing guidance should be discussed."]
    ]
  },
  {
    slug: "dentures",
    title: "Dentures",
    category: "Restorative Dentistry",
    icon: ShieldCheck,
    summary:
      "Removable tooth replacement planning for function, appearance, and comfort.",
    concern: "Multiple missing teeth, loose existing dentures, chewing difficulty, or affordability needs.",
    steps: ["Oral assessment", "Impressions", "Bite records", "Trial", "Delivery and adjustment"],
    duration: "Usually multiple visits with adjustment follow-up.",
    faqs: [
      ["Do dentures need adjustment?", "Adjustments may be needed as the mouth adapts."],
      ["Can dentures be implant-supported?", "Implant support may be an option after clinical assessment."]
    ]
  },
  {
    slug: "full-mouth-rehabilitation",
    title: "Full Mouth Rehabilitation",
    category: "Restorative Dentistry",
    icon: Stethoscope,
    summary:
      "Comprehensive planning for complex bite, function, wear, missing teeth, or multi-area dental concerns.",
    concern: "Multiple damaged teeth, bite collapse, severe wear, missing teeth, or combined cosmetic and functional needs.",
    steps: ["Comprehensive records", "Diagnosis", "Phased plan", "Priority treatment", "Long-term maintenance"],
    duration: "A staged plan often spans several visits or phases.",
    faqs: [
      ["Is full mouth care completed quickly?", "Complex plans usually require phased treatment and review."],
      ["Will all teeth be treated?", "Only clinically indicated teeth and concerns are included in the plan."]
    ]
  },
  {
    slug: "preventive-dentistry",
    title: "Preventive Dentistry",
    category: "Preventive Dentistry",
    icon: Brush,
    summary:
      "Routine care, education, cleaning, and risk assessment to prevent dental problems where possible.",
    concern: "Routine checkups, cleaning, early cavity detection, gum health, and home-care guidance.",
    steps: ["Dental checkup", "Risk review", "Cleaning if needed", "Home-care plan", "Recall schedule"],
    duration: "Routine visits are generally shorter, but exact time varies.",
    faqs: [
      ["How often should I visit?", "Recall frequency depends on oral health, risk factors, and clinical advice."],
      ["Can prevention reduce future treatment?", "Preventive care can help detect and manage concerns earlier."]
    ]
  },
  {
    slug: "digital-x-rays",
    title: "Digital X-Rays",
    category: "General Dentistry",
    icon: ScanLine,
    summary:
      "Diagnostic imaging readiness to support clinical assessment where X-rays are indicated.",
    concern: "Hidden decay, infection, bone support, wisdom teeth, trauma, or treatment planning.",
    steps: ["Clinical indication", "Protective protocol", "Image capture", "Diagnosis discussion", "Treatment planning"],
    duration: "Usually brief when clinically required.",
    faqs: [
      ["Are X-rays always needed?", "X-rays are recommended only when they add diagnostic value."],
      ["Can I avoid unnecessary imaging?", "Your dentist should explain why imaging is advised."]
    ]
  },
  {
    slug: "routine-dental-checkups",
    title: "Routine Dental Checkups",
    category: "General Dentistry",
    icon: CircleDot,
    summary:
      "Regular oral health reviews to detect issues early and support long-term dental maintenance.",
    concern: "General oral health, preventive cleaning, pain-free checkups, or follow-up visits.",
    steps: ["Medical and dental history", "Oral examination", "Gum and tooth review", "Advice", "Next steps"],
    duration: "Depends on individual needs and whether cleaning or imaging is required.",
    faqs: [
      ["Do I need a checkup if nothing hurts?", "Dental problems can begin without pain, so preventive visits can still be helpful."],
      ["Will I get a treatment plan?", "If concerns are found, the team can outline options and next steps."]
    ]
  }
].map((treatment) => ({
  ...commonDetail,
  ...treatment,
  related: []
}));

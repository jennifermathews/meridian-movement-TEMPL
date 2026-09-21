export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  icon: string;
  slug: string;
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  credentials: string;
  specialties: string[];
  bio: string;
  role: "leadership" | "clinical" | "support";
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  condition: string;
  rating: number;
}

export interface Stat {
  label: string;
  value: string;
  suffix?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Technique {
  name: string;
  description: string;
}

export const CLINIC_INFO = {
  name: "Meridian Movement Physical Therapy",
  shortName: "Meridian Movement",
  tagline: "Restoring Motion. Renewing Life.",
  phone: "(239) 580-4217",
  fax: "(239) 580-4218",
  email: "info@meridianmovementpt.com",
  address: "2780 Davis Blvd, Suite 120",
  city: "Naples",
  state: "FL",
  zip: "34104",
  fullAddress: "2780 Davis Blvd, Suite 120, Naples, FL 34104",
  foundingYear: 2016,
  hours: {
    weekday: "Monday - Friday: 7:00 AM - 6:00 PM",
    saturday: "Saturday: 8:00 AM - 12:00 PM",
    sunday: "Sunday: Closed",
  },
};

export const STATS: Stat[] = [
  { label: "Patients Treated", value: "14,000", suffix: "+" },
  { label: "Years of Excellence", value: "10", suffix: "" },
  { label: "Patient Rating", value: "4.9", suffix: "/5" },
  { label: "Patient Satisfaction", value: "98", suffix: "%" },
];

export const SERVICES: Service[] = [
  {
    id: "orthopedic",
    title: "Orthopedic Physical Therapy",
    shortDescription: "Expert treatment for joint, muscle, and bone conditions to restore strength and mobility.",
    icon: "Bone",
    slug: "orthopedic-therapy",
    image: "/svc-orthopedic.webp",
  },
  {
    id: "sports",
    title: "Sports Injury Rehabilitation",
    shortDescription: "Get back in the game with specialized rehab programs designed for athletes of all levels.",
    icon: "Dumbbell",
    slug: "sports-rehab",
    image: "/svc-sports.webp",
  },
  {
    id: "post-surgical",
    title: "Post-Surgical Rehabilitation",
    shortDescription: "Accelerate your recovery after surgery with evidence-based rehabilitation protocols.",
    icon: "HeartPulse",
    slug: "post-surgical-rehab",
    image: "/svc-post-surgical.webp",
  },
  {
    id: "balance",
    title: "Balance & Fall Prevention",
    shortDescription: "Reduce fall risk and improve stability through targeted balance training programs.",
    icon: "Scale",
    slug: "balance-fall-prevention",
    image: "/svc-balance.webp",
  },
  {
    id: "vestibular",
    title: "Vestibular Rehabilitation",
    shortDescription: "Resolve dizziness, vertigo, and balance disorders with specialized vestibular therapy.",
    icon: "Ear",
    slug: "vestibular-rehab",
    image: "/svc-vestibular.webp",
  },
  {
    id: "neurological",
    title: "Neurological Rehabilitation",
    shortDescription: "Comprehensive care for stroke, Parkinson's, MS, and other neurological conditions.",
    icon: "Brain",
    slug: "neurological-rehab",
    image: "/svc-neurological.webp",
  },
  {
    id: "manual",
    title: "Manual Therapy",
    shortDescription: "Hands-on techniques to reduce pain, restore joint mobility, and improve tissue flexibility.",
    icon: "Hand",
    slug: "manual-therapy",
    image: "/svc-manual-therapy.webp",
  },
  {
    id: "dry-needling",
    title: "Dry Needling",
    shortDescription: "Targeted trigger point therapy to release muscle tension and accelerate healing.",
    icon: "Target",
    slug: "dry-needling",
    image: "/svc-dry-needling.webp",
  },
  {
    id: "pelvic-floor",
    title: "Pelvic Floor Therapy",
    shortDescription: "Specialized treatment for pelvic health conditions in a private, comfortable setting.",
    icon: "Shield",
    slug: "pelvic-floor-therapy",
    image: "/svc-pelvic-floor.webp",
  },
  {
    id: "running",
    title: "Running Analysis & Gait Training",
    shortDescription: "Biomechanical assessment and correction to prevent injury and optimize performance.",
    icon: "Footprints",
    slug: "running-analysis",
    image: "/svc-running.webp",
  },
  {
    id: "ergonomics",
    title: "Workplace Ergonomics",
    shortDescription: "Prevent work-related injuries with ergonomic assessments and corrective strategies.",
    icon: "Monitor",
    slug: "workplace-ergonomics",
    image: "/svc-ergonomics.webp",
  },
  {
    id: "chronic-pain",
    title: "Chronic Pain Management",
    shortDescription: "Long-term strategies combining movement, manual therapy, and education to manage chronic pain.",
    icon: "Flame",
    slug: "chronic-pain-management",
    image: "/svc-chronic-pain.webp",
  },
  {
    id: "wellness",
    title: "Wellness & Prevention Programs",
    shortDescription: "Proactive programs to maintain health, prevent injury, and enhance quality of life.",
    icon: "Leaf",
    slug: "wellness-prevention",
    image: "/svc-wellness.webp",
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "voss",
    name: "Dr. Alaric Voss",
    title: "Founder & Lead Physical Therapist",
    credentials: "DPT, OCS, CSCS, FAAOMPT",
    specialties: ["Orthopedic Manual Therapy", "Sports Rehabilitation", "Spine Care", "Complex Cases"],
    bio: "Dr. Voss founded Meridian Movement in 2016 after 8 years practicing in top-tier orthopedic clinics across the Southeast. A board-certified orthopedic clinical specialist with fellowship training in manual therapy, he combines evidence-based techniques with genuine patient connection. His vision of one-on-one, unhurried care drives everything the clinic does.",
    role: "leadership",
  },
  {
    id: "ellsworth",
    name: "Dr. Mireya Ellsworth",
    title: "Senior Physical Therapist",
    credentials: "DPT, SCS, CSCS",
    specialties: ["Sports Medicine", "ACL Reconstruction Rehab", "Shoulder Injuries", "Return-to-Sport Testing"],
    bio: "A former collegiate volleyball player, Dr. Ellsworth brings firsthand understanding of athletic demands to her practice. Board-certified in sports physical therapy, she has guided hundreds of athletes from post-injury frustration back to peak performance. Her return-to-sport testing protocols are among the most comprehensive in Southwest Florida.",
    role: "clinical",
  },
  {
    id: "rourke",
    name: "Dr. Caelan Rourke",
    title: "Physical Therapist",
    credentials: "DPT, NCS",
    specialties: ["Neurological Rehabilitation", "Vestibular Therapy", "Balance Disorders", "Stroke Recovery"],
    bio: "Dr. Rourke specializes in neurological and vestibular rehabilitation, helping patients with stroke, Parkinson's disease, multiple sclerosis, and BPPV regain confidence in their movement. His patient, methodical approach and advanced certifications in neurological clinical specialty make him an invaluable part of our team.",
    role: "clinical",
  },
  {
    id: "whitlock",
    name: "Dr. Selene Whitlock",
    title: "Physical Therapist",
    credentials: "DPT, WCS, PRPC",
    specialties: ["Pelvic Floor Rehabilitation", "Women's Health", "Pre/Postnatal Care", "Chronic Pelvic Pain"],
    bio: "Dr. Whitlock is one of Southwest Florida's few board-certified women's health clinical specialists. She provides compassionate, evidence-based care for pelvic floor dysfunction, prenatal and postpartum recovery, and chronic pelvic pain conditions in a private, comfortable treatment environment.",
    role: "clinical",
  },
  {
    id: "mercer",
    name: "Rowan Mercer",
    title: "Physical Therapist Assistant",
    credentials: "PTA, ATC",
    specialties: ["Exercise Prescription", "Therapeutic Modalities", "Athletic Taping", "Patient Education"],
    bio: "Rowan brings energy and precision to every treatment session. As a licensed PTA and certified athletic trainer, he designs progressive exercise programs that bridge the gap between clinic and daily life, ensuring patients feel confident in their home exercise routines.",
    role: "support",
  },
  {
    id: "hawthorne",
    name: "Brielle Hawthorne",
    title: "Rehabilitation Technician",
    credentials: "BS Exercise Science, NASM-CPT",
    specialties: ["Therapeutic Exercise", "Patient Assistance", "Equipment Setup", "Wellness Coaching"],
    bio: "Brielle assists our therapists and supports patients through their exercise programs with patience and encouragement. Her background in exercise science and personal training allows her to ensure proper form and progression during every session.",
    role: "support",
  },
  {
    id: "holloway",
    name: "Taryn Holloway",
    title: "Patient Care Coordinator",
    credentials: "",
    specialties: ["Scheduling", "Patient Communication", "Office Management", "Care Coordination"],
    bio: "Taryn is the welcoming voice and face of Meridian Movement. She coordinates schedules, manages referrals, and ensures every patient's experience is seamless from first call to final discharge. Her warmth and organizational skills keep the clinic running smoothly.",
    role: "support",
  },
  {
    id: "avery",
    name: "Lennox Avery",
    title: "Insurance & Billing Specialist",
    credentials: "",
    specialties: ["Insurance Verification", "Benefits Explanation", "Claims Management", "Prior Authorization"],
    bio: "Lennox navigates the complexities of insurance so patients don't have to. He verifies coverage before your first visit, explains your benefits clearly, and handles all claims and authorization processes to minimize out-of-pocket surprises.",
    role: "support",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    quote: "After my knee replacement, I was nervous about rehab. Dr. Voss and his team made every session feel productive and encouraging. Within three months I was hiking again—something I thought was behind me. The one-on-one attention here is unlike any clinic I've been to.",
    author: "Margaret K.",
    condition: "Total Knee Replacement",
    rating: 5.0,
  },
  {
    id: "2",
    quote: "Dr. Ellsworth understood exactly what I needed to get back on the field. Her return-to-sport testing gave me and my coach confidence that I was truly ready. No rushed timelines, no cookie-cutter exercises—just smart, individualized care.",
    author: "Devon R.",
    condition: "ACL Reconstruction",
    rating: 5.0,
  },
  {
    id: "3",
    quote: "I suffered from vertigo for months before finding Meridian Movement. Dr. Rourke diagnosed my BPPV in the first visit and after just four sessions, the spinning stopped completely. I wish I had come here sooner instead of suffering through it.",
    author: "Elaine T.",
    condition: "BPPV / Vertigo",
    rating: 4.9,
  },
  {
    id: "4",
    quote: "The pelvic floor therapy with Dr. Whitlock changed my quality of life. She created such a comfortable, judgment-free environment and explained everything clearly. After years of dealing with this silently, I finally got real help.",
    author: "Camille S.",
    condition: "Pelvic Floor Dysfunction",
    rating: 5.0,
  },
];

export const CONDITIONS_TREATED = [
  "Back & Neck Pain",
  "Sciatica",
  "Herniated Discs",
  "Rotator Cuff Injuries",
  "Frozen Shoulder",
  "Tennis & Golfer's Elbow",
  "Carpal Tunnel Syndrome",
  "ACL / MCL / Meniscus Tears",
  "Patellofemoral Syndrome",
  "IT Band Syndrome",
  "Plantar Fasciitis",
  "Achilles Tendinitis",
  "Ankle Sprains",
  "Hip Bursitis & Impingement",
  "Total Joint Replacements",
  "Fracture Recovery",
  "Arthritis & Osteoarthritis",
  "Fibromyalgia",
  "TMJ Disorders",
  "Concussion Recovery",
  "Stroke Rehabilitation",
  "Parkinson's Disease",
  "Multiple Sclerosis",
  "Vertigo & BPPV",
  "Pelvic Floor Dysfunction",
  "Prenatal & Postpartum Pain",
  "Sports Hernias",
  "Whiplash Injuries",
];

export const TECHNIQUES: Technique[] = [
  { name: "Joint Mobilization", description: "Graded oscillatory movements to restore joint range of motion and reduce stiffness." },
  { name: "Soft Tissue Mobilization", description: "Hands-on techniques targeting muscle, fascia, and connective tissue restrictions." },
  { name: "Dry Needling", description: "Thin filament needles targeting myofascial trigger points to release tension and reduce pain." },
  { name: "Neuromuscular Re-education", description: "Training the nervous system to restore proper movement patterns and coordination." },
  { name: "Therapeutic Exercise", description: "Progressive strengthening and flexibility programs tailored to your condition and goals." },
  { name: "Instrument-Assisted Soft Tissue", description: "Specialized tools to break up scar tissue and fascial adhesions for improved mobility." },
  { name: "Kinesiology Taping", description: "Strategic application of elastic tape to support joints, reduce swelling, and facilitate movement." },
  { name: "Electrical Stimulation", description: "Targeted electrical currents to reduce pain, decrease inflammation, and activate muscles." },
  { name: "Ultrasound Therapy", description: "Deep heating of tissues to promote circulation, healing, and reduce muscle spasm." },
  { name: "Cupping Therapy", description: "Decompression technique to increase blood flow, reduce muscle tension, and promote recovery." },
  { name: "Vestibular Maneuvers", description: "Specialized repositioning techniques to resolve vertigo and balance disorders." },
  { name: "Aquatic Therapy Referral", description: "Low-impact water-based exercise programs for joint protection and pain-free movement." },
  { name: "Functional Movement Screening", description: "Systematic assessment identifying movement limitations and asymmetries before they cause injury." },
];

export const INSURANCE_PROVIDERS = [
  "Aetna",
  "Blue Cross Blue Shield",
  "Cigna",
  "UnitedHealthcare",
  "Humana",
  "Medicare",
  "Florida Blue",
  "Tricare",
  "Workers' Compensation",
  "Ambetter",
  "Oscar Health",
  "Molina Healthcare",
  "AvMed",
  "Capital Health Plan",
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Do I need a referral from my doctor to start physical therapy?",
    answer: "In Florida, you have Direct Access to physical therapy, meaning you can begin treatment without a physician referral. However, some insurance plans may require a referral for coverage. Our team will verify your benefits and let you know before your first visit.",
  },
  {
    question: "What should I expect during my first visit?",
    answer: "Your initial evaluation takes approximately 60 minutes. Your therapist will review your medical history, perform a comprehensive physical examination, discuss your goals, and develop a personalized treatment plan. Wear comfortable clothing that allows access to the affected area.",
  },
  {
    question: "How long does each treatment session last?",
    answer: "Follow-up treatment sessions are typically 45-60 minutes of one-on-one time with your physical therapist. We do not double-book our therapists, ensuring you receive their full attention throughout your session.",
  },
  {
    question: "How many sessions will I need?",
    answer: "Treatment duration varies based on your condition, severity, and goals. Most patients see significant improvement within 6-12 sessions. Your therapist will provide an estimated timeline during your initial evaluation and adjust as you progress.",
  },
  {
    question: "What should I wear to my appointment?",
    answer: "Wear comfortable, loose-fitting clothing that allows your therapist to access the area being treated. Athletic wear is ideal. For lower extremity issues, shorts are helpful. We have private treatment rooms if you need to change.",
  },
  {
    question: "Do you accept my insurance?",
    answer: "We accept most major insurance plans including Aetna, Blue Cross Blue Shield, Cigna, UnitedHealthcare, Humana, Medicare, Florida Blue, and Tricare. Our insurance specialist will verify your benefits before your first visit at no charge.",
  },
  {
    question: "What if I need to cancel or reschedule my appointment?",
    answer: "We ask for 24-hour notice for cancellations or schedule changes. Late cancellations or no-shows may incur a fee. We understand that emergencies happen and will work with you on a case-by-case basis.",
  },
  {
    question: "Can physical therapy help with chronic pain?",
    answer: "Absolutely. Physical therapy is one of the most effective treatments for chronic pain. We use a combination of manual therapy, therapeutic exercise, pain neuroscience education, and movement strategies to help you manage and reduce chronic pain without relying solely on medication.",
  },
  {
    question: "Do you offer telehealth or virtual visits?",
    answer: "Yes, we offer telehealth consultations for appropriate conditions. Virtual visits are ideal for exercise progression checks, home program modifications, and initial consultations. Contact us to determine if telehealth is right for your situation.",
  },
  {
    question: "What makes Meridian Movement different from other PT clinics?",
    answer: "We provide true one-on-one care—your therapist works exclusively with you for your entire session. We never double-book. Our 60-minute evaluations are thorough, our therapists hold advanced certifications, and we maintain a patient-centered approach that prioritizes your goals and timeline over arbitrary visit limits.",
  },
];

export const SERVICE_AREAS = [
  "Naples",
  "North Naples",
  "East Naples",
  "Bonita Springs",
  "Estero",
  "Marco Island",
  "Golden Gate",
  "Pelican Bay",
  "Vanderbilt Beach",
  "Park Shore",
  "Pine Ridge",
  "Fort Myers (South)",
];

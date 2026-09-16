import {
  Award,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  FileCheck2,
  Files,
  FileStack,
  FileText,
  Globe2,
  GraduationCap,
  Headset,
  HeartHandshake,
  House,
  Landmark,
  Languages,
  MapPinned,
  Plane,
  ShieldCheck,
  Stethoscope,
  TicketCheck,
  Users
} from "lucide-react";
import type {
  Destination,
  DocumentItem,
  Feature,
  GuideStep,
  NavItem,
  Scholarship,
  Testimonial
} from "@/src/lib/types";

export const navItems: NavItem[] = [
  { label: "Home", href: "/home" },
  { label: "Scholarships", href: "/scholarships" },
  { label: "Required Documents", href: "/required-documents" },
  // { label: "Study Abroad Guide", href: "/study-abroad-guide" },
  { label: "Service & charges", href: "/service-charges" },
  // { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

export const stats = [
  { icon: Globe2, value: 12,  suffix: "K", label: "Students guided globally" },
  { icon: Building2, value: 420,  suffix: "+", label: "Partner universities" },
  { icon: ShieldCheck, value: 96, suffix: "%", label: "Visa success support rate" },
  { icon: Award, value: 18, suffix: "M", label: "Scholarships unlocked" }
];

export const destinations: Destination[] = [
  {
    slug: "uk",
    name: "United Kingdom",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80",
    description: "Fast-track degrees, globally ranked universities, and vibrant city life.",
    universities: "120+ universities",
    highlight: "2-year post-study work route"
  },
  {
    slug: "canada",
    name: "Canada",
    image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=1200&q=80",
    description: "Research-led education with strong immigration pathways and student support.",
    universities: "95+ universities",
    highlight: "High employability pathways"
  },
  {
    slug: "australia",
    name: "Australia",
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=1200&q=80",
    description: "Flexible course structures, innovation hubs, and lifestyle-first campuses.",
    universities: "80+ universities",
    highlight: "Strong industry-integrated learning"
  },
  {
    slug: "usa",
    name: "United States",
    image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=1200&q=80",
    description: "World-leading research institutions across every major and specialization.",
    universities: "250+ universities",
    highlight: "Extensive scholarship ecosystem"
  },
  {
    slug: "germany",
    name: "Germany",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1200&q=80",
    description: "Low-cost education, engineering excellence, and English-taught programs.",
    universities: "70+ universities",
    highlight: "Affordable tuition options"
  },
  {
    slug: "ireland",
    name: "Ireland",
    image: "https://images.unsplash.com/photo-1549918864-48ac978761a4?auto=format&fit=crop&w=1200&q=80",
    description: "Tech-driven economy with globally connected universities and welcoming culture.",
    universities: "35+ universities",
    highlight: "Gateway to European careers"
  }
];

export const features: Feature[] = [
  {
    title: "Expert Guidance",
    description: "Our experienced consultants provide end-to-end support for your study abroad journey.",
    icon: GraduationCap
  },
  {
    title: "Scholarship Assistance",
    description: "We help you find and apply for fully funded scholarships worldwide.",
    icon: FileText
  },
  {
    title: "Visa Support",
    description: "End to end visa application support to ensure a smooth process.",
    icon: Files
  },
  {
    title: "Post Arrival Support",
    description: "We stay with you even after you reach your destination for any assistance.",
    icon: Headset
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Areeba Khan",
    destination: "University of Birmingham, UK",
    quote: "The team made every part of the process feel calm and strategic. I secured a scholarship and my visa without last-minute panic.",
    program: "MSc Marketing"
  },
  {
    name: "Hamza Tariq",
    destination: "University of Waterloo, Canada",
    quote: "What stood out was how honest and detailed the counselling felt. My shortlist actually matched my career goals and budget.",
    program: "BSc Computer Science"
  },
  {
    name: "Sara Ali",
    destination: "Monash University, Australia",
    quote: "Their application and visa guidance was incredibly polished. I always knew what came next and what documents mattered.",
    program: "Master of Public Health"
  }
];

export const timeline: GuideStep[] = [
  { step: "01", title: "Consultation", description: "Profile review, budget mapping, and destination fit analysis." },
  { step: "02", title: "University Selection", description: "Create a focused shortlist with strong admission probability." },
  { step: "03", title: "Scholarship Guidance", description: "Position your profile for funding and assistantship opportunities." },
  { step: "04", title: "Admission", description: "Prepare applications, SOPs, and submission timelines." },
  { step: "05", title: "Visa", description: "Complete compliance documents and interview preparation." },
  { step: "06", title: "Fly Abroad", description: "Pre-departure briefings, accommodation, and arrival planning." }
];

export const guideSteps: GuideStep[] = [
  { step: "Step 1", title: "Choose Country", description: "Compare tuition, visa pathways, lifestyle, and post-study options." },
  { step: "Step 2", title: "Choose University", description: "Align course quality, ranking, city, budget, and career outcomes." },
  { step: "Step 3", title: "Prepare Documents", description: "Collect transcripts, test scores, SOP, references, and finances." },
  { step: "Step 4", title: "Apply", description: "Submit polished applications with country-specific requirements in mind." },
  { step: "Step 5", title: "Receive Offer Letter", description: "Review conditional and unconditional offers carefully." },
  { step: "Step 6", title: "Pay Tuition Fee", description: "Secure your seat and generate required payment proof." },
  { step: "Step 7", title: "Apply for Visa", description: "Finalize financials, biometrics, and case-specific visa forms." },
  { step: "Step 8", title: "Medical Examination", description: "Complete panel physician checks where required." },
  { step: "Step 9", title: "Accommodation", description: "Confirm safe housing close to campus or transit." },
  { step: "Step 10", title: "Fly Abroad", description: "Travel with a complete arrival pack and contingency planning." }
];

export const documents: DocumentItem[] = [
  { title: "Passport", icon: Globe2, explanation: "A valid passport is essential for admissions and visa processing.", tips: "Keep at least 12 months of validity before intake." },
  { title: "Academic Certificates", icon: GraduationCap, explanation: "Degree certificates validate your completed education history.", tips: "Prepare attested copies for universities that request them." },
  { title: "Transcripts", icon: FileStack, explanation: "Official transcripts show grades, credits, and course performance.", tips: "Scan clearly and keep both front and back pages." },
  { title: "IELTS / PTE / TOEFL", icon: Languages, explanation: "English proficiency test results are required for most institutions.", tips: "Book early enough to allow a retake if needed." },
  { title: "Recommendation Letters", icon: BadgeCheck, explanation: "Academic or professional references strengthen application credibility.", tips: "Ask recommenders for letters aligned with your target program." },
  { title: "Statement of Purpose", icon: TicketCheck, explanation: "Your SOP explains motivation, fit, and future goals.", tips: "Avoid generic stories and make every paragraph program-specific." },
  { title: "CV", icon: BriefcaseBusiness, explanation: "A structured CV highlights academics, projects, work, and achievements.", tips: "Use measurable outcomes rather than vague descriptions." },
  { title: "Experience Letter", icon: Landmark, explanation: "Relevant work experience may support admissions and scholarships.", tips: "Include dates, title, duties, and employer contact details." },
  { title: "Bank Statement", icon: ShieldCheck, explanation: "Financial documents prove tuition and living expense capacity.", tips: "Check how many months of statement history your visa needs." },
  { title: "Passport Size Photos", icon: Users, explanation: "Biometric photos are often required for visa and university forms.", tips: "Follow country-specific size and background rules." },
  { title: "Medical Certificate", icon: Stethoscope, explanation: "Some countries require health checks before visa approval.", tips: "Use approved medical centers where applicable." },
  { title: "Visa Documents", icon: FileCheck2, explanation: "This includes offer letters, tuition receipts, finances, and forms.", tips: "Create a checklist and verify every upload before submission." }
];



export const scholarships: any = [
  {
    slug: "global-excellence-award-uob",
    title: "Global Excellence Award",
    university: "University of Birmingham",
    ieltsRequired:true,
    logo: "UB",
    country: "United Kingdom",
    intake: "September 2026",
    degreeLevel: "Masters",
    scholarshipType: "Merit-based",
    funding: "50% tuition waiver",

    // 🟢 PRESENT
    admissionOpen: "01-08-2026",
    deadline: "25-08-2026",

    shortDescription: "For high-achieving international students applying to selected postgraduate taught programs.",
    description: "A competitive award designed to support students with strong academics, leadership potential, and a clearly articulated career plan.",
    benefits: ["50% tuition coverage", "Priority mentoring sessions", "Career service workshops"],
    eligibility: ["Minimum 3.4/4.0 GPA or equivalent", "Offer holder in an eligible program", "Strong statement of purpose"],
    requiredDocuments: ["Passport", "Transcripts", "Degree certificate", "Updated CV", "Statement of purpose"],
    applicationProcess: ["Submit program application", "Receive offer", "Complete scholarship statement", "Attend virtual review if shortlisted"],
    courses: ["MSc Marketing", "MSc Data Science", "MSc International Business", "MSc Public Policy"],
    faqs: []
  },

  {
    slug: "future-leaders-grant-waterloo",
    title: "Future Leaders Grant",
    university: "University of Waterloo",
    ieltsRequired:false,
    logo: "UW",
    country: "Canada",
    intake: "January 2027",
    degreeLevel: "Bachelors",
    scholarshipType: "Merit + Leadership",
    funding: "CAD 18,000",

    // 🟢 PRESENT
    admissionOpen: "10-08-2026",
    deadline: "10-09-2026",

    shortDescription: "Recognizes students with excellent academics and strong extracurricular leadership.",
    description: "Created for international undergraduates who show innovation, resilience, and community impact alongside academic performance.",
    benefits: ["CAD 18,000 tuition support", "Leadership cohort access", "Priority campus ambassador opportunities"],
    eligibility: ["Minimum 85% academic average", "Leadership profile", "English language proficiency"],
    requiredDocuments: ["Passport", "Academic certificates", "Transcripts", "Reference letter", "Personal statement"],
    applicationProcess: ["Apply to undergraduate program", "Upload scholarship profile", "Complete leadership reflection", "Decision after admission review"],
    courses: ["Computer Science", "Engineering", "Economics", "Health Sciences"],
    faqs: []
  },

  {
    slug: "innovation-scholarship-monash",
    title: "Innovation Scholarship",
    university: "Monash University",
    ieltsRequired:true,
    logo: "MU",
    country: "Australia",
    intake: "February 2027",
    degreeLevel: "Masters",
    scholarshipType: "Merit-based",
    funding: "30% tuition waiver",

    // 🟡 UPCOMING
    admissionOpen: "20-08-2026",
    deadline: "20-10-2026",

    shortDescription: "Supports postgraduate students entering innovation-focused and future-facing disciplines.",
    description: "A scholarship for applicants with strong academics and a compelling narrative around impact, research, or professional ambition.",
    benefits: ["30% tuition reduction", "Research networking events", "Mentorship for capstone planning"],
    eligibility: ["Relevant undergraduate degree", "Solid academic standing", "Program-specific prerequisites met"],
    requiredDocuments: ["Passport", "Transcripts", "CV", "English test score", "SOP"],
    applicationProcess: ["Apply for eligible course", "Automatic scholarship consideration", "Optional impact statement if requested"],
    courses: ["Public Health", "Business Analytics", "Design", "Information Technology"],
    faqs: []
  },

  {
    slug: "global-merit-scholarship-asu",
    title: "Global Merit Scholarship",
    university: "Arizona State University",
    ieltsRequired:false,
    logo: "ASU",
    country: "United States",
    intake: "August 2026",
    degreeLevel: "Bachelors",
    scholarshipType: "Merit-based",
    funding: "Up to 40% tuition",

    // 🟡 UPCOMING
    admissionOpen: "01-09-2026",
    deadline: "15-10-2026",

    shortDescription: "A merit scholarship for international undergraduates with strong grades and academic momentum.",
    description: "ASU evaluates academic performance, rigor, and overall competitiveness for this tuition award.",
    benefits: ["Tuition award up to 40%", "Renewal pathway", "International student advising"],
    eligibility: ["Strong secondary school grades", "Program admission", "Complete scholarship-ready file"],
    requiredDocuments: ["Passport", "Academic transcripts", "English proficiency score", "Financial proof"],
    applicationProcess: ["Apply to program", "Automatic review for eligible applicants", "Receive award decision with admission outcome"],
    courses: ["Computer Engineering", "Journalism", "Psychology", "Architecture"],
    faqs: []
  },

  {
    slug: "excellence-fund-tu-munich",
    title: "Excellence Fund",
    university: "Technical University of Munich",
    ieltsRequired:true,
    logo: "TUM",
    country: "Germany",
    intake: "October 2026",
    degreeLevel: "Masters",
    scholarshipType: "Need + Merit",
    funding: "EUR 8,000 stipend",

    // 🔴 EXPIRED
    admissionOpen: "01-06-2026",
    deadline: "31-07-2026",

    shortDescription: "A support fund for high-potential students entering select graduate programs in Germany.",
    description: "This fund is designed for academically strong students who can demonstrate both potential and financial need.",
    benefits: ["EUR 8,000 stipend", "Advising support", "Student integration workshops"],
    eligibility: ["Admitted to selected graduate program", "Strong academics", "Proof of need"],
    requiredDocuments: ["Passport", "Admission letter", "Transcripts", "Financial statement", "Motivation letter"],
    applicationProcess: ["Secure admission", "Submit funding dossier", "Provide financial context documents", "Await committee review"],
    courses: ["Mechanical Engineering", "Management", "Robotics", "Environmental Engineering"],
    faqs: []
  },

  {
    slug: "emerging-talent-award-ucc",
    title: "Emerging Talent Award",
    university: "University College Cork",
    ieltsRequired:false,
    logo: "UCC",
    country: "Ireland",
    intake: "September 2026",
    degreeLevel: "Masters",
    scholarshipType: "Merit-based",
    funding: "25% tuition waiver",

    // 🔴 EXPIRED
    admissionOpen: "15-05-2026",
    deadline: "30-06-2026",

    shortDescription: "Rewards international students entering selected taught postgraduate programs.",
    description: "A tuition award for students who combine academic consistency with a strong motivation for international study.",
    benefits: ["25% fee waiver", "Student welcome support", "Career planning sessions"],
    eligibility: ["Offer holder", "Strong previous degree", "Program-fit narrative"],
    requiredDocuments: ["Passport", "Transcripts", "Degree certificate", "SOP", "Reference"],
    applicationProcess: ["Apply to eligible course", "Receive offer", "Submit scholarship interest statement"],
    courses: ["Food Science", "Cybersecurity", "Finance", "Education"],
    faqs: []
  }
];

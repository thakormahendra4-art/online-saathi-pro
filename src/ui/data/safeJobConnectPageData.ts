import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  ClipboardCheck,
  FileText,
  IndianRupee,
  MapPin,
  Route,
  ShieldCheck,
} from "lucide-react";

export type HeroHighlight = {
  icon: LucideIcon;
  label: string;
};

export const heroHighlights: HeroHighlight[] = [
  { icon: MapPin, label: "Jobs near you" },
  { icon: BadgeCheck, label: "Verified employers" },
  { icon: IndianRupee, label: "Fair wages, paid right" },
];

export type ProcessStep = {
  icon: LucideIcon;
  step: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    icon: ClipboardCheck,
    step: "01",
    title: "Skill Assessment",
    description:
      "Saathis begin by conducting comprehensive skill assessments to gain insights into each worker's unique abilities and professional background. These assessments are crucial as they help determine the most suitable job opportunities that align with the worker's capabilities and career aspirations.",
  },
  {
    icon: Route,
    step: "02",
    title: "Job Matching",
    description:
      "Utilizing the gathered information, Online Saathi's platform employs advanced algorithms to match workers with relevant job openings across various sectors. This personalized approach ensures that each worker is connected with opportunities where they can thrive and contribute effectively.",
  },
  {
    icon: FileText,
    step: "03",
    title: "Application Support",
    description:
      "In addition to job matching, Saathis provide hands-on support to workers throughout the application journey. This includes assisting them in completing job applications accurately, crafting compelling resumes that highlight their skills and experiences, and even conducting mock interviews to help them prepare confidently.",
  },
];

export type Job = {
  date: string;
  company: string;
  location: string;
  experience: string;
  details: string;
  perks: string;
  wage: string;
};

export const jobs: Job[] = [
  {
    date: "12 Sep, 2025",
    company: "Shree Balaji Constructions",
    location: "Gujarat",
    experience: "4 Years",
    details: "Need 60 Labours for Construction of Apartment Towers",
    perks: "Free Food & Accommodation",
    wage: "₹500 - 700 Per Day",
  },
  {
    date: "10 Sep, 2025",
    company: "Ram Textiles & Exports",
    location: "Surat, Gujarat",
    experience: "2 Years",
    details: "Hiring 40 Weaving Machine Operators for Textile Unit",
    perks: "Night Shift Allowance",
    wage: "₹450 - 650 Per Day",
  },
  {
    date: "08 Sep, 2025",
    company: "Sunrise Packaging Pvt Ltd",
    location: "Delhi NCR",
    experience: "1 Year",
    details: "25 Packers required for FMCG Packaging Line",
    perks: "Health Insurance",
    wage: "₹400 - 550 Per Day",
  },
  {
    date: "05 Sep, 2025",
    company: "Ganga Brick Works",
    location: "Bihar",
    experience: "3 Years",
    details: "50 Workers needed for Auto Brick Manufacturing Plant",
    perks: "Free Accommodation & Food",
    wage: "₹600 - 800 Per Day",
  },
  {
    date: "01 Sep, 2025",
    company: "Evergreen Agro Farms",
    location: "Punjab",
    experience: "2 Years",
    details: "Seasonal harvesting staff required for 120-acre farm",
    perks: "Transport Provided",
    wage: "₹500 - 650 Per Day",
  },
  {
    date: "28 Aug, 2025",
    company: "Metro Steel & Fabrication",
    location: "Maharashtra",
    experience: "5 Years",
    details: "15 Welder/Fabricators for Bridge Project",
    perks: "Safety Gear & Bonus",
    wage: "₹700 - 900 Per Day",
  },
  {
    date: "25 Aug, 2025",
    company: "Sai Logistics Hub",
    location: "Hyderabad, Telangana",
    experience: "1 Year",
    details: "30 Warehouse Helpers and Loaders required",
    perks: "Weekly Payout",
    wage: "₹450 - 600 Per Day",
  },
  {
    date: "21 Aug, 2025",
    company: "Durga Paint & Chemicals",
    location: "Rajasthan",
    experience: "2 Years",
    details: "20 Labourers needed for Paint Manufacturing Plant",
    perks: "Free Lunch & Canteen",
    wage: "₹500 - 700 Per Day",
  },
  {
    date: "18 Aug, 2025",
    company: "Himalaya Marble Pvt Ltd",
    location: "Uttarakhand",
    experience: "3 Years",
    details: "Stone cutter and polishing staff needed",
    perks: "Skill Training Provided",
    wage: "₹600 - 850 Per Day",
  },
  {
    date: "14 Aug, 2025",
    company: "Prime Electrical Works",
    location: "Karnataka",
    experience: "2 Years",
    details: "10 Electrician helpers for residential projects",
    perks: "Full Attendance Bonus",
    wage: "₹550 - 750 Per Day",
  },
  {
    date: "10 Aug, 2025",
    company: "Aroma Spice Exports",
    location: "Kerala",
    experience: "1 Year",
    details: "Sorting and packing staff for spice export unit",
    perks: "Accommodation Available",
    wage: "₹450 - 600 Per Day",
  },
  {
    date: "05 Aug, 2025",
    company: "Shivam Auto Components",
    location: "Tamil Nadu",
    experience: "2 Years",
    details: "Assembly line workers for automobile parts plant",
    perks: "PF & ESI Benefits",
    wage: "₹500 - 700 Per Day",
  },
];

export type Reason = {
  icon: LucideIcon;
  title: string;
  text: string;
};

export const reasons: Reason[] = [
  {
    icon: BadgeCheck,
    title: "Verified",
    text: "Every employer and job is verified so workers can trust what they apply for.",
  },
  {
    icon: IndianRupee,
    title: "Value for Work",
    text: "Fair, transparent wages with clear terms — respected and paid on time.",
  },
  {
    icon: ShieldCheck,
    title: "Trust for Partners",
    text: "Reliable workers and dependable placements build lasting relationships with employers.",
  },
];
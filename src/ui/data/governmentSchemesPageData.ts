import {
  Briefcase,
  Bus,
  FileSearch,
  FileText,
  FolderSearch,
  GraduationCap,
  HandHeart,
  Heart,
  Home,
  Landmark,
  Leaf,
  LifeBuoy,
  Mic,
  Palette,
  Plane,
  Scale,
  ShowerHead,
  Smartphone,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type SchemeStat = {
  value: string;
  label: string;
};

export const schemeStats: SchemeStat[] = [
  { value: "500+", label: "Total Schemes" },
  { value: "180+", label: "Central Schemes" },
  { value: "320+", label: "State Schemes" },
];

export type Scope = "all" | "central" | "state";

export type SchemeCategory = {
  icon: LucideIcon;
  title: string;
  scope: Scope;
};

export const schemeCategories: SchemeCategory[] = [
  { icon: Leaf, title: "Agriculture & Rural Environment", scope: "state" },
  { icon: Landmark, title: "Banking, Financial Services & Insurance", scope: "central" },
  { icon: Briefcase, title: "Business & Entrepreneur", scope: "central" },
  { icon: GraduationCap, title: "Education & Learning", scope: "state" },
  { icon: Heart, title: "Health & Wellness", scope: "state" },
  { icon: Home, title: "Housing & Shelter", scope: "central" },
  { icon: Scale, title: "Law & Justice", scope: "central" },
  { icon: Smartphone, title: "Science, IT & Communications", scope: "state" },
  { icon: Users, title: "Skills & Employment", scope: "state" },
  { icon: HandHeart, title: "Social Welfare & Empowerment", scope: "central" },
  { icon: Palette, title: "Sports & Culture", scope: "state" },
  { icon: Bus, title: "Transport & Infrastructure", scope: "state" },
  { icon: Plane, title: "Travel & Tourism", scope: "central" },
  { icon: ShowerHead, title: "Utility & Sanitation", scope: "state" },
  { icon: Mic, title: "Women & Child", scope: "central" },
];

export type SchemeTab = {
  label: string;
  value: Scope;
};

export const schemeTabs: SchemeTab[] = [
  { label: "All", value: "all" },
  { label: "Central", value: "central" },
  { label: "State", value: "state" },
];

export type SchemeStep = {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

export const schemeSteps: SchemeStep[] = [
  {
    number: "01",
    icon: FileSearch,
    title: "Scheme Awareness",
    description:
      "Your local Saathi identifies schemes you may be eligible for based on your personal and family profile — ensuring no benefit goes unnoticed.",
  },
  {
    number: "02",
    icon: FileText,
    title: "Application Assistance",
    description:
      "Saathis help you fill out application forms correctly, attach the right documents, and submit through the appropriate government portal or office.",
  },
  {
    number: "03",
    icon: FolderSearch,
    title: "Document Collection",
    description:
      "From Aadhaar and ration cards to income certificates — Saathis guide you in gathering and verifying every required document for a smooth application.",
  },
  {
    number: "04",
    icon: LifeBuoy,
    title: "Follow-up Support",
    description:
      "After submission, Saathis track application status, follow up with authorities, and ensure benefits are delivered to you — not lost in the system.",
  },
];
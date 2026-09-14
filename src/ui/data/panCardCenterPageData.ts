import {
  BadgeCheck,
  Building2,
  ClipboardCheck,
  CreditCard,
  FileCheck,
  Fingerprint,
  Globe,
  HelpCircle,
  KeyRound,
  Laptop,
  Phone,
  Receipt,
  Send,
  Shield,
  UserCheck,
  Verified,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type PanStep = {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

export const panSteps: PanStep[] = [
  {
    number: "01",
    icon: UserCheck,
    title: "Register as Agent",
    description:
      "Sign up as an authorized PAN card agent through Online Saathi. Complete your KYC and get access to the NSDL/UTIITSL portal.",
  },
  {
    number: "02",
    icon: Fingerprint,
    title: "Collect Customer Details",
    description:
      "Gather Aadhaar, photograph, and signature from the applicant. Our guided form ensures nothing is missed.",
  },
  {
    number: "03",
    icon: ClipboardCheck,
    title: "Fill Application Online",
    description:
      "Use the agent portal to complete Form 49A or 49AA. Auto-validation checks reduce errors and rejections.",
  },
  {
    number: "04",
    icon: CreditCard,
    title: "Process Payment",
    description:
      "Collect the application fee from the customer and process payment through the integrated gateway.",
  },
  {
    number: "05",
    icon: Send,
    title: "Submit Application",
    description:
      "Review and submit the application directly to NSDL or UTIITSL. Receive an acknowledgment number instantly.",
  },
  {
    number: "06",
    icon: FileCheck,
    title: "Track Status",
    description:
      "Monitor application status in real-time through the agent dashboard. Keep your customers informed at every step.",
  },
  {
    number: "07",
    icon: Verified,
    title: "Deliver PAN Card",
    description:
      "Once processed, the PAN card is dispatched to the customer's address. ePAN is delivered via email within days.",
  },
];

export type PanBenefit = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const panBenefits: PanBenefit[] = [
  {
    icon: BadgeCheck,
    title: "Authorized PAN Card Center",
    description:
      "Operate as a certified PAN service point backed by NSDL/UTIITSL partnership through Online Saathi.",
  },
  {
    icon: Globe,
    title: "Broad Service Scope",
    description:
      "Handle new PAN applications, corrections, reprinting, and link updates — all from a single portal.",
  },
  {
    icon: Building2,
    title: "Nationwide Retail Outlets",
    description:
      "Join a growing network of PAN card agents across India, serving both urban and rural communities.",
  },
  {
    icon: HelpCircle,
    title: "Application Assistance",
    description:
      "Step-by-step guidance and auto-validation reduce errors, ensuring faster processing and fewer rejections.",
  },
  {
    icon: Receipt,
    title: "Complete PAN Services",
    description:
      "From Form 49A to acknowledgment tracking — manage the entire PAN lifecycle through one dashboard.",
  },
  {
    icon: KeyRound,
    title: "Flexible Application Options",
    description:
      "Choose between instant ePAN or physical card delivery based on your customer's preference and urgency.",
  },
  {
    icon: Laptop,
    title: "Easy Online Access",
    description:
      "Access the agent portal from any device — desktop, tablet, or mobile — anytime and anywhere.",
  },
  {
    icon: Phone,
    title: "Dedicated Customer Support",
    description:
      "Get priority support from our team for portal issues, application queries, and technical assistance.",
  },
  {
    icon: Zap,
    title: "Fast and Affordable ePAN",
    description:
      "Deliver ePAN to customers within hours at minimal cost — ideal for time-sensitive requirements.",
  },
  {
    icon: Shield,
    title: "Choice of PAN Type",
    description:
      "Offer both physical PAN cards and instant ePAN based on customer needs and budget.",
  },
];
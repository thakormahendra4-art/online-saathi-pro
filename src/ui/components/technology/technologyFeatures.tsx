import type { ElementType } from "react";
import { Banknote, Briefcase, Landmark, Route, Users } from "lucide-react";

import financeImage from "../../../assets/technology-assets/2.png";
import deliveryImage from "../../../assets/technology-assets/3.png";
import welfareImage from "../../../assets/technology-assets/4.png";
import communityImage from "../../../assets/technology-assets/5.png";
import jobsImage from "../../../assets/technology-assets/6.png";

export interface TechnologyFeatureType {
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
  accent: string;
  icon: ElementType;
  image: string;
  panel: { value: string; label: string }[];
}

export const technologyFeatures: TechnologyFeatureType[] = [
  {
    eyebrow: "Financial Services",
    title: "Assisted Transactions & Financial Services",
    description:
      "Our API partner offers essential services like mobile recharges, bill payments, AEPS cash withdrawals, G2C services, microloans, insurance, and travel services — making everyday transactions accessible and convenient for rural communities.",
    points: [
      "Mobile recharges & bill payments",
      "AEPS cash withdrawals & G2C services",
      "Microloans, insurance & travel services",
    ],
    accent: "from-[#0075a8] to-[#00507a]",
    icon: Banknote,
    image: financeImage,
    panel: [
      { value: "7+", label: "Services in one app" },
      { value: "BEPS", label: "Cash withdrawal ready" },
      { value: "24/7", label: "Saathi-assisted" },
    ],
  },
  {
    eyebrow: "Delivery Tracking",
    title: "Comprehensive Delivery Tracking System",
    description:
      "Enables efficient order processing and tracking, optimizing routes for Saathis and providing proof of delivery. Automated payment reconciliation ensures accuracy and transparency.",
    points: [
      "End-to-end order tracking with proof of delivery",
      "Route optimization for Saathis",
      "Automated payment reconciliation",
    ],
    accent: "from-[#0f766e] to-[#134e4a]",
    icon: Route,
    image: deliveryImage,
    panel: [
      { value: "100%", label: "Order visibility" },
      { value: "Real-time", label: "Route optimization" },
      { value: "Auto", label: "Payment reconciliation" },
    ],
  },
  {
    eyebrow: "Welfare & Entitlements",
    title: "Government Schemes Eligibility Engine",
    description:
      "Identifies eligible government schemes for users based on personal information, guides them through applications, and tracks status to ensure benefits are delivered efficiently with support from Saathis.",
    points: [
      "Auto-detect eligibility from user profiles",
      "Guided scheme applications & status tracking",
      "Delivered with on-ground Saathi support",
    ],
    accent: "from-[#7c3aed] to-[#4c1d95]",
    icon: Landmark,
    image: welfareImage,
    panel: [
      { value: "Auto", label: "Eligibility detection" },
      { value: "Guided", label: "Application support" },
      { value: "Live", label: "Status tracking" },
    ],
  },
  {
    eyebrow: "Community",
    title: "Localized Community Platform",
    description:
      "A community-driven digital hub where users can share stories, post needs, and stay informed about local and global news, fostering unity and empowerment within rural communities.",
    points: [
      "Share stories and post local needs",
      "Local & global news in one feed",
      "Fosters unity and empowerment",
    ],
    accent: "from-[#d97706] to-[#92400e]",
    icon: Users,
    image: communityImage,
    panel: [
      { value: "Local", label: "Community-first content" },
      { value: "Everyone", label: "Can participate" },
      { value: "Informed", label: "Stories & news" },
    ],
  },
  {
    eyebrow: "Employment",
    title: "Jobs Connect",
    description:
      "Connects users to local job opportunities tailored to their skills, featuring a job-matching tool, resume builder, and Saathi support, making the employment search more accessible and effective.",
    points: [
      "Local jobs matched to user skills",
      "In-built resume builder",
      "Dedicated Saathi support",
    ],
    accent: "from-[#475569] to-[#1e293b]",
    icon: Briefcase,
    image: jobsImage,
    panel: [
      { value: "Local", label: "Jobs near you" },
      { value: "Skills", label: "Smart matching" },
      { value: "Saathi", label: "Human support" },
    ],
  },
];
import type { LucideIcon } from "lucide-react";
import { Banknote, Globe, PiggyBank, Smartphone } from "lucide-react";

export type NetworkStat = {
  value: string;
  label: string;
};

export const networkStats: NetworkStat[] = [
  { value: "10,000+", label: "Active Agents" },
  { value: "500+", label: "Districts Covered" },
  { value: "50,000+", label: "Accounts Opened" },
  { value: "₹10 Cr+", label: "Monthly Transactions" },
];

export type NetworkCapability = {
  title: string;
  description: string;
};

export const networkCapabilities: NetworkCapability[] = [
  {
    title: "Bridging the Digital Divide",
    description:
      "The Saathi Network is the backbone of Online Saathi, featuring a team of dedicated on-the-ground agents known as Sewa Saathis. They provide personalized assistance to informal workers, ensuring seamless access to our tech platform and services.",
  },
  {
    title: "Personalized Support",
    description:
      "Sewa Saathis are highly trained to guide users through our platform, helping with everything from navigating the mobile app to accessing financial services and job opportunities. They ensure every user gets the support they need.",
  },
  {
    title: "Community Engagement",
    description:
      "Operating within local communities, Sewa Saathis build trust and foster engagement. Their consistent, reliable assistance bridges the gap between digital technology and real-world interactions, promoting inclusive growth.",
  },
  {
    title: "Empowering Informal Workers",
    description:
      "Our network empowers informal workers by equipping them with the tools and resources needed to improve their livelihoods. Join us in creating a more inclusive and sustainable future.",
  },
];

export type NeoBankingService = {
  icon: LucideIcon;
  title: string;
  description: string;
  highlight?: string;
};

export const neoBankingServices: NeoBankingService[] = [
  {
    icon: Smartphone,
    title: "Mobile Banking",
    description:
      "Access banking services conveniently through a user-friendly mobile app.",
    highlight: "24/7 Access",
  },
  {
    icon: Globe,
    title: "Remittances",
    description:
      "Send and receive money securely, with minimal fees and hassle.",
    highlight: "Low Fees",
  },
  {
    icon: PiggyBank,
    title: "Savings Accounts",
    description:
      "Open savings accounts and build financial security for the future.",
    highlight: "Zero Balance",
  },
  {
    icon: Banknote,
    title: "Micro-loans",
    description:
      "Access micro-loans to support entrepreneurial endeavors or emergencies.",
  },
];
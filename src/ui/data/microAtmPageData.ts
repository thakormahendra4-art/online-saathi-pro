import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  Banknote,
  FileSearch,
  Fingerprint,
  IndianRupee,
  ReceiptText,
  ShieldCheck,
  Waypoints,
} from "lucide-react";

export type MicroAtmFeature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const microAtmFeatures: MicroAtmFeature[] = [
  {
    icon: Waypoints,
    title: "Easy to Use",
    description:
      "Simple biometric-based interface designed for agents with minimal technical training. Just place a finger, enter the amount, and the cash is dispensed — no complex steps.",
  },
  {
    icon: ShieldCheck,
    title: "Safe and Quick",
    description:
      "Every transaction is secured with encrypted Aadhaar authentication. Funds are transferred instantly, reducing risk and building customer trust.",
  },
  {
    icon: Fingerprint,
    title: "Portable",
    description:
      "Compact handheld device that fits in your pocket. Serve customers anywhere — from your shop counter to village doorsteps — without being tied to a fixed location.",
  },
];

export type MicroAtmService = {
  icon: LucideIcon;
  title: string;
  description: string;
  highlight: string;
};

export const microAtmServices: MicroAtmService[] = [
  {
    icon: Banknote,
    title: "Cash Withdrawal",
    description:
      "Enable customers to withdraw cash using Aadhaar biometric authentication — no debit card required. Ideal for rural areas with limited bank access.",
    highlight: "AEPS Based",
  },
  {
    icon: FileSearch,
    title: "Balance Inquiry",
    description:
      "Let customers instantly check their bank balance through biometric verification. Quick, accurate, and builds trust in your services.",
    highlight: "Instant Result",
  },
  {
    icon: ReceiptText,
    title: "Mini Statement",
    description:
      "Provide printed or digital mini statements of recent transactions. Helps customers track spending and plan their finances better.",
    highlight: "Last 10 Txns",
  },
];

export type MicroAtmReason = {
  icon: LucideIcon;
  title: string;
  text: string;
};

export const microAtmReasons: MicroAtmReason[] = [
  {
    icon: BadgeCheck,
    title: "Verified",
    text: "Every device and agent is verified through Aadhaar eKYC, ensuring authenticity and regulatory compliance.",
  },
  {
    icon: IndianRupee,
    title: "Value for Work",
    text: "Earn competitive commissions on every transaction — no middlemen, transparent settlement directly to your bank.",
  },
  {
    icon: ShieldCheck,
    title: "Trust for Partners",
    text: "Bank-grade security and encrypted transactions protect every customer interaction, building long-term trust.",
  },
];
import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  Banknote,
  Briefcase,
  HeartHandshake,
  Landmark,
  Plane,
  Receipt,
  Send,
  ShieldCheck,
} from "lucide-react";

export type Service = {
  icon: LucideIcon;
  title: string;
  text: string;
};

export const topServices: Service[] = [
  {
    icon: Briefcase,
    title: "Safe Jobs Connect",
    text: "Local job opportunities tailored to user skills, with a job-matching tool, resume builder, and Saathi support.",
  },
  {
    icon: HeartHandshake,
    title: "Social Welfare Schemes",
    text: "Identify eligible government schemes, guide applications, and track status so benefits reach the right people.",
  },
];

export const onDemandServices: Service[] = [
  {
    icon: Banknote,
    title: "Micro ATM",
    text: "AEPS cash withdrawals and mini statements at your doorstep.",
  },
  {
    icon: BadgeCheck,
    title: "PAN Card Center",
    text: "PAN card applications and verifications made easy locally.",
  },
  {
    icon: Plane,
    title: "Travel",
    text: "Ticket booking and travel assistance for everyday journeys.",
  },
  {
    icon: ShieldCheck,
    title: "Insurance",
    text: "Simple, accessible insurance options for rural families.",
  },
  {
    icon: Receipt,
    title: "Bill Payment",
    text: "Electricity, mobile, DTH and more — all paid in one place.",
  },
  {
    icon: Landmark,
    title: "Neo Banking",
    text: "Modern banking features designed for informal workers.",
  },
  {
    icon: Send,
    title: "Indo-Nepal Remittance",
    text: "Secure cross-border remittances between India and Nepal.",
  },
];
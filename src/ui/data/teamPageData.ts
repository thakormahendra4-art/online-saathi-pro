import type { LucideIcon } from "lucide-react";
import {
  HeartHandshake,
  MapPin,
  Users,
} from "lucide-react";

export type ExecutiveLeader = {
  name: string;
  initials: string;
  role: string;
  description: string;
  gradient: string;
};

export const executiveLeaders: ExecutiveLeader[] = [
  {
    name: "Aarav Sharma",
    initials: "AS",
    role: "Chief Executive Officer & Founder",
    description:
      "Previously led engineering initiatives at top-tier fintech unicorns. Passionate about financial inclusion and scalable distributed systems.",
    gradient: "from-[#0075a8] to-[#00507a]",
  },
  {
    name: "Priya Venkat",
    initials: "PV",
    role: "Chief Technology Officer",
    description:
      "Architecting secure core banking rails and high-throughput real-time transaction engines with over 15 years of industry experience.",
    gradient: "from-[#0f766e] to-[#134e4a]",
  },
  {
    name: "Rohan Mehta",
    initials: "RM",
    role: "Chief Financial Officer",
    description:
      "Overseeing global regulatory compliance, risk management, and strategic fiscal expansion across emerging markets.",
    gradient: "from-[#7c3aed] to-[#4c1d95]",
  },
];

export type Advisor = {
  name: string;
  initials: string;
  role: string;
  description: string;
  gradient: string;
};

export const advisors: Advisor[] = [
  {
    name: "Sunita Deshmukh",
    initials: "SD",
    role: "Former Banking Regulator & FinTech Advisor",
    description:
      "Advising on institutional governance, compliance frameworks, and cross-border regulatory strategies.",
    gradient: "from-[#b45309] to-[#78350f]",
  },
  {
    name: "Vikramaditya Roy",
    initials: "VR",
    role: "Venture Partner & Tech Investor",
    description:
      "Guiding product scaling, ecosystem expansion, and international institutional partnerships.",
    gradient: "from-[#0e7490] to-[#155e75]",
  },
];

export type CultureItem = {
  icon: LucideIcon;
  title: string;
  text: string;
  gradient: string;
};

export const cultureItems: CultureItem[] = [
  {
    icon: Users,
    title: "Collaborative Pods",
    text: "Small, autonomous teams shipping directly with merchants across our field hubs.",
    gradient: "from-[#0075a8] to-[#00507a]",
  },
  {
    icon: MapPin,
    title: "Field-First Office",
    text: "Jaipur & Bengaluru hubs with district offices in 22 states, not just city desks.",
    gradient: "from-[#0f766e] to-[#134e4a]",
  },
  {
    icon: HeartHandshake,
    title: "Customer Obsession",
    text: "Every sprint ends with a merchant call — insights beat assumptions, always.",
    gradient: "from-[#7c3aed] to-[#4c1d95]",
  },
];

export type Position = {
  title: string;
  meta: string;
};

export const positions: Position[] = [
  {
    title: "Senior Backend Engineer - Core Banking",
    meta: "Engineering • Bangalore / Remote • Full-Time",
  },
  {
    title: "Product Designer - Design Systems",
    meta: "Design • Mumbai / Hybrid • Full-Time",
  },
  {
    title: "Compliance & Risk Officer",
    meta: "Legal & Risk • Delhi NCR • Full-Time",
  },
];
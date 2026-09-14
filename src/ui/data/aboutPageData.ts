import type { LucideIcon } from "lucide-react";
import {
  Eye,
  Flag,
  Globe2,
  Heart,
  MapPin,
  School,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Zap,
} from "lucide-react";

export type ValueCard = {
  icon: LucideIcon;
  title: string;
  text: string;
  badge?: string;
};

export const coreValues: ValueCard[] = [
  {
    icon: ShieldCheck,
    title: "Relentless Trust & Security",
    text: "We treat every transaction as a sacred trust. Bank-grade encryption, zero data compromises, and absolute compliance are non-negotiable baselines across all our systems.",
    badge: "SOC2 Type II & ISO 27001 Certified",
  },
  {
    icon: Zap,
    title: "Speed as a Feature",
    text: "In finance, waiting is a tax. We engineer sub-second payout responses and instant reconciliation workflows.",
  },
  {
    icon: Globe2,
    title: "Inclusivity by Design",
    text: "Building products that anyone, anywhere can use effortlessly, regardless of technical literacy.",
  },
  {
    icon: Users,
    title: "Radical Transparency",
    text: "No hidden fees, no obscure documentation, and open communication channels with our merchant ecosystem.",
  },
];

export type Leader = {
  name: string;
  initials: string;
  role: string;
  description: string;
  gradient: string;
};

export const leadershipMembers: Leader[] = [
  {
    name: "Aarav Mehta",
    initials: "AM",
    role: "Chief Executive Officer",
    description:
      "Ex-Principal Architect at global payment gateways, passionate about rural economic upliftment.",
    gradient: "from-[#0075a8] to-[#00507a]",
  },
  {
    name: "Priya Sharma",
    initials: "PS",
    role: "Chief Technology Officer",
    description:
      "Spearheaded resilient real-time banking pipelines processing billions of secure transactions.",
    gradient: "from-[#0f766e] to-[#134e4a]",
  },
  {
    name: "Rohan Mehta",
    initials: "RM",
    role: "Chief Compliance Officer",
    description:
      "Regulatory expert ensuring multi-jurisdiction financial network compliance.",
    gradient: "from-[#7c3aed] to-[#4c1d95]",
  },
];

export type Pillar = {
  icon: LucideIcon;
  label: string;
  text: string;
};

export const missionPillars: Pillar[] = [
  {
    icon: Eye,
    label: "Our Vision",
    text: "Online Saathi is a partner for everyone who needs support.",
  },
  {
    icon: Target,
    label: "Our Mission",
    text: "To create products and services that help our customers achieve their goals.",
  },
];

export type ChairmanStat = {
  value: string;
  label: string;
};

export const chairmanStats: ChairmanStat[] = [
  {
    value: "2012",
    label: "Completed 12th grade and began the social sector journey",
  },
  {
    value: "₹5 Cr+",
    label: "Raised and donated through the NGO in five years",
  },
  {
    value: "₹4 Cr+",
    label: "Relief material donated during the pandemic",
  },
];

export type JourneyItem = {
  year: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const journeyItems: JourneyItem[] = [
  {
    year: "2015",
    title: "From Struggle to Purpose",
    description:
      "Naresh had worked as a child labourer in factories, hotels, and tea shops — yet never gave up his education. While at Teach for India, he saw the hardships of migrant workers first-hand and founded Online Saathi, a digital mobile office that helped migrants access jobs, their rights, and legal aid in cities.",
    icon: Flag,
  },
  {
    year: "2018",
    title: "Labour Resource & Support Centre",
    description:
      "With CSR funding, Naresh launched the Labour Resource and Support Centre, helping 20,000+ migrants across the country. He registered a union and helped lakhs of migrant workers access government schemes, entitlements, wages, and legal aid.",
    icon: School,
  },
  {
    year: "2019",
    title: "Relief During the Pandemic",
    description:
      "When COVID-19 hit migrant communities hard, Online Saathi organised relief for over 12,500 migrant labourer families — food, rations, transport, flight tickets, livelihoods, and loans to start businesses — raising more than ₹2.25 crore over two years.",
    icon: Heart,
  },
  {
    year: "2022",
    title: "#WalkForMigrant",
    description:
      "Naresh walked 5,100 kilometres through 77 districts across 10 states. He filed 100+ RTIs on migrant labour issues and petitioned over 50 district collectors and the PMO, calling for action and dedicated schemes for migrant workers.",
    icon: MapPin,
  },
  {
    year: "Today",
    title: "Empowering Through Skills",
    description:
      "Online Saathi is now a thriving movement that continues to support migrants. Its vocational training programmes — carpentry, tailoring, and digital literacy — help thousands build skills, find work, and shape better futures.",
    icon: Sparkles,
  },
];
import type { LucideIcon } from "lucide-react";
import {
  Building2,
  CheckCircle,
  Globe,
  Heart,
  MapPin,
  Megaphone,
  Shield,
  Sparkles,
  Truck,
  UserPlus,
  Users,
  Wrench,
} from "lucide-react";

export type NetworkStat = {
  value: string;
  label: string;
  icon: LucideIcon;
};

export const networkStats: NetworkStat[] = [
  { value: "10,000+", label: "Active Saathis", icon: Users },
  { value: "500+", label: "Districts Covered", icon: MapPin },
  { value: "50,000+", label: "Families Served", icon: Globe },
];

export type NetworkLevel = {
  icon: LucideIcon;
  title: string;
  description: string;
  highlight?: string;
};

export const networkLevels: NetworkLevel[] = [
  {
    icon: MapPin,
    title: "Payments — State Level",
    description:
      "Our services cover multiple states across India, each with unique needs and demographics. In each state, we work closely with local organizations, community leaders, and government bodies to deliver our services effectively. This localized approach allows us to adapt our offerings to each state's specific social and economic environment, ensuring maximum impact.",
    highlight: "Localized Impact",
  },
  {
    icon: Building2,
    title: "District Level Operations",
    description:
      "Within each state, we have set up operational networks at the district level. By dividing operations district-wise, we're able to provide more targeted services and reach people in rural and underserved areas. Our district teams are deeply involved with the local communities, making sure that every initiative is relevant and accessible to the residents of each district.",
    highlight: "Targeted Reach",
  },
  {
    icon: Truck,
    title: "Delivery — Government Schemes",
    description:
      "Our Saathis are community representatives trained to deliver Online Saathi's services at the grassroots level. These individuals act as connectors, spreading awareness about available services, helping people navigate social welfare schemes, job opportunities, and more.",
    highlight: "Grassroots Delivery",
  },
];

export type SaathiTrait = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const saathiTraits: SaathiTrait[] = [
  {
    icon: Shield,
    title: "Verified & Trained",
    description:
      "Every Saathi undergoes thorough background verification and receives comprehensive training on our platform and services.",
  },
  {
    icon: Heart,
    title: "Community-First",
    description:
      "Saathis are selected from local communities, making them trusted figures who understand the unique challenges faced by their neighbors.",
  },
  {
    icon: CheckCircle,
    title: "Government Schemes Engine",
    description:
      "Saathis help people navigate social welfare schemes, job opportunities, and more — acting as connectors who spread awareness about available services.",
  },
  {
    icon: Sparkles,
    title: "People-Centric Platform",
    description:
      "Their involvement ensures that Online Saathi remains a people-centric platform, bridging the gap between technology and real-world impact.",
  },
];

export type EntrepreneurActivity = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const activities: EntrepreneurActivity[] = [
  {
    icon: Megaphone,
    title: "Outreach",
    description:
      "Sewa Saathis actively engage with local communities to identify and reach out to informal workers in need.",
  },
  {
    icon: UserPlus,
    title: "Onboarding",
    description:
      "They assist workers in registering on the Online Saathi Platform and understanding the available services.",
  },
  {
    icon: Wrench,
    title: "Service Facilitation",
    description:
      "Sewa Saathi is gudie worker through the process of accessing services, from job applications to financial services.",
  },
  {
    icon: CheckCircle,
    title: "Follow-up Support",
    description:
      "They provide ongoing support and follow-up to ensure successfull service delivery and address any concerns.",
  },
];
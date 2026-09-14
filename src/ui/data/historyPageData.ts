import type { LucideIcon } from "lucide-react";
import {
  Footprints,
  HeartHandshake,
  Landmark,
  Sparkles,
} from "lucide-react";

export type Milestone = {
  icon: LucideIcon;
  value: string;
  label: string;
};

export const milestones: Milestone[] = [
  {
    icon: Landmark,
    value: "2015",
    label: "Founded by Naresh",
  },
  {
    icon: HeartHandshake,
    value: "20,000+",
    label: "Migrants supported since 2018",
  },
  {
    icon: Sparkles,
    value: "12,500+",
    label: "Families served in crisis",
  },
  {
    icon: Footprints,
    value: "5,100 km",
    label: "Walked for migrant rights",
  },
];

export type WalkHighlight = {
  value: string;
  label: string;
};

export const walkHighlights: WalkHighlight[] = [
  { value: "5,100 km", label: "Walked across India" },
  { value: "77", label: "Districts visited" },
  { value: "10", label: "States covered" },
  { value: "100+", label: "RTIs filed" },
  { value: "50+", label: "District collectors petitioned" },
];
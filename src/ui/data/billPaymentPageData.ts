import {
  Cable,
  Droplets,
  Flame,
  Landmark,
  Lightbulb,
  ShieldCheck,
  Smartphone,
  Tv,
  Wifi,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type BillCategory = {
  icon: LucideIcon;
  title: string;
  description: string;
  highlight?: string;
};

export const billCategories: BillCategory[] = [
  {
    icon: Zap,
    title: "Electricity",
    description: "Pay electricity bills for all major state and private boards instantly.",
    highlight: "Most Popular",
  },
  {
    icon: Smartphone,
    title: "Mobile Recharge",
    description: "Prepaid and postpaid mobile recharges for all operators across India.",
  },
  {
    icon: Tv,
    title: "DTH Recharge",
    description: "Recharge DTH connections for Tata Play, Airtel, Dish TV, and more.",
  },
  {
    icon: Droplets,
    title: "Water Bill",
    description: "Pay municipal water supply bills with instant confirmation.",
  },
  {
    icon: Flame,
    title: "Gas Bill",
    description: "Pay Piped Natural Gas and LPG cylinder booking bills easily.",
  },
  {
    icon: Wifi,
    title: "Broadband",
    description: "Pay broadband and fiber internet bills for all major providers.",
  },
  {
    icon: Cable,
    title: "Cable TV",
    description: "Recharge cable TV subscriptions for local and national operators.",
  },
  {
    icon: Landmark,
    title: "Insurance Premium",
    description: "Pay life and general insurance premiums before the due date.",
  },
];

export type BillPaymentFeature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const billPaymentFeatures: BillPaymentFeature[] = [
  {
    icon: Zap,
    title: "Instant Confirmation",
    description:
      "Every payment is processed in real-time with instant acknowledgment — no delays, no uncertainty for your customers.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Reliable",
    description:
      "Powered by BBPS with bank-grade encryption and guaranteed settlement — your customers' payments are always safe.",
  },
  {
    icon: Lightbulb,
    title: "Easy to Operate",
    description:
      "Simple interface designed for agents with minimal training. Enter the biller, amount, and customer details — done.",
  },
];
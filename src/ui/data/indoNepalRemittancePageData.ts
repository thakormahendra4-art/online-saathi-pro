import type { LucideIcon } from "lucide-react";
import {
  CheckCircle,
  Clock,
  CreditCard,
  Fingerprint,
  Send,
  Shield,
  UserCheck,
  Zap,
} from "lucide-react";

export type RemittanceFeature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const remittanceFeatures: RemittanceFeature[] = [
  {
    icon: Zap,
    title: "Instant Transfer",
    description:
      "Money reaches Nepal within minutes via IMPS/NEFT — no waiting days for cross-border settlement.",
  },
  {
    icon: Shield,
    title: "Secure & Compliant",
    description:
      "Fully compliant with RBI and Nepal Rastra Bank regulations. Every transaction is encrypted and tracked.",
  },
  {
    icon: CreditCard,
    title: "Competitive Rates",
    description:
      "Get the best INR-NPR exchange rates with transparent pricing — no hidden charges or deductions.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description:
      "Send money anytime through our agent network. No banking hours restriction for your customers.",
  },
];

export type RemittanceStep = {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

export const remittanceSteps: RemittanceStep[] = [
  {
    number: "01",
    icon: UserCheck,
    title: "Register Sender",
    description:
      "The sender provides Aadhaar and basic details. One-time KYC takes less than 2 minutes.",
  },
  {
    number: "02",
    icon: Fingerprint,
    title: "Biometric Verification",
    description:
      "Fingerprint authentication ensures the transaction is secure and authorized by the sender.",
  },
  {
    number: "03",
    icon: Send,
    title: "Send Money",
    description:
      "Enter the recipient's details in Nepal, amount, and confirm. Money is sent instantly via IMPS.",
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Instant Delivery",
    description:
      "Recipient receives the funds in their Nepali bank account or mobile wallet within minutes.",
  },
];
import type { LucideIcon } from "lucide-react";
import {
  AlertTriangle,
  CalendarClock,
  FileText,
  Mail,
  RefreshCcw,
  Scale,
  UserCheck,
} from "lucide-react";

export type PolicySection = {
  id: string;
  icon: LucideIcon;
  number: string;
  heading: string;
  points?: string[];
  subSections?: {
    heading: string;
    points?: string[];
  }[];
};

export const policySections: PolicySection[] = [
  {
    id: "overview",
    icon: FileText,
    number: "01",
    heading: "Overview",
    points: [
      "At Online Saathi, we act solely as a third-party technology platform connecting users with various service providers. We do not directly provide or control the services delivered by our partners. This Refund Policy outlines the limited scenarios where refunds may be applicable and clarifies our role and responsibility.",
    ],
  },
  {
    id: "general-refund-terms",
    icon: Scale,
    number: "02",
    heading: "General Refund Terms",
    subSections: [
      {
        heading: "2.1 No Refunds for Completed Services",
        points: [
          "Once a user successfully purchases a service, subscription, or offer through Online Saathi, and the order is processed with the service provider, no refund will be provided.",
          "Users are requested to carefully verify all details before making a payment.",
        ],
      },
      {
        heading: "2.2 Platform Service Fee",
        points: [
          "Any platform convenience charges collected by Online Saathi are non-refundable, even if the transaction is later canceled by the user or the service provider.",
        ],
      },
      {
        heading: "2.3 Third-Party Services",
        points: [
          "Refunds related to the quality, delay, or non-delivery of the service are subject to the respective service provider\u2019s refund or grievance redressal policy.",
          "Online Saathi will facilitate communication between the user and service provider but is not responsible for any final outcome of refund claims.",
        ],
      },
    ],
  },
  {
    id: "failed-transactions",
    icon: RefreshCcw,
    number: "03",
    heading: "Refunds for Failed Transactions",
    subSections: [
      {
        heading: "3.1 Automatic Refunds for Failed Transactions",
        points: [
          "If a user\u2019s payment is deducted but the transaction fails at Online Saathi\u2019s payment gateway level, the amount will be automatically refunded to the user\u2019s original payment method within 3 to 21 working days.",
          "Refunds will cover only the net transaction amount (excluding any applicable gateway charges, bank fees, or taxes).",
        ],
      },
      {
        heading: "3.2 Disputed Transactions",
        points: [
          "If a transaction appears successful but the user does not receive service access:",
          "The user must raise a support request by emailing support@onlinesaathi.org within 48 hours of the transaction.",
          "Online Saathi will investigate with the payment gateway and/or service provider.",
          "Based on the investigation, a refund may be facilitated, but the final decision rests with the service provider.",
        ],
      },
    ],
  },
  {
    id: "kyc-failure",
    icon: UserCheck,
    number: "04",
    heading: "KYC Verification Failure",
    points: [
      "If a user fails to complete KYC (Know Your Customer) verification, resulting in account non-activation, the payment made will not be refunded.",
    ],
  },
  {
    id: "important-terms",
    icon: AlertTriangle,
    number: "05",
    heading: "Important Terms",
    points: [
      "Role Clarification: Online Saathi is a facilitator platform. The responsibility for service fulfillment lies with third-party providers.",
      "Maximum Liability: Our liability is strictly limited to refunding the transaction amount collected by us, if applicable.",
      "No Consequential Damages: Online Saathi is not responsible for any indirect losses, damages, or inconvenience suffered by the user.",
    ],
  },
  {
    id: "policy-changes",
    icon: CalendarClock,
    number: "06",
    heading: "Changes to This Policy",
    points: [
      "We may revise this Refund Policy from time to time. Updates will be posted on our website and/or communicated via email or SMS, as appropriate.",
    ],
  },
  {
    id: "contact",
    icon: Mail,
    number: "07",
    heading: "Contact Us",
    points: [
      "For any refund-related queries, please reach out to:",
      "Email: support@onlinesaathi.org",
      "Phone: +91-9099005251",
      "Website: www.onlinesaathi.org",
    ],
  },
];
import {
  Activity,
  Building2,
  CheckCircle2,
  Clock,
  Mail,
  MessageCircle,
  Phone,
  Send,
  Ticket,
  type LucideIcon,
} from "lucide-react";

export type Channel = {
  icon: LucideIcon;
  title: string;
  detail: string;
  availability: string;
  tone: "green" | "blue";
};

export const channels: Channel[] = [
  {
    icon: Phone,
    title: "Toll-Free Helpline",
    detail: "1800-XXX-XXXX · Hindi, English & regional languages",
    availability: "24 × 7",
    tone: "green",
  },
  {
    icon: Mail,
    title: "Email Support Desk",
    detail: "support@onlinesaathi.in · NEFT & settlement queries",
    availability: "< 2 hrs",
    tone: "blue",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Care",
    detail: "Chat with a support agent directly from your merchant app",
    availability: "24 × 7",
    tone: "green",
  },
  {
    icon: Send,
    title: "Merchant Telegram Bot",
    detail: "Automated balance, transaction, and status lookups",
    availability: "Instant",
    tone: "blue",
  },
  {
    icon: Building2,
    title: "Regional Branch Visit",
    detail: "Walk-in support at 316 district hubs across 22 states",
    availability: "On-site",
    tone: "green",
  },
  {
    icon: Building2,
    title: "Corporate Office",
    detail: "Jaipur HQ & Bengaluru office for enterprise accounts",
    availability: "Mon–Sat",
    tone: "blue",
  },
];

export type Metric = {
  icon: LucideIcon;
  label: string;
  value: string;
};

export const metrics: Metric[] = [
  {
    icon: Ticket,
    label: "Open Tickets",
    value: "142",
  },
  {
    icon: Clock,
    label: "Avg. First Response",
    value: "1m 38s",
  },
  {
    icon: CheckCircle2,
    label: "Resolved Today",
    value: "1,204",
  },
  {
    icon: Activity,
    label: "SLA Compliance",
    value: "99.2%",
  },
];

export type QueueRow = readonly [string, string, string, string];

export const queueRows: QueueRow[] = [
  ["Phone Queue", "8 agents", "Average wait 38s", "green"],
  ["Email Inbox", "5 agents", "Average wait 26m", "blue"],
  ["WhatsApp Care", "7 agents", "Average wait 52s", "green"],
  ["Telegram Bot", "Automated", "Instant resolution", "blue"],
  ["Escalation Desk", "2 leads", "Priority overrides", "amber"],
];

export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: "What should I do if an AEPS transaction fails?",
    answer:
      "Share the transaction reference number with our helpline or WhatsApp Care. Failed AEPS debits are auto-reversed within T+1, and our resolution desk tracks every case to closure.",
  },
  {
    question: "How long does a settlement take?",
    answer:
      "Commissions and settlements follow T+0 instant payouts for completed transactions. Reversed and disputed cases settle within T+1 working day.",
  },
  {
    question: "How do I raise a dispute or chargeback?",
    answer:
      "Open a ticket from your merchant dashboard or email dispute@onlinesaathi.in with supporting proof. A dedicated risk officer responds within 4 working hours.",
  },
  {
    question: "Is 24×7 support really available?",
    answer:
      "Yes. The toll-free helpline and WhatsApp Care operate around the clock, 365 days a year, with escalation coverage through every national holiday.",
  },
  {
    question: "Can I get support in my local language?",
    answer:
      "Our regional hubs cover Hindi, English, Tamil, Telugu, Bengali, Marathi, and Gujarati. Choose your language in the IVR menu or reach your district hub.",
  },
  {
    question: "How do I apply to become a partner or distributor?",
    answer:
      "Use the inquiry form with Inquiry Type 'Partner / Distribution'. Our partnership team responds within 24 hours with a fit-to-role call.",
  },
];

export type Center = {
  city: string;
  address: string;
  phone: string;
  hours: string;
};

export const centers: Center[] = [
  {
    city: "Jaipur (Corporate HQ)",
    address: "Crystal IT Park, Malviya Nagar, Jaipur, Rajasthan 302017",
    phone: "+91 141-XXX-XXXX",
    hours: "Mon–Sat, 9:00 – 19:00",
  },
  {
    city: "Bengaluru (Engineering)",
    address: "Tech Park, Outer Ring Road, Bengaluru, Karnataka 560103",
    phone: "+91 80-XXX-XXXX",
    hours: "Mon–Sat, 9:00 – 19:00",
  },
  {
    city: "New Delhi (Regulatory)",
    address: "Bharat Square, Connaught Place, New Delhi 110001",
    phone: "+91 11-XXX-XXXX",
    hours: "Mon–Fri, 9:30 – 18:30",
  },
  {
    city: "Mumbai (Enterprise)",
    address: "Business Bay, Bandra Kurla Complex, Mumbai 400051",
    phone: "+91 22-XXX-XXXX",
    hours: "Mon–Fri, 9:30 – 18:30",
  },
  {
    city: "Kolkata (East Zone)",
    address: "Merchant Tower, Sector V, Salt Lake, Kolkata 700091",
    phone: "+91 33-XXX-XXXX",
    hours: "Mon–Sat, 9:00 – 19:00",
  },
  {
    city: "Patna (Bihar Field Hub)",
    address: "Market Yard, Boring Road, Patna 800013",
    phone: "+91 612-XXX-XXXX",
    hours: "Mon–Sun, 8:00 – 20:00",
  },
];

export type ContactLinks = Record<string, string[]>;

export const contactLinks: ContactLinks = {
  Support: ["Help Center", "Toll-Free Helpline", "Raise a Ticket", "System Status", "Contact Sales"],
  Company: ["About Us", "Leadership", "Careers", "Press & Media", "Partners"],
  Resources: ["API Documentation", "Developer Portal", "Merchant Guides", "FAQs", "Blog"],
};
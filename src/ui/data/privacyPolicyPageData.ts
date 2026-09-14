import type { LucideIcon } from "lucide-react";
import {
  Archive,
  CalendarClock,
  Contact,
  Database,
  HeartHandshake,
  Lock,
  Settings,
  Share2,
} from "lucide-react";

export type Point = string;

export type PolicySection = {
  id: string;
  icon: LucideIcon;
  number: string;
  heading: string;
  points?: Point[];
  subSections?: {
    heading: string;
    points?: Point[];
  }[];
};

export const policySections: PolicySection[] = [
  {
    id: "commitment",
    icon: HeartHandshake,
    number: "01",
    heading: "Commitment to Privacy",
    points: [
      "At Online Saathi, operated by SHUBHLAXMI MULTI SERVICES INDIA PRIVATE LIMITED, we are committed to safeguarding your privacy. Your trust is at the heart of our services. We strictly follow applicable Indian laws, regulations, and guidelines to protect your personal information.",
    ],
  },
  {
    id: "information-we-collect",
    icon: Database,
    number: "02",
    heading: "Information We Collect",
    points: [
      "We collect necessary personal and business information to provide a secure, seamless experience:",
    ],
    subSections: [
      {
        heading: "2.1 User Information",
        points: [
          "Full Name",
          "Mobile Number",
          "Email Address",
          "Date of Birth",
          "Gender",
          "Profile Photo",
        ],
      },
      {
        heading: "2.2 Member Information",
        points: [
          "Current and Permanent Address",
          "Identity Proof (Aadhar Card, PAN Card, Passport, Citizenship, Driver\u2019s License)",
          "Occupation and Education Details",
          "Marital Status and Location",
        ],
      },
      {
        heading: "2.3 Business Information (For Saathi, Partners, Companies)",
        points: [
          "Business Name (only registered names)",
          "Business Registration Certificates",
          "Director Personal Details",
          "Type of Business",
          "Registered Address (State, District, City, Municipality, Ward, Street/Tole)",
          "Secondary Contact Information",
          "Bank Details (optional)",
          "Business Documents (PAN, MOA, AOA, licenses, if applicable)",
        ],
      },
      {
        heading: "2.4 Job Applicant Information",
        points: [
          "Resume and Cover Letter",
          "Educational and Professional Qualifications",
          "References",
        ],
      },
      {
        heading: "2.5 App Permissions",
        points: [
          "Camera and Photos: For KYC and profile verification",
          "SMS Access: To send and receive transaction confirmations",
          "Contacts Access: To simplify number selection (no storage or sharing)",
          "Location Access: To locate nearby agents and services",
          "Internet Access: For a seamless transaction experience",
        ],
      },
    ],
  },
  {
    id: "how-we-use",
    icon: Settings,
    number: "03",
    heading: "How We Use Your Information",
    points: [
      "We use the collected data to:",
      "Verify your identity",
      "Facilitate services and transactions",
      "Communicate service updates and promotions",
      "Provide customer support",
      "Improve our platform and services",
      "Detect fraud and unauthorized activities",
      "Ensure compliance with Indian regulatory authorities",
    ],
  },
  {
    id: "sharing",
    icon: Share2,
    number: "04",
    heading: "Sharing and Disclosure",
    points: [
      "Your information remains confidential and is not shared without your consent, except:",
      "When required by law (government, legal authorities)",
      "For fraud prevention and security measures",
      "When collaborating with trusted partners (under strict data protection agreements)",
    ],
  },
  {
    id: "retention",
    icon: Archive,
    number: "05",
    heading: "Data Retention & Account Deletion",
    points: [
      "We manage your data as follows:",
      "Retention: We keep your information only as long as needed for operational, legal, and regulatory purposes.",
      "Deletion: Inactive accounts (6 months to 3 years) may be deleted if:",
      "The account balance is zero",
      "No pending transactions exist",
      "Fraudulent/misuse activities are detected",
      "For job applicants, data may be retained for evaluation even after recruitment closure.",
    ],
  },
  {
    id: "data-protection",
    icon: Lock,
    number: "06",
    heading: "Data Protection",
    points: [
      "We employ industry-standard security practices, including encryption, secure servers, and regular audits, to protect your data.",
    ],
  },
  {
    id: "policy-changes",
    icon: CalendarClock,
    number: "07",
    heading: "Changes to This Policy",
    points: [
      "We may update this Privacy Policy to reflect changes in our practices or legal obligations. Significant changes will be communicated via:",
      "SMS",
      "Email",
      "In-app notifications",
      "-audio",
      "The latest version will be posted on our website.",
    ],
  },
  {
    id: "contact",
    icon: Contact,
    number: "08",
    heading: "Contact Information",
    points: [
      "If you have any queries, concerns, or feedback regarding this privacy policy, or if you wish to exercise your rights under applicable law:",
      "Registered Office: 109, Maruti Heights, Naroda Ring Road, Near Muthiya Toll Plaza, Ahmedabad, Gujarat 382345, India",
      "Email: support@onlinesaathi.org",
      "Website: www.onlinesaathi.org",
      "Phone: +91 84888 56251",
    ],
  },
];
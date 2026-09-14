import type { JSX } from "react";
import {
  AlertTriangle,
  Ban,
  BookOpen,
  CalendarClock,
  ClipboardCheck,
  CloudLightning,
  Contact,
  Copyright,
  CreditCard,
  FileCheck,
  Info,
  Landmark,
  Layers,
  Lightbulb,
  MessageSquare,
  Network,
  Shield,
  ShieldAlert,
  UserCheck,
} from "lucide-react";
import Footer from "../components/Footer";

type CalloutKind = "important" | "note" | "tip" | "warning" | "advice";

type CalloutInfo = {
  kind: CalloutKind;
  body: string;
};

type Point = string | CalloutInfo;

type PolicySection = {
  id: string;
  icon: typeof Info;
  number: string;
  heading: string;
  points?: Point[];
  subSections?: {
    heading: string;
    points?: Point[];
  }[];
};

const asCallout = (point: string): Point => {
  const match = point.match(
    /^(Important|Note|Tip|Warning|Advice):\s*(.*)$/,
  );

  if (match) {
    return {
      kind: match[1].toLowerCase() as CalloutKind,
      body: match[2].trim(),
    };
  }

  return point;
};

const policySections: PolicySection[] = [
  {
    id: "introduction",
    icon: Info,
    number: "01",
    heading: "Introduction",
    points: [
      "Welcome to Online Saathi (\"we\", \"our\", \"us\"), operated by SHUBHLAXMI MULTISERVICES INDIA PRIVATE LIMITED (SMSIPL).",
      "By accessing or using our website www.onlinesaathi.org, mobile app, or any other services (\"Platform\"), you (\"User\", \"you\", \"your\") agree to be legally bound by these Terms and Conditions (\"Terms\").",
      "If you do not agree to these Terms, please do not use our Platform.",
      "Online Saathi is a platform operated and managed by Shubhlaxmi Multiservices India Private Limited, a company incorporated under the Companies Act, 2013, having its registered office at 29-421, Bhadreshwar Housing Society, Behind Hajipur Dargah, Kotarpur, Ahmedabad, Gujarat - 382475, India (\"Online Saathi\" or \"Company\").",
      "Online Saathi provides a technology-based marketplace and facilitation platform enabling users to access a range of services including but not limited to financial services, remittance, travel bookings, bill payments, job discovery, government scheme consultancy, and community engagement support.",
      "Online Saathi operates solely as a facilitator between users and third-party service providers and does not directly deliver, control, or guarantee the end services or outcomes offered by such service providers.",
      "The Company's role is limited to providing information, technology tools, and access to third-party services through its platform comprising the website, mobile applications, and associated technologies.",
    ],
  },
  {
    id: "definitions",
    icon: BookOpen,
    number: "02",
    heading: "Definitions and Interpretations",
    points: [
      "In this Agreement, unless the context otherwise requires:",
      "Terms defined in this section shall have the meanings assigned to them below.",
      "Headings are for reference purposes only and shall not affect the interpretation of any provision.",
      "Words importing the singular shall include the plural and vice versa.",
      "References to persons include individuals, bodies corporate, unincorporated associations, partnerships, and government authorities.",
    ],
    subSections: [
      {
        heading: "Platform",
        points: [
          "\"Platform\" means the digital ecosystem operated by Online Saathi, including its website, mobile applications, and all associated services offered to users.",
        ],
      },
      {
        heading: "User",
        points: [
          "\"User\" refers to any individual, entity, or organization that accesses, browses, registers, or avails services through the Online Saathi Platform.",
        ],
      },
      {
        heading: "Third-Party Service Providers",
        points: [
          "\"Third-Party Service Providers\" means independent vendors, companies, or organizations offering their services through the Online Saathi Platform, including but not limited to remittance, travel bookings, bill payments, insurance, and other services.",
        ],
      },
      {
        heading: "Saathi",
        points: [
          "\"Saathi\" means an independent local community entrepreneur affiliated with Online Saathi, who facilitates access to social welfare schemes, financial services, employment opportunities, and other essential services to citizens. A Saathi operates on a commission or incentive basis and is not an employee of Online Saathi.",
        ],
      },
      {
        heading: "District Partner",
        points: [
          "\"District Partner\" refers to an organization, agency, or individual formally engaged by Online Saathi to recruit, manage, and support Saathis within a specified district, ensuring operational compliance, training delivery, and service quality monitoring.",
        ],
      },
      {
        heading: "State Partner",
        points: [
          "\"State Partner\" refers to a senior-level partner entity engaged to oversee the expansion, governance, and coordination of Online Saathi's network and services across an entire State or Union Territory, including management of District Partners and strategic partnerships.",
        ],
      },
    ],
  },
  {
    id: "scope-of-services",
    icon: Layers,
    number: "03",
    heading: "Scope of Services",
    subSections: [
      {
        heading: "3.1 Indo-Nepal Remittance Services",
        points: [
          "We facilitate Indo-Nepal remittance services through our partnered service providers.",
          "Online Saathi acts only as a reseller and technology platform.",
          "Users are responsible for entering accurate beneficiary details.",
          "Transactions once processed cannot be reversed.",
          "Refunds are not available if incorrect details are provided by the user.",
          "Compliance with AML (Anti-Money Laundering) and KYC norms is mandatory.",
          asCallout(
            "Important: All disputes related to delivery, exchange rate, or transaction errors must be directly taken up with the service provider. Online Saathi will only provide facilitation support.",
          ),
        ],
      },
      {
        heading: "3.2 Travel Services (Bus, Train, Air Tickets)",
        points: [
          "Online Saathi enables booking of bus, train, and flight tickets through authorized aggregators and operators.",
          "We do not operate any transport services ourselves.",
          "We assist only with ticket booking, issuance, cancellation, and refund processing (as per partner policies).",
          "Users are advised to verify travel details carefully before confirming bookings.",
          "Any issues during travel (like delays, cancellations, missing services) are between the user and the travel operator.",
          asCallout(
            "Note: Refunds and rescheduling are strictly governed by the service provider's policies.",
          ),
        ],
      },
      {
        heading: "3.3 Bill Payments & Insurance Premium Payments",
        points: [
          "Users can pay utility bills (electricity, water, gas), mobile/DTH recharges, and insurance premiums via Online Saathi.",
          "We act as a Distributor Technology Platform.",
          "We do not guarantee instant success of bill payments. It depends on the respective service provider's server and systems.",
          "Users must double-check bill details before proceeding.",
          "Online Saathi is not responsible for delays or rejections caused by banks, payment processors, or billing entities.",
          asCallout(
            "Tip: Always maintain proof of payment (receipt or transaction ID) for any follow-up.",
          ),
        ],
      },
      {
        heading: "3.4 Domestic Money Remittance Services",
        points: [
          "We offer domestic money transfer (DMT) services, allowing users to send money within India to bank accounts.",
          "Services are provided via authorized partner banks and payment systems.",
          "Users must ensure that funds originate from legitimate sources.",
          "Online Saathi is not responsible for transaction failures caused by:",
          "Bank server issues",
          "Regulatory interventions (NPCI, RBI)",
          "Incorrect account information entered by the user",
          asCallout(
            "Important: Refunds in case of transaction failures are subject to banking regulations and may take 3-21 working days.",
          ),
        ],
      },
      {
        heading: "3.5 Job Discovery Services",
        points: [
          "Online Saathi provides access to curated job listings sourced from third-party employers and job boards.",
          "We do not guarantee placement, interview calls, or employment offers.",
          "We strongly recommend users conduct background checks on employers before accepting any offer.",
          "Job listings are provided for informational purposes only.",
          asCallout(
            "Note: Online Saathi is not liable for job scams, fake offers, salary disputes, or working condition issues.",
          ),
        ],
      },
      {
        heading: "3.6 Government Schemes Discovery and Consultancy",
        points: [
          "We help users by providing guidance and application assistance for various government schemes.",
          "We do not have any official tie-up with any government department.",
          "We only offer consultancy services to assist in understanding eligibility, documents required, and application process.",
          "We do not guarantee approval, disbursement of benefits, or processing speed.",
          "Consultancy fees are charged only for informational support, not for success outcomes.",
          asCallout(
            "Warning: Never make unauthorized payments directly to agents or outsiders claiming guaranteed approval. Always pay only via official Online Saathi channels.",
          ),
        ],
      },
      {
        heading: "3.7 Community Engagement Services",
        points: [
          "Our community platform connects users to share updates, opportunities, and social interactions.",
          "Users are responsible for the content they share.",
          "Abuse, harassment, spamming, or sharing misleading information is strictly prohibited.",
          "Online Saathi reserves the right to remove objectionable content and suspend accounts without notice.",
          asCallout(
            "Advice: Exercise caution when acting upon advice or information shared by other users within the community.",
          ),
        ],
      },
    ],
  },
  {
    id: "user-obligations",
    icon: UserCheck,
    number: "04",
    heading: "User Obligations",
    points: [
      "By using the Platform, you agree that:",
      "You are at least 18 years old and legally competent.",
      "You will provide true, accurate, current, and complete information.",
      "You are responsible for maintaining the confidentiality of your login credentials.",
      "You will not use the Platform for any unlawful activities.",
      "You will avoid making double payments or speculative transactions without confirmation.",
    ],
  },
  {
    id: "registration",
    icon: ClipboardCheck,
    number: "05",
    heading: "Registration and Account",
    points: [
      "To access some services, you must register an account.",
      "Online Saathi reserves the right to reject or suspend any account if:",
      "False information is provided,",
      "Fraudulent activities are suspected,",
      "Required KYC verification is incomplete.",
    ],
  },
  {
    id: "payment-terms",
    icon: CreditCard,
    number: "06",
    heading: "Payment Terms",
    points: [
      "All payments must be made through Online Saathi's official payment methods.",
      "Consultancy fees for government schemes are charged separately and do not guarantee scheme approval.",
      "We do not collect any government application fees.",
      "Refunds are processed only as per our Refund Policy.",
    ],
  },
  {
    id: "facilitator",
    icon: Network,
    number: "07",
    heading: "Role as a Third-Party Facilitator",
    points: [
      "Online Saathi is only a facilitator.",
      "Actual services (remittance, ticket bookings, etc.) are provided by third-party service providers.",
      "All disputes regarding services must be directly addressed with the respective provider.",
    ],
  },
  {
    id: "limitation-of-liability",
    icon: ShieldAlert,
    number: "08",
    heading: "Limitation of Liability",
    points: [
      "Online Saathi's liability is strictly limited to the transaction value or ₹500, whichever is lesser.",
      "We are not responsible for:",
      "Delays, cancellations, errors, or failures by service providers.",
      "Financial loss, emotional distress, or indirect damages.",
      "Failures due to banking systems (RBI, NPCI, partner banks).",
    ],
  },
  {
    id: "intellectual-property",
    icon: Copyright,
    number: "09",
    heading: "Intellectual Property",
    points: [
      "All content, trademarks, service marks, and logos on the Platform belong exclusively to Online Saathi. No User may copy, distribute, reproduce, or exploit any material without our prior written permission.",
    ],
  },
  {
    id: "privacy-policy",
    icon: Shield,
    number: "10",
    heading: "Privacy Policy",
    points: [
      "Your use of the Platform is also governed by our Privacy Policy, which explains how we collect, use, and protect your data.",
    ],
  },
  {
    id: "prohibited-conduct",
    icon: Ban,
    number: "11",
    heading: "Prohibited Conduct",
    points: [
      "You agree NOT to:",
      "Engage in fraudulent activities",
      "Share or post misleading, offensive, or illegal content",
      "Harass, abuse, or harm other users",
      "Attempt to breach Platform security",
      "Copy, scrape, or misuse Platform data using bots or any automated tools",
      "Violations will result in account termination and legal action.",
    ],
  },
  {
    id: "force-majeure",
    icon: CloudLightning,
    number: "12",
    heading: "Force Majeure",
    points: [
      "Online Saathi shall not be liable for any failure or delay due to reasons beyond reasonable control, including natural disasters, strikes, pandemics, network failures, government actions, etc.",
    ],
  },
  {
    id: "termination",
    icon: Ban,
    number: "13",
    heading: "Termination",
    points: [
      "Online Saathi reserves the right to suspend or terminate any user account without notice if:",
      "The Terms are violated,",
      "Fraud or misuse is detected,",
      "Required by law enforcement or regulatory bodies.",
    ],
  },
  {
    id: "disclaimer",
    icon: Info,
    number: "14",
    heading: "Disclaimer",
    points: [
      "All services are provided on an \"as-is\" and \"as-available\" basis. Online Saathi makes no warranties regarding the availability, accuracy, or reliability of any content or services.",
    ],
  },
  {
    id: "jurisdiction",
    icon: Landmark,
    number: "15",
    heading: "Jurisdiction and Governing Law",
    points: [
      "These Terms shall be governed by and construed in accordance with the laws of India. Courts located in Ahmedabad, Gujarat shall have exclusive jurisdiction for all disputes arising out of or relating to the Platform.",
    ],
  },
  {
    id: "indemnity",
    icon: FileCheck,
    number: "16",
    heading: "Indemnity",
    points: [
      "You agree to indemnify and hold harmless Online Saathi, its officers, directors, employees, and agents from any claims, losses, liabilities, or demands arising from:",
      "Your use of the Platform,",
      "Violation of these Terms,",
      "Infringement of third-party rights.",
    ],
  },
  {
    id: "changes-to-terms",
    icon: CalendarClock,
    number: "17",
    heading: "Changes to Terms",
    points: [
      "Online Saathi may amend these Terms at any time without prior notice. Users are advised to review the Terms periodically. Continued use of the Platform after changes implies acceptance.",
    ],
  },
  {
    id: "contact-us",
    icon: Contact,
    number: "18",
    heading: "Contact Us",
    points: [
      "For queries, complaints, or grievances, please reach out to:",
      "Registered Office: 29-421, Bhadreshwar Housing Society, Behind Hajipur Dargah, Kotarpur, Ahmedabad, Gujarat - 382475, India.",
      "Corporate Office: 309, The Atlanta Business Hub, Naroda Ring Road, Ahmedabad, Gujarat - 382330, India.",
      "General Inquiries: admin@onlinesaathi.org",
      "Grievance Redressal Officer: ceo@onlinesaathi.org",
    ],
  },
];

const calloutStyles: Record<
  CalloutKind,
  { icon: typeof Info; box: string; iconColor: string }
> = {
  important: {
    icon: Info,
    box: "border-[#b7d9f5] bg-[#e8f4ff]",
    iconColor: "text-[#0b4a7a]",
  },
  note: {
    icon: Info,
    box: "border-[#c8e3f5] bg-[#eff8ff]",
    iconColor: "text-[#0c5c7c]",
  },
  tip: {
    icon: Lightbulb,
    box: "border-[#bfe6cf] bg-[#eafaf1]",
    iconColor: "text-[#14603a]",
  },
  warning: {
    icon: AlertTriangle,
    box: "border-[#f3d9ad] bg-[#fff6e8]",
    iconColor: "text-[#7a4a08]",
  },
  advice: {
    icon: MessageSquare,
    box: "border-[#c6d9f2] bg-[#f0f7ff]",
    iconColor: "text-[#25497a]",
  },
};

const isCallout = (point: Point): point is CalloutInfo =>
  typeof point !== "string";

const CalloutBox = ({ callout }: { callout: CalloutInfo }) => {
  const style = calloutStyles[callout.kind];
  const Icon = style.icon;

  return (
    <div className={`rounded-xl border p-4 ${style.box}`}>
      <div className="flex items-start gap-3">
        <Icon size={18} className={`mt-0.5 shrink-0 ${style.iconColor}`} />
        <p className="text-sm leading-6 text-[#334155] sm:text-[15px] sm:leading-7">
          <span className="font-semibold capitalize">{callout.kind}: </span>
          {callout.body}
        </p>
      </div>
    </div>
  );
};

const PointList = ({ points }: { points: Point[] }) => (
  <div className="mt-5 space-y-3">
    {points.map((point, index) =>
      isCallout(point) ? (
        <CalloutBox key={index} callout={point} />
      ) : (
        <div key={index} className="flex items-start gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0078aa]" />
          <p className="text-sm leading-6 text-[#475467] sm:text-[15px] sm:leading-7">
            {point}
          </p>
        </div>
      ),
    )}
  </div>
);

const TermsConditionsPage = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-[#f3f4fb]">
      {/* Hero */}
      <section className="bg-[#0f172a] px-4 pb-12 pt-12 sm:px-6 sm:pb-16 sm:pt-16 lg:px-8">
        <div className="mx-auto max-w-[1250px]">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-[#ade7ff]">
              <FileCheck size={22} />
            </span>

            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#ade7ff]">
              Legal &amp; Policies
            </span>
          </div>

          <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl">
                Terms &amp; Conditions
              </h1>

              <p className="mt-4 text-sm leading-6 text-slate-300 sm:text-[15px]">
                Governs your use of the Online Saathi Platform and the services
                offered through it.
              </p>
            </div>

            <p className="max-w-md text-sm leading-6 text-slate-400">
              By accessing or using the Platform, you agree to be legally bound
              by these Terms. If you do not agree, please do not use the
              Platform.
            </p>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto grid max-w-[1250px] gap-8 lg:grid-cols-[260px_1fr] lg:gap-12">
          {/* Sticky Nav */}
          <aside className="h-fit lg:sticky lg:top-6">
            <div className="rounded-2xl border border-[#e0e5ee] bg-white p-5 shadow-[0_8px_24px_rgba(15,23,42,0.05)]">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#0078aa]">
                On this page
              </p>

              <nav className="mt-4 space-y-1">
                {policySections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="group flex items-center gap-3 rounded-lg px-2 py-2 text-sm font-medium text-[#475467] transition-colors hover:bg-[#eef5fb] hover:text-[#0078aa]"
                  >
                    <span className="text-[11px] font-bold text-[#0078aa]/60 transition-colors group-hover:text-[#0078aa]">
                      {section.number}
                    </span>
                    {section.heading}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <div className="space-y-6">
            {policySections.map((section) => {
              const Icon = section.icon;

              return (
                <article
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-6 rounded-2xl border border-[#e0e5ee] bg-white p-6 shadow-[0_8px_24px_rgba(15,23,42,0.05)] transition-all duration-300 hover:border-[#bcd7ec] sm:p-8"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e3f2ff] text-[#0078aa]">
                      <Icon size={22} />
                    </span>

                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#0078aa]/60">
                        Section {section.number}
                      </span>

                      <h2 className="mt-0.5 text-xl font-bold tracking-tight text-[#10182f] sm:text-2xl">
                        {section.heading}
                      </h2>
                    </div>
                  </div>

                  {section.points && <PointList points={section.points} />}

                  {section.subSections && (
                    <div className="mt-6 space-y-6">
                      {section.subSections.map((sub) => (
                        <div key={sub.heading}>
                          <h3 className="flex items-center gap-2.5 text-base font-semibold text-[#10182f] sm:text-lg">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#0078aa]" />
                            {sub.heading}
                          </h3>

                          {sub.points && <PointList points={sub.points} />}
                        </div>
                      ))}
                    </div>
                  )}
                </article>
              );
            })}

            <div className="rounded-2xl border border-[#cfe0ef] bg-[#e8f4fb] p-6 sm:p-8">
              <p className="text-sm font-semibold text-[#0f3c5c] sm:text-[15px]">
                By continuing to use Online Saathi's services, you acknowledge
                that you have read, understood, and agreed to these Terms &amp;
                Conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsConditionsPage;
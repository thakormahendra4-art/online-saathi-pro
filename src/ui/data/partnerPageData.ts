import { Briefcase, Handshake, Landmark, type LucideIcon } from "lucide-react";

import image1 from "../../assets/partner-assets/image 1.png";
import image2 from "../../assets/partner-assets/image 2.png";
import image3 from "../../assets/partner-assets/image 3.png";
import image4 from "../../assets/partner-assets/image 4.png";
import image5 from "../../assets/partner-assets/image 5.png";
import image6 from "../../assets/partner-assets/image 6.png";

export type PartnerType = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const partnerTypes: PartnerType[] = [
  {
    title: "Strategic Partnerships",
    icon: Handshake,
    description:
      "Strategic Partnerships: We join forces with like-minded groups to expand services, boost efficiency, and develop solutions tailored to workers needs.",
  },
  {
    title: "Government Collaborations",
    icon: Landmark,
    description:
      "Collaboration with government agencies is key to Online Saathi mission of connecting informal workers to schemes and subsidies. By aligning with national policies, the platform promotes financial inclusion, skill development, and social welfare while ensuring seamless program implementation and systemic advocacy for the informal workforce.",
  },
  {
    title: "Private Sector Engagement",
    icon: Briefcase,
    description:
      "Partnering with private entities helps Online Saathi leverage expertise, technology, and funding to enhance infrastructure, expand services, and scale solutions. These collaborations drive innovation, foster entrepreneurship, and empower informal workers for sustainable economic growth.",
  },
];

export type ImpactStat = {
  value: string;
  label: string;
};

export const impactStats: ImpactStat[] = [
  { value: "₹500Cr+", label: "Monthly processed value" },
  { value: "15,000+", label: "Active partner touchpoints" },
  { value: "4.9/5", label: "Partner satisfaction score" },
  { value: "24/7", label: "Operational support coverage" },
];

export type Partner = {
  name: string;
  image: string;
};

export const partners: Partner[] = [
  { name: "Prabhu Money Transfer", image: image1 },
  { name: "eKO", image: image2 },
  { name: "IME", image: image3 },
  { name: "Partner 4", image: image4 },
  { name: "Partner 5", image: image5 },
  { name: "Partner 6", image: image6 },
];

export type Offering = {
  image: string;
  title: string;
  description: string;
};

export const offerings: Offering[] = [
  {
    image: "https://onlinesaathi.org/assets/profit-C_FAd-3T.gif",
    title: "Access to India’s Informal and Underserved Markets",
    description:
      "Reach communities that mainstream financial channels miss through our established village-level Saathi agent network.",
  },
  {
    image: "https://onlinesaathi.org/assets/sol1-Cgu19HrU.gif",
    title: "Last-Mile Delivery and Distribution",
    description:
      "Deliver services, kits, and consumer products to customers through our trusted last-mile network across districts.",
  },
  {
    image: "https://onlinesaathi.org/assets/call-center-CEqof3z6.gif",
    title: "Jobs Connect",
    description:
      "Tap into our verified workforce pipeline and connect job seekers to relevant employment opportunities.",
  },
  {
    image: "https://onlinesaathi.org/assets/business-D1NtHCfu.gif",
    title: "Digital Finance Services & Cost-Effective Delivery",
    description:
      "Deploy digital finance services with low acquisition costs and shared distribution infrastructure.",
  },
  {
    image: "https://onlinesaathi.org/assets/delivery-np13kPgU.gif",
    title: "Consumer Insights & Market Intelligence",
    description:
      "Leverage anonymised, real-time data on spending behaviour to sharpen product and go-to-market decisions.",
  },
];
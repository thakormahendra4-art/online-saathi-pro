import image1 from "../../assets/home-assets/homeimg3.png";
import image2 from "../../assets/home-assets/Homeimg2.png";
import image3 from "../../assets/home-assets/Workers Image.png";
import partnerImage1 from "../../assets/partner-assets/image 1.png";
import partnerImage2 from "../../assets/partner-assets/image 2.png";
import partnerImage3 from "../../assets/partner-assets/image 3.png";
import partnerImage4 from "../../assets/partner-assets/image 4.png";
import partnerImage5 from "../../assets/partner-assets/image 5.png";
import partnerImage6 from "../../assets/partner-assets/image 6.png";

export type Challenge = {
  title: string;
  description: string;
};

export const challenges: Challenge[] = [
  {
    title: "Limited Access to Essential Services",
    description:
      "Informal workers often miss out on banking, insurance and welfare services due to limited documentation and awareness.",
  },
  {
    title: "Lack of Awareness and Access",
    description:
      "With few formal job opportunities available locally, people often rely on low-paying, irregular work or face the difficult choice of migrating to cities in search of income, leaving behind their families and communities.",
  },
  {
    title: "Barriers to Growth and Financial Stability",
    description:
      "Without access to credit, training, and formal support, members of the informal workforce find it challenging to achieve economic stability or build a career path that allows for personal and professional growth.",
  },
  {
    title: "Lack of Awareness and Access",
    description:
      "Many informal workers are unaware of available welfare schemes or lack the means to access them due to complicated processes and minimal digital literacy.",
  },
  {
    title: "Complex Processes",
    description:
      "Government schemes involve extensive documentation, challenging timelines, and lack of clarity, deterring informal workers from fully utilizing available resources.",
  },
  {
    title: "Information and Usage Gaps",
    description:
      "Even when informal workers gain access to a scheme, understanding how to effectively utilize benefits. This lack of guidance often results in underutilization of resources, such as the high number of inactive Jan Dhan accounts.",
  },
];

export type Solution = {
  key: string;
  tagline: string;
};

export const solutions: Solution[] = [
  { key: "TRUST", tagline: "Community connections" },
  { key: "TRANSACTIONS", tagline: "Empowered" },
  { key: "TECHNOLOGY", tagline: "Made Accessible" },
  { key: "TRENDS", tagline: "Tracked Improvement" },
];

export type TechnologyItem = {
  title: string;
};

export const technologies: TechnologyItem[] = [
  { title: "Laptop" },
  { title: "Comprehensive Delivery Tracking System" },
  { title: "Assisted Financial Services" },
  { title: "Localized Community Platform" },
  { title: "Jobs Connect" },
  { title: "Gov Schemes Eligibility Engine" },
];

export type Innovation = {
  title: string;
  path: string;
};

export const innovations: Innovation[] = [
  { title: "On Demand Services", path: "/services" },
  { title: "Jobs Connect", path: "/safe-jobs" },
  { title: "Government Schemes", path: "/government-schemes" },
  { title: "Localized Community", path: "/saathi-network" },
];

export type Strength = {
  title: string;
  description: string;
};

export const strengths: Strength[] = [
  {
    title: "Online Saathi Tech",
    description:
      "Our single-window tech platform streamlines access to 50+ essential services for the informal sector, from remittance to job opportunities and travel. Simplifying tasks like accessing government schemes, banking, and insurance, we offer a comprehensive solution for enhanced convenience and efficiency.",
  },
  {
    title: "Sewa Saathi Network",
    description:
      "A grassroots network designed to bridge the digital gap in underserved areas, empowering local partners to deliver government and private services efficiently with trust and transparency.",
  },
  {
    title: "Services Provider",
    description:
      "We collaborate with verified service providers to offer a range of high-quality solutions, from microfinance and insurance to training and logistics, enhancing last-mile service delivery.",
  },
];

export const saathiBenefits: string[] = [
  "Create Local Opportunities and Earn a Stable Income",
  "Be a Catalyst for Economic Growth in Your Community",
  "Build Social Capital and Community Trust",
  "Gain Skills and Access Growth Opportunities",
  "Be a part of Mission to Empower India's Informal Workforce",
];

export type PartnerOffering = {
  image: string;
  title: string;
  description: string;
};

export const partnerOfferings: PartnerOffering[] = [
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

export type Testimonial = {
  name: string;
  role: string;
  review: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Ganesh KC",
    role: "Partner",
    review:
      "Thanks to Online Saathi services, I received immediate support during a crisis. Their quick response and empathy made a significant difference in my life.",
  },
  {
    name: "Rudra Prasad Acharya",
    role: "Agent",
    review:
      "Before, sending money to Nepal required a full day's leave and extra costs. With Online Saathi, it's now fast, cheap, and hassle-free.",
  },
  {
    name: "Raju Sharma",
    role: "User",
    review:
      "The support from Online Saathi was exceptional. They were there when I needed them most, providing guidance and care.",
  },
  {
    name: "Himal Magar",
    role: "User",
    review:
      "Online Saathi is a secure and fast platform for sending IME Remit from India to Nepal, with easy deposits to any bank in Nepal.",
  },
];

export const contactInfo = {
  address: "D 109 Maruti Hight, Opp Samor Hight Naroda, Muthiya, Ahmedabad, Gujarat, India, 382330",
  addressShort: "D 109 Maruti Hight, Opp Samor Hight Naroda",
  addressCity: "Muthiya, Ahmedabad, Gujarat, India, 382330",
  phone: "+91 - 9099005251",
  phoneHref: "tel:+919099005251",
  email: "help@onlinesaathi.org",
  emailHref: "mailto:help@onlinesaathi.org",
};

export type HeroStat = {
  value: string;
  label: string;
};

export type HeroSlide = {
  image: string;
  title: string;
  eyebrow?: string;
  description: string;
  stats: HeroStat[];
};

export const heroSlides: HeroSlide[] = [
  {
    image: image1,
    title: "Bridging Gaps for India's Unorganized Workforce",
    eyebrow: "Online Saathi",
    description:
      "Online Saathi has provided personalized job-matching services, helping over 12,500 individuals find work.",
    stats: [
      {
        value: "1500 +",
        label: "Saathis",
      },
      {
        value: "25 +",
        label: "State Partner",
      },
      {
        value: "100 +",
        label: "District Partner",
      },
    ],
  },
  {
    image: image2,
    title: "Fostering a Thriving Worker Community",
    eyebrow: "Online Saathi",
    description:
      "The platform has fostered a thriving community of workers and supporters, creating a network where individuals can grow, share experiences, and continuously improve their career prospects.",
    stats: [
      {
        value: "200 +",
        label: "Job offer",
      },
      {
        value: "50 +",
        label: "Services",
      },
      {
        value: "20 +",
        label: "Company",
      },
    ],
  },
  {
    image: image3,
    title: "Empowering Workers Across India",
    eyebrow: "Online Saathi",
    description:
      "Connecting workers with opportunities and services to help them build a better future.",
    stats: [
      {
        value: "5000 +",
        label: "Workers",
      },
      {
        value: "75 +",
        label: "Partners",
      },
      {
        value: "150 +",
        label: "Companies",
      },
    ],
  },
];

export type Partner = {
  name: string;
  image: string;
};

export const partners: Partner[] = [
  { name: "Prabhu Money Transfer", image: partnerImage1 },
  { name: "eKO", image: partnerImage2 },
  { name: "IME", image: partnerImage3 },
  { name: "Partner 4", image: partnerImage4 },
  { name: "Partner 5", image: partnerImage5 },
  { name: "Partner 6", image: partnerImage6 },
];

export type ContactItem = {
  label: string;
  value: string;
  href?: string;
};

export const contactItems: ContactItem[] = [
  { label: "Address", value: contactInfo.address },
  { label: "Phone", value: contactInfo.phone, href: contactInfo.phoneHref },
  { label: "Email", value: contactInfo.email, href: contactInfo.emailHref },
];

export type TestimonialSlide = {
  name: string;
  role: string;
  image: string;
  quote: string;
};

export const testimonialSlides: TestimonialSlide[] = [
  {
    name: "Ganesh KC",
    role: "Partner",
    image: "https://onlinesaathi.org/assets/t1-amJfKUkL.jpg",
    quote:
      "Thanks to Online Saathi services, I received immediate support during a crisis. Their quick response and empathy made a significance difference in my life.",
  },
  {
    name: "Rudra Prasad Acharya",
    role: "Agent",
    image: "https://onlinesaathi.org/assets/t4-tvZNDnoG.png",
    quote:
      "Before, sending money to Nepal required a full day's leave and extra costs. With Online Saathi, it’s now fast, cheap, and hassle-free.",
  },
  {
    name: "Raju Sharma",
    role: "User",
    image: "https://onlinesaathi.org/assets/t2-pv693rwy.png",
    quote:
      "The support from Online Saathi was exceptional. They were there when I needed them most, providing guidance and care.",
  },
  {
    name: "Himal Magar",
    role: "User",
    image: "https://onlinesaathi.org/assets/t3-C6jtOjpV.jpg",
    quote:
      "Online Saathi is a secure and fast platform for sending IME Remit from India to Nepal, with easy deposits to any bank in Nepal.",
  },
  {
    name: "Himal Magar",
    role: "User",
    image: "https://onlinesaathi.org/assets/t4-tvZNDnoG.png",
    quote:
      "Online Saathi is a secure and fast platform for sending IME Remit from India to Nepal, with easy deposits to any bank in Nepal.",
  },
];
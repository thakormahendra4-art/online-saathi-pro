import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router";

const GooglePlayIcon = () => (
  <svg width="22" height="22" viewBox="0 0 448 512" fill="currentColor" aria-hidden="true">
    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
  </svg>
);

const AppleAppStoreIcon = () => (
  <svg width="22" height="22" viewBox="0 0 384 512" fill="currentColor" aria-hidden="true">
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.7-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81zM9.55 15.57V8.43L15.82 12l-6.27 3.57z" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.89 1.22 3.09.15.2 2.11 3.22 5.1 4.51.71.31 1.27.49 1.7.63.72.23 1.37.2 1.88.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35m-5.4 7.6h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88a9.83 9.83 0 0 1 7 2.9 9.83 9.83 0 0 1 2.9 7c0 5.45-4.44 9.87-9.9 9.87m8.48-18.37A11.82 11.82 0 0 0 12.05 0C5.5 0 .17 5.33.16 11.88c0 2.1.55 4.14 1.59 5.95L0 24l6.31-1.65a11.9 11.9 0 0 0 5.72 1.46c6.55 0 11.88-5.34 11.88-11.89 0-3.18-1.24-6.16-3.48-8.4" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
  </svg>
);

const importantLinks = [
  { name: "Home", path: "/" },
  { name: "About us", path: "/about" },
  { name: "Partner", path: "/partner" },
  { name: "Technology", path: "/technology" },
  { name: "Saathi", path: "/saathi-network" },
];

const serviceLinks = [
  { name: "Safe Job Connect", path: "/safe-jobs" },
  { name: "Social Welfare Schemes", path: "/government-schemes" },
  { name: "Micro-ATM", path: "/micro-atm" },
  { name: "Community", path: "/saathi-network" },
  { name: "PAN Card Center", path: "/pan-card" },
  { name: "Insurance", path: "/services" },
];

const legalLinks = [
  { name: "Refund Policy", path: "/refund-policy" },
  { name: "Terms & Conditions", path: "/terms-and-conditions" },
  { name: "Privacy Policy", path: "/privacy-policy" },
];

const Footer = () => {
  return (
    <footer className="w-full bg-[#13137E]">
      <div className="mx-auto w-full max-w-[1250px] px-5 py-12 sm:px-8 lg:px-10">
        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1.3fr] lg:gap-12">
          {/* Download Application */}
          <div>
            <h3 className="text-lg font-semibold tracking-tight text-white">
              Download Application
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              <a
                href="#"
                className="flex w-fit items-center justify-center gap-3 rounded-xl bg-black/30 px-5 py-3 text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-black/50 hover:shadow-md"
              >
                <GooglePlayIcon />
                <span className="text-left">
                  <span className="block text-[10px] font-medium uppercase tracking-wider text-slate-300">
                    Get it on
                  </span>
                  <span className="block text-base font-semibold leading-tight">
                    Google Play Store
                  </span>
                </span>
              </a>

              <a
                href="#"
                className="flex w-fit items-center justify-center gap-3 rounded-xl bg-black/30 px-5 py-3 text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-black/50 hover:shadow-md"
              >
                <AppleAppStoreIcon />
                <span className="text-left">
                  <span className="block text-[10px] font-medium uppercase tracking-wider text-slate-300">
                    Download on the
                  </span>
                  <span className="block text-base font-semibold leading-tight">
                    Apple App Store
                  </span>
                </span>
              </a>
            </div>

            {/* Social Media */}
            <p className="mt-7 text-sm font-medium text-slate-200">
              Follow Us
            </p>

            <div className="mt-3 flex items-center gap-3">
              <a
                href="https://www.youtube.com/@onlinesaathi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e9edff] text-[#68768a] transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-[#ff0000] hover:shadow-md"
              >
                <YouTubeIcon />
              </a>

              <a
                href="https://www.facebook.com/OnlineSaathi/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e9edff] text-[#68768a] transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-[#1877f2] hover:shadow-md"
              >
                <FacebookIcon />
              </a>

              <a
                href="https://www.whatsapp.com/channel/0029VaVLYnq6LwHfwUg2SK2c"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e9edff] text-[#68768a] transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-[#25d366] hover:shadow-md"
              >
                <WhatsAppIcon />
              </a>

              <a
                href="https://www.linkedin.com/company/online-saathi/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e9edff] text-[#68768a] transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-[#0a66c2] hover:shadow-md"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-lg font-semibold tracking-tight text-white">
              Important Links
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              {importantLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="w-fit text-sm text-slate-300 transition-colors duration-200 hover:text-sky-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-semibold tracking-tight text-white">
              Our Services
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              {serviceLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="w-fit text-sm text-slate-300 transition-colors duration-200 hover:text-sky-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Get In Touch */}
          <div>
            <h3 className="text-lg font-semibold tracking-tight text-white">
              Get In Touch
            </h3>

            <div className="mt-5 flex flex-col gap-4 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-sky-300" />
                <span>
                  309 3rd Floor, The Atlanta Business Hub,
                  <br />
                  Nana Chiloda, Ahmedabad,
                  <br />
                  Gujarat 302330
                </span>
              </div>

              <a
                href="tel:+919099005251"
                className="flex w-fit items-center gap-3 transition-colors duration-200 hover:text-sky-300"
              >
                <Phone size={18} className="shrink-0 text-sky-300" />
                +91 909 900 5251
              </a>

              <a
                href="mailto:support@onlinesaathi.org"
                className="flex w-fit items-center gap-3 transition-colors duration-200 hover:text-sky-300"
              >
                <Mail size={18} className="shrink-0 text-sky-300" />
                support@onlinesaathi.org
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px w-full bg-white/15" />

        {/* Bottom Footer */}
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-xs leading-5 text-slate-300/80 sm:text-sm">
            © 2018-2025 Online Saathi. All Rights Reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-7 gap-y-3 text-xs sm:text-sm">
            {legalLinks.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-slate-300 transition-colors duration-200 hover:text-sky-300"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
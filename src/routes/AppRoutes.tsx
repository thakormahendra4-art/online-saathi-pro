import { createBrowserRouter } from "react-router";

import MainLayout from "../layouts/MainLayout";
import OnlineSaathiHomePage from "../ui/pages/OnlineSaathiHomePage";
import AboutPage from "../ui/pages/AboutPage";
import ContactPage from "../ui/pages/ContactPage";
import PartnerPage from "../ui/pages/PartnerPage";
import ServicesPage from "../ui/pages/ServicesPage";
import TeamPage from "../ui/pages/TeamPage";
import TechnologyPage from "../ui/pages/TechnologyPage";
import HistoryPage from "../ui/pages/HistoryPage";
import SafeJobConnectPage from "../ui/pages/SafeJobConnectPage";
import GovernmentSchemesPage from "../ui/pages/GovernmentSchemesPage";
import MicroAtmPage from "../ui/pages/MicroAtmPage";
import PanCardCenterPage from "../ui/pages/PanCardCenterPage";
import BillPaymentPage from "../ui/pages/BillPaymentPage";
import NeoBankingPage from "../ui/pages/NeoBankingPage";
import SaathiNetworkPage from "../ui/pages/SaathiNetworkPage";
import IndoNepalRemittancePage from "../ui/pages/IndoNepalRemittancePage";
import TravelPage from "../ui/pages/TravelPage";
import RefundPolicyPage from "../ui/pages/RefundPolicyPage";
import TermsConditionsPage from "../ui/pages/TermsConditionsPage";
import PrivacyPolicyPage from "../ui/pages/PrivacyPolicyPage";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,

    children: [
      {
        index: true,
        element: <OnlineSaathiHomePage />,
      },

      {
        path: "about",
        element: <AboutPage />,
      },

      {
        path: "history",
        element: <HistoryPage />,
      },

      {
        path: "safe-jobs",
        element: <SafeJobConnectPage />,
      },

      {
        path: "government-schemes",
        element: <GovernmentSchemesPage />,
      },

      {
        path: "micro-atm",
        element: <MicroAtmPage />,
      },

      {
        path: "pan-card",
        element: <PanCardCenterPage />,
      },

      {
        path: "bill-payment",
        element: <BillPaymentPage />,
      },

      {
        path: "neo-banking",
        element: <NeoBankingPage />,
      },

      {
        path: "saathi-network",
        element: <SaathiNetworkPage />,
      },

      {
        path: "indo-nepal-remittance",
        element: <IndoNepalRemittancePage />,
      },

      {
        path: "travel",
        element: <TravelPage />,
      },

      {
        path: "contact",
        element: <ContactPage />,
      },

      {
        path: "partner",
        element: <PartnerPage />,
      },

      {
        path: "services",
        element: <ServicesPage />,
      },

      {
        path: "refund-policy",
        element: <RefundPolicyPage />,
      },

      {
        path: "terms-and-conditions",
        element: <TermsConditionsPage />,
      },

      {
        path: "privacy-policy",
        element: <PrivacyPolicyPage />,
      },

      {
        path: "team",
        element: <TeamPage />,
      },
      {
        path: "technology",
        element: <TechnologyPage />,
      },
    ],
  },
]);
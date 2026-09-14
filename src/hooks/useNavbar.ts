import { useEffect, useState } from "react";
import { useLocation } from "react-router";

export const useNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileOnDemandOpen, setMobileOnDemandOpen] = useState(false);
  const location = useLocation();

  const isServicesActive = location.pathname === "/services";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsOpen(false);
    setMobileServicesOpen(false);
    setMobileOnDemandOpen(false);
  };

  return {
    isOpen,
    setIsOpen,
    isScrolled,
    servicesOpen,
    setServicesOpen,
    mobileServicesOpen,
    setMobileServicesOpen,
    mobileOnDemandOpen,
    setMobileOnDemandOpen,
    closeMobileMenu,
    isServicesActive,
  };
};
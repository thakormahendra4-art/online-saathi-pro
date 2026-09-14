import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router";
import Navbar from "../ui/components/Navbar";
import { usePageReveal } from "../hooks/usePageReveal";

const MainLayout = () => {
  const { pathname } = useLocation();
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  usePageReveal(mainRef, pathname);

  return (
    <>
      <Navbar />

      <main ref={mainRef}>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;

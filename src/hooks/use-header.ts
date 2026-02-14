"use client";

import { useEffect, useState } from "react";

export interface UseHeaderState {
  isScrolled: boolean;
  isMobileMenuOpen: boolean;
  openMobileMenu: () => void;
  closeMobileMenu: () => void;
  toggleMobileMenu: () => void;
}

export function useHeader(): UseHeaderState {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openMobileMenu = (): void => setIsMobileMenuOpen(true);
  const closeMobileMenu = (): void => setIsMobileMenuOpen(false);
  const toggleMobileMenu = (): void => setIsMobileMenuOpen((prev) => !prev);

  return {
    isScrolled,
    isMobileMenuOpen,
    openMobileMenu,
    closeMobileMenu,
    toggleMobileMenu,
  };
}

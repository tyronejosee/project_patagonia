"use client";

import { Menu, Trees, X } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/config/navigation";
import { useHeader } from "@/hooks/use-header";
import { cn } from "@/lib/utils";

export function Header() {
  const { isScrolled, isMobileMenuOpen, closeMobileMenu, openMobileMenu } = useHeader();

  return (
    <>
      <header
        className={cn(
          "fixed top-4 left-1/2 z-40 w-[95%] max-w-5xl -translate-x-1/2 transition-all duration-500 ease-out",
          isScrolled ? "top-4" : "top-4",
        )}
      >
        <div
          className={cn(
            "relative overflow-hidden rounded-2xl border border-white/20 shadow-lg transition-all duration-500",
            isScrolled
              ? "bg-white/95 backdrop-blur-xl shadow-white/10 shadow-2xl"
              : "bg-white/80 backdrop-blur-md shadow-white/10",
          )}
        >
          <div
            className="absolute inset-0 bg-linear-to-r from-primary/5 via-transparent to-primary/5"
            aria-hidden="true"
          />

          <div className="relative flex h-16 items-center justify-between px-4">
            <Link
              href="/"
              className="flex items-center gap-2 group"
              aria-label="The Cabins - Inicio"
            >
              <div className="relative">
                <div className="absolute -inset-1 rounded-full bg-primary/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Trees className="h-8 w-8 text-primary relative" aria-hidden="true" />
              </div>
              <span className="text-xl font-bold tracking-tight text-primary">The Cabins</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:block" aria-label="Navegación principal">
              <ul className="flex gap-1">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="relative block px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary rounded-full hover:bg-primary/5"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-3">
              <Button
                size="lg"
                className="hidden lg:inline-flex rounded-full bg-primary px-6 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                Reservar Ahora
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={openMobileMenu}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label="Abrir menú de navegación"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div id="mobile-menu" className="fixed inset-0 z-50 lg:hidden">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={closeMobileMenu}
            aria-hidden="true"
          />

          <aside className="fixed right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl animate-in slide-in-from-right duration-300">
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-bold text-primary">Menú</h2>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={closeMobileMenu}
                aria-label="Cerrar menú"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <nav className="p-4" aria-label="Navegación móvil">
              <ul className="flex flex-col gap-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={closeMobileMenu}
                      className="block px-4 py-3 text-base font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-xl transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6 px-4">
                <Button className="w-full rounded-full bg-primary">Reservar Ahora</Button>
              </div>
            </nav>
          </aside>
        </div>
      )}
    </>
  );
}

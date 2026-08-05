"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Leaf, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/#features", label: "Features" },
    { href: "/#journey", label: "Journey" },
    { href: "/#traceability", label: "Traceability" },
    { href: "/technology", label: "Technology" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Leaf className="h-8 w-8 text-green-600" />
          <span className="text-2xl font-bold text-slate-900">
            Farm2Plate
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors hover:text-green-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Button */}
        <Button className="hidden rounded-full px-6 md:inline-flex">
          Download App
        </Button>

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-gray-100 md:hidden">
  <Menu className="h-6 w-6" />
</SheetTrigger>

          <SheetContent side="right" className="w-72">
            <div className="mt-10 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="text-lg font-medium hover:text-green-600"
                >
                  {link.label}
                </Link>
              ))}

              <Button
                className="mt-4 w-full rounded-full"
                onClick={closeMenu}
              >
                Download App
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
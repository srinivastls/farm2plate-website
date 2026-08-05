"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
        window.removeEventListener(
          "scroll",
          handleScroll,
        );
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        <Link
          href="/"
          className="flex items-center gap-2"
        >
          <Leaf
            className="h-8 w-8 text-green-600"
          />

          <span className="text-2xl font-bold text-slate-900">
            Farm2Plate
          </span>
        </Link>

        <nav className="hidden gap-8 md:flex">

          <Link href="/about">
            About
          </Link>

          <Link href="/#features">
            Features
          </Link>

          <Link href="/#journey">
            Journey
          </Link>

          <Link href="/#traceability">
            Traceability
          </Link>

          <Link href="/technology">
            Technology
          </Link>

          <Link href="/#contact">
            Contact
          </Link>

        </nav>

        <Button
          className="rounded-full px-6"
        >
          Download App
        </Button>

      </div>
    </header>
  );
}
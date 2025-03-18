"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Detect scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Menu items
  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 ${
        scrolled || menuOpen ? "bg-card shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Left: Animated Logo */}
        <motion.div
          className="text-accent text-3xl font-bold cursor-pointer"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link href="/">
            <span className="bg-gradient-to-r from-accent to-green-400 text-transparent bg-clip-text">
              FineAdvice
            </span>
          </Link>
        </motion.div>

        {/* Center: Desktop Menu Items */}
        <ul className="hidden md:flex items-center gap-6 font-bold text-xl">
          {menuItems.map((item) => (
            <li key={item.name} className="relative group">
              <Link href={item.href} className="hover:text-accent transition">
                {item.name}
              </Link>
              {/* Underline on hover */}
              <div className="absolute bottom-[-4px] left-0 right-0 h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </li>
          ))}
        </ul>

        {/* Right: Animated "Try for Free" Button (Desktop) */}
        <motion.div
          className="hidden md:block"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1, rotate: 2 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link href="/signup">
            <button className="px-6 py-2 bg-accent text-darkBg rounded-lg font-bold shadow hover:bg-green-400 transition">
              Try for Free
            </button>
          </Link>
        </motion.div>

        {/* Mobile: "Try for Free" Button + Hamburger Menu */}
        <div className="flex md:hidden items-center gap-4">
          <Link href="/signup">
            <motion.button
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="px-4 py-2 bg-accent text-darkBg rounded-lg font-bold shadow hover:bg-green-400 transition"
            >
              Try for Free
            </motion.button>
          </Link>
          <button
            className="text-accent text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-16 left-0 w-full bg-card p-4 shadow-lg md:hidden ${
          menuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-10 opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 font-bold text-xl">
          {menuItems.map((item) => (
            <li key={item.name} className="w-full text-center">
              <Link
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block py-2 hover:text-accent transition"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

"use client";

import { Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

import { navLinks } from "@/constants";

const NavItems = ({ onClick = () => {} }) => (
  <ul className="nav-ul">
    {navLinks.map((item) => (
      <li key={item.id} className="nav-li group">
        <Link
          href={item.href}
          className="nav-li_a relative overflow-hidden"
          onClick={onClick}
        >
          <span className="relative z-10 transition-all duration-300 group-hover:text-white">
            {item.name}
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 scale-x-0 group-hover:scale-x-100 transform origin-left"></span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </li>
    ))}
  </ul>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black-100/80 backdrop-blur-xl border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <Link
            href="/"
            className="text-white font-bold text-xl hover:text-purple-300 transition-all duration-300 hover:drop-shadow-lg"
          >
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Nikhil
            </span>
          </Link>

          <div className="flex items-center gap-6">
            <nav className="sm:flex hidden">
              <NavItems />
            </nav>

            {/* Social Icons */}
            <div className="hidden sm:flex items-center gap-4">
              <Link
                href="https://github.com/Zelkanor"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:scale-110"
              >
                <Github
                  size={18}
                  className="text-white/70 group-hover:text-white transition-all duration-300 group-hover:rotate-12"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>

              <Link
                href="https://linkedin.com/in/nikhilkrishna-kn"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:scale-110"
              >
                <Linkedin
                  size={18}
                  className="text-white/70 group-hover:text-white transition-all duration-300 group-hover:rotate-12"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </div>
          </div>

          <button
            onClick={toggleMenu}
            className={`text-neutral-400 hover:text-white focus:outline-none sm:hidden flex transition-all duration-300 hover:scale-110 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
            aria-label="Toggle menu"
          >
            <Image
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              alt="toggle"
              className="w-6 h-6 transition-transform duration-300"
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>

      <div
        className={`nav-sidebar ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } transition-all duration-500 ease-out`}
      >
        <nav className="p-5 bg-gradient-to-b from-black-200/90 to-black-300/90 backdrop-blur-xl">
          <NavItems onClick={closeMenu} />

          {/* Mobile Social Icons */}
          <div className="flex items-center justify-center gap-4 mt-6 pt-6 border-t border-white/10">
            <Link
              href="https://github.com/Zelkanor"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="group relative p-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:scale-110"
            >
              <Github
                size={20}
                className="text-white/70 group-hover:text-white transition-all duration-300 group-hover:rotate-12"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>

            <Link
              href="https://linkedin.com/in/nikhilkrishna-kn"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="group relative p-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:scale-110"
            >
              <Linkedin
                size={20}
                className="text-white/70 group-hover:text-white transition-all duration-300 group-hover:rotate-12"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

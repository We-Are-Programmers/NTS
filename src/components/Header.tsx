"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  return (
    <header>
      <div className="wrap">
        <div className="navbar glass">
          <Link href="/" className="brand" onClick={closeMenu}>
            <img src="/assets/logo.png" alt="Next Tech Soul logo" />
            <span className="brand-word tech">
              NEXT TECH <span className="soul">Soul</span>
            </span>
          </Link>
          <nav className="main-nav">
            <ul>
              <li>
                <Link href="/" className={isActive("/") ? "active" : ""}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className={isActive("/about") ? "active" : ""}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className={isActive("/services") ? "active" : ""}>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className={isActive("/contact") ? "active" : ""}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <Link href="/contact" className="nav-cta" onClick={closeMenu}>
            Start a project →
          </Link>
          <button
            className={`nav-toggle ${isOpen ? "open" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className={`mobile-nav ${isOpen ? "open" : ""}`}>
          <Link href="/" className={isActive("/") ? "active" : ""} onClick={closeMenu}>
            Home
          </Link>
          <Link href="/about" className={isActive("/about") ? "active" : ""} onClick={closeMenu}>
            About
          </Link>
          <Link href="/services" className={isActive("/services") ? "active" : ""} onClick={closeMenu}>
            Services
          </Link>
          <Link href="/contact" className={isActive("/contact") ? "active" : ""} onClick={closeMenu}>
            Contact
          </Link>
          <Link href="/contact" className="nav-cta" onClick={closeMenu}>
            Start a project →
          </Link>
        </div>
      </div>
    </header>
  );
}

"use client";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { business } from "@/config/business";

const links = ["Home", "Menu", "About", "Gallery", "Reviews", "Contact"];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <a href="#home" className="brand" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div style={{ position: "relative", width: "42px", height: "42px", borderRadius: "50%", overflow: "hidden", border: "2px solid var(--brass)", flexShrink: 0 }}>
          <Image src="/images/devrana-logo.jpeg" alt="Devrana Express Logo" fill style={{ objectFit: "cover" }} />
        </div>
        <div style={{ display: "grid", gap: "2px" }}>
          <span>Devrana Express</span>
          <small>Siwan · {business.hindiName}</small>
        </div>
      </a>
      <nav>
        {links.map((link) => (
          <a key={link} href={link === "Home" ? "#home" : `#${link.toLowerCase()}`}>
            {link}
          </a>
        ))}
      </nav>
      <a className="button header-cta" href="#booking">
        Book a Table
      </a>
      <button aria-label="Toggle menu" className="menu-toggle" onClick={() => setOpen(!open)}>
        {open ? <X /> : <Menu />}
      </button>
      {open && (
        <div className="mobile-nav">
          {links.map((link) => (
            <a onClick={() => setOpen(false)} key={link} href={link === "Home" ? "#home" : `#${link.toLowerCase()}`}>
              {link}
            </a>
          ))}
          <a onClick={() => setOpen(false)} className="button" href="#booking">
            Book a Table
          </a>
        </div>
      )}
    </header>
  );
}
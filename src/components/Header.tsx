"use client";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { business } from "@/config/business";

import { images } from "@/data/images";

const links = ["Home", "Menu", "About", "Gallery", "Reviews", "Contact"];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="header-brand-group">
        <a href="#home" className="brand">
          <div className="brand-logo-wrap">
            <Image src={images.logo} alt="Maharana Express Logo" fill sizes="44px" style={{ objectFit: "contain" }} />
          </div>
          <div className="brand-titles">
            <span className="brand-name">Maharana Express</span>
            <small className="brand-hindi">Siwan · {business.hindiName}</small>
          </div>
        </a>
        <div className="header-location">
          <span className="location-divider" aria-hidden="true">|</span>
          <span className="location-text">SIWAN · BIHAR · DOWNTOWN CITY SQUARE MALL</span>
        </div>
      </div>
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
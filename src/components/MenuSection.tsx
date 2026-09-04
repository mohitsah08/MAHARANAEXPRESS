"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { menuCategories, menuItems } from "@/data/menu";

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");

  const filteredItems = menuItems.filter((item) =>
    activeCategory === "ALL" ? true : item.category === activeCategory
  );

  return (
    <section id="menu" className="menu-section">
      <div className="section-intro">
        <div>
          <p className="eyebrow">02 / THE TABLE</p>
          <h2>
            Our
            <br />
            Menu
          </h2>
          <p className="english-title">AUTHENTIC INDIAN DISHES</p>
        </div>
        <p>
          Experience our rich selection of North Indian gravies, slow-cooked
          dals, fragrant biryanis, and rice specialties. Freshly prepared to
          order with premium ingredients.
        </p>
      </div>

      <div className="gallery-filters" style={{ marginTop: "40px" }}>
        {menuCategories.map((category) => (
          <button
            key={category}
            className={activeCategory === category ? "active" : ""}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="menu-grid">
        {filteredItems.map((item) => (
          <article className="menu-card" key={item.name}>
            <div className="menu-image">
              <Image
                src={item.image}
                fill
                sizes="(max-width:700px) 100vw, 33vw"
                alt={item.name}
              />
              {item.vegetarian && <span className="veg">VEG</span>}
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                }}
              >
                <p>{item.hindiName}</p>
                <strong
                  style={{
                    color: "var(--maroon)",
                    fontFamily: "var(--font-display)",
                    fontSize: "20px",
                    fontWeight: 700,
                  }}
                >
                  {item.price}
                </strong>
              </div>
              <h3>{item.name}</h3>
              <span>{item.description}</span>
              <a
                href={`https://wa.me/918809985776?text=${encodeURIComponent(
                  `Hello Maharana Express, I would like to enquire about ordering ${item.name} (${item.price}).`
                )}`}
                target="_blank"
                rel="noreferrer"
              >
                ORDER / ENQUIRE <ChevronRight size={14} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

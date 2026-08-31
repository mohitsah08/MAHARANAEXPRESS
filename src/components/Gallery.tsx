"use client";
import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";
import { images } from "@/data/images";

const filters = ["all", "restaurant", "dining", "celebrations", "food"];

export default function Gallery() {
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState<number | null>(null);

  const visible = images.gallery.filter((item) =>
    filter === "all" ? true : item.tag === filter
  );

  return (
    <>
      <div className="gallery-filters">
        {filters.map((item) => (
          <button
            className={filter === item ? "active" : ""}
            onClick={() => setFilter(item)}
            key={item}
          >
            {item.toUpperCase()}
          </button>
        ))}
      </div>
      <div className="gallery-grid">
        {visible.map((image, index) => (
          <button
            key={`${image.src}-${index}`}
            className={`gallery-item g${index % 6}`}
            onClick={() => setSelected(index)}
          >
            <Image
              src={image.src}
              fill
              sizes="(max-width:700px) 50vw, 33vw"
              alt={image.alt}
            />
          </button>
        ))}
      </div>
      {selected !== null && visible[selected] && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image"
          onClick={() => setSelected(null)}
        >
          <button className="close" aria-label="Close gallery">
            <X />
          </button>
          <Image
            onClick={(event) => event.stopPropagation()}
            src={visible[selected].src}
            width={1600}
            height={1100}
            alt={visible[selected].alt}
          />
        </div>
      )}
    </>
  );
}

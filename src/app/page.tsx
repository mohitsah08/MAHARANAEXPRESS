import Image from "next/image";
import {
  ArrowUpRight,
  Car,
  Clock3,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Star,
  UtensilsCrossed,
} from "lucide-react";
import Header from "@/components/Header";
import Gallery from "@/components/Gallery";
import BookingForm from "@/components/BookingForm";
import MenuSection from "@/components/MenuSection";
import { business } from "@/config/business";
import { images } from "@/data/images";

const mapEmbed = `https://www.google.com/maps?q=${encodeURIComponent(
  "Tarwara More, Downtown City Square Mall, Siwan, Bihar 841226"
)}&z=16&output=embed`;

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Restaurant", "LocalBusiness"],
    name: business.name,
    alternateName: business.hindiName,
    telephone: business.phone,
    priceRange: "₹200–400",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2nd Floor, Tarwara More, Downtown City Square Mall",
      addressLocality: "Siwan",
      addressRegion: "Bihar",
      postalCode: "841226",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.coordinates.lat,
      longitude: business.coordinates.lng,
    },
    openingHours: "Mo-Su 10:00-22:00",
    servesCuisine: "Indian",
    hasMenu: "#menu",
    sameAs: [business.mapsUrl],
  };

  const whatsappBookingUrl = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(
    "Hello Devrana Express Siwan, I would like to book a table. Please share the available timings."
  )}`;

  return (
    <main id="home">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Header />

      {/* Hero Section */}
      <section className="hero">
        <Image
          priority
          src={images.hero}
          fill
          sizes="100vw"
          alt="Devrana Express Siwan spacious restaurant dining hall"
        />
        <div className="hero-overlay" />
        <div className="hero-copy">
          <p className="eyebrow">SIWAN · BIHAR · DOWNTOWN CITY SQUARE MALL</p>
          <h1>
            Authentic Indian Flavours,
            <br />
            Served With Heart.
          </h1>
          <p className="english-title">DEVRANA EXPRESS SIWAN · {business.hindiName}</p>
          <p className="lede">
            Enjoy rich Indian flavours, comforting classics and freshly prepared
            dishes at Devrana Express Siwan.
          </p>
          <div className="button-row">
            <a className="button primary" href="#booking">
              Book a Table <ArrowUpRight size={16} />
            </a>
            <a className="button outline" href="#menu">
              VIEW MENU
            </a>
          </div>
        </div>
        <div className="hero-rating">
          <span>
            {business.rating} <Star size={16} fill="currentColor" />
          </span>
          <p>
            GOOGLE RATING
            <br />
            {business.reviewCount} REVIEWS
          </p>
        </div>
      </section>

      {/* Service Strip */}
      <section className="service-strip">
        {[
          [
            UtensilsCrossed,
            "DINE-IN",
            "Spacious air-conditioned dining for families and friends.",
          ],
          [
            Car,
            "DRIVE-THROUGH",
            "Quick takeaway and pickup service right on your way.",
          ],
          [
            ShieldCheck,
            "NO-CONTACT DELIVERY",
            "Hygienically packaged food delivered warm and fresh.",
          ],
        ].map(([Icon, title, copy]) => {
          const I = Icon as typeof UtensilsCrossed;
          return (
            <article key={title as string}>
              <I />
              <div>
                <strong>{title as string}</strong>
                <span>{copy as string}</span>
              </div>
            </article>
          );
        })}
      </section>

      {/* About Section */}
      <section id="about" className="handi-section">
        <div className="handi-photo">
          <Image
            src={images.about}
            fill
            sizes="(max-width:800px) 100vw, 50vw"
            alt="Warm atmosphere and comfortable dining at Devrana Express Siwan"
          />
        </div>
        <div className="handi-copy">
          <p className="eyebrow">01 / OUR KITCHEN</p>
          <h2>
            Freshly Prepared
            <br />
            Every Day
          </h2>
          <p className="english-title">AUTHENTIC HOME-STYLE INDIAN RECIPES</p>
          <p>
            Our kitchen serves authentic Indian recipes crafted with devotion — from
            rich paneer gravies and slow-simmered dals to fragrant biryanis and
            fluffy basmati rice. Everything is prepared fresh using quality
            ingredients and time-honored techniques.
          </p>
          <a className="text-link" href="#menu">
            EXPLORE MENU <ArrowUpRight size={15} />
          </a>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="trust">
        <div>
          <b>{business.priceRange}</b>
          <span>PER PERSON</span>
        </div>
        <div>
          <b>{business.rating}</b>
          <span>GOOGLE RATING</span>
        </div>
        <div>
          <b>{business.reviewCount}</b>
          <span>CUSTOMER REVIEWS</span>
        </div>
        <div>
          <b>10 PM</b>
          <span>LISTED CLOSING TIME</span>
        </div>
      </section>

      {/* Menu Section with Categories & Cards */}
      <MenuSection />

      {/* Hospitality Banner */}
      <section className="bihar-band">
        <p className="eyebrow">ROOTED IN HOSPITALITY</p>
        <h2>
          Where Families
          <br />
          Come Together
        </h2>
        <p className="english-title">DEVRANA EXPRESS SIWAN · {business.hindiName}</p>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="gallery-section">
        <div className="section-intro">
          <div>
            <p className="eyebrow">03 / AROUND THE RESTAURANT</p>
            <h2>
              Our
              <br />
              Space
            </h2>
            <p className="english-title">A LOOK INSIDE DEVRANA EXPRESS</p>
          </div>
          <p>
            Comfortable family dining, birthday and anniversary celebration
            spaces, and the warm hospitality of Siwan&apos;s favorite destination.
          </p>
        </div>
        <Gallery />
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="reviews">
        <div>
          <p className="eyebrow">04 / ON GOOGLE</p>
          <h2>
            {business.rating}
            <span>/5</span>
          </h2>
          <div className="stars">★★★★★</div>
          <p>Based on {business.reviewCount} Google Reviews</p>
        </div>
        <div className="reviews-copy">
          <h3>What guests appreciate</h3>
          <p>
            Guests love our flavorful paneer specialties, authentic Dal Devrana,
            warm hospitality, and family-friendly ambiance in Downtown City Square
            Mall.
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href={business.mapsUrl}
            className="button outline"
          >
            READ REVIEWS ON GOOGLE <ArrowUpRight size={15} />
          </a>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="booking-section">
        <div className="booking-heading">
          <p className="eyebrow">05 / RESERVATIONS</p>
          <h2>
            RESERVE
            <br />
            YOUR TABLE
          </h2>
          <p>
            Prepare your booking request via WhatsApp or email. The restaurant
            team will confirm availability promptly.
          </p>
          <small>No booking is confirmed until the restaurant responds.</small>
        </div>
        <BookingForm />
      </section>

      {/* Visit / Contact Section */}
      <section id="contact" className="visit">
        <div className="visit-copy">
          <p className="eyebrow">06 / VISIT US</p>
          <h2>Find Us</h2>
          <p className="english-title">LOCATION & CONTACT</p>
          <address>
            {business.address.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </address>
          <a href={business.phoneHref} className="phone">
            {business.phone}
          </a>
          <p className="hours">
            <Clock3 size={15} />
            {business.openingHours}
          </p>
          <div className="button-row">
            <a
              className="button primary"
              target="_blank"
              rel="noreferrer"
              href={business.mapsUrl}
            >
              <MapPin size={16} />
              GET DIRECTIONS
            </a>
            <a className="button outline" href={business.phoneHref}>
              <Phone size={15} />
              CALL NOW
            </a>
          </div>
          <div
            style={{
              marginTop: "30px",
              display: "flex",
              gap: "15px",
              flexWrap: "wrap",
            }}
          >
            <a
              className="button outline"
              href={whatsappBookingUrl}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={15} />
              WHATSAPP US
            </a>
          </div>
        </div>
        <div className="map">
          <iframe
            loading="lazy"
            title="Devrana Express Siwan location"
            src={mapEmbed}
          />
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="final-cta">
        <Image
          src={images.finalCta}
          fill
          sizes="100vw"
          alt="Warm dining experience at Devrana Express Siwan"
        />
        <div />
        <article>
          <p className="eyebrow">DEVRANA EXPRESS SIWAN · DOWNTOWN CITY SQUARE MALL</p>
          <h2>Hungry?</h2>
          <p className="english-title">VISIT US TODAY</p>
          <p>
            Experience heartwarming hospitality, flavorful dishes, and memorable
            moments with your loved ones.
          </p>
          <div className="button-row">
            <a className="button primary" href="#booking">
              BOOK A TABLE
            </a>
            <a
              className="button outline"
              href={whatsappBookingUrl}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={16} />
              WHATSAPP
            </a>
          </div>
        </article>
      </section>

      {/* Footer */}
      <footer>
        <a
          className="brand"
          href="#home"
          style={{ display: "flex", alignItems: "center", gap: "10px" }}
        >
          <div
            style={{
              position: "relative",
              width: "42px",
              height: "42px",
              borderRadius: "50%",
              overflow: "hidden",
              border: "2px solid var(--brass)",
              flexShrink: 0,
            }}
          >
            <Image
              src="/images/devrana-logo.jpeg"
              alt="Devrana Express Logo"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div>
            <span style={{ display: "block" }}>Devrana Express</span>
            <small>Siwan · {business.hindiName}</small>
          </div>
        </a>
        <p>
          2nd Floor, Tarwara More,
          <br />
          Downtown City Square Mall,
          <br />
          Siwan, Bihar 841226
          <br />
          <a href={business.phoneHref}>{business.phone}</a>
        </p>
        <div>
          {["Home", "Menu", "About", "Gallery", "Reviews", "Contact"].map(
            (link) => (
              <a
                key={link}
                href={link === "Home" ? "#home" : `#${link.toLowerCase()}`}
              >
                {link}
              </a>
            )
          )}
        </div>
        <div>
          <strong>Services</strong>
          {business.services.map((service) => (
            <span key={service}>{service}</span>
          ))}
        </div>
        <small>
          © {new Date().getFullYear()} Devrana Express Siwan (देवरानी एक्सप्रेस
          सीवान) · All Rights Reserved
        </small>
      </footer>

      {/* Mobile Sticky Bar */}
      <div className="mobile-bar">
        <a href="#booking">BOOK TABLE</a>
        <a href={business.phoneHref}>
          <Phone size={15} />
          CALL
        </a>
        <a target="_blank" rel="noreferrer" href={business.mapsUrl}>
          <MapPin size={15} />
          DIRECTIONS
        </a>
      </div>
    </main>
  );
}
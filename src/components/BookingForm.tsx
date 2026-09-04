"use client";
import { FormEvent, useState } from "react";
import { Mail, MessageCircle } from "lucide-react";
import { BUSINESS_EMAIL, business } from "@/config/business";
import { track } from "./BookingLink";

type Booking = {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  preference: string;
  request: string;
};

const empty: Booking = {
  name: "",
  phone: "",
  date: "",
  time: "",
  guests: "",
  preference: "",
  request: "",
};

const body = (d: Booking) =>
  `Hello Maharana Express, I would like to book a table. Please share the available timings.\n\nBooking Details:\nName: ${d.name}\nPhone: ${d.phone}\nDate: ${d.date}\nTime: ${d.time}\nGuests: ${d.guests}\nPreference: ${d.preference || "Standard"}\nSpecial Request: ${d.request || "None"}\n\nPlease confirm my reservation.`;

export default function BookingForm() {
  const [data, setData] = useState(empty);
  const [message, setMessage] = useState("");

  const update = (key: keyof Booking, value: string) =>
    setData({ ...data, [key]: value });

  const valid = () => {
    if (!data.name || !data.phone || !data.date || !data.time || !data.guests) {
      setMessage("Please complete name, phone, date, time and number of guests.");
      return false;
    }
    return true;
  };

  const send = (kind: "whatsapp" | "email") => (event: FormEvent) => {
    event.preventDefault();
    if (!valid()) return;
    const text = body(data);
    if (kind === "whatsapp") {
      track("whatsapp_booking_click");
      window.open(
        `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(text)}`,
        "_blank",
        "noopener,noreferrer"
      );
    } else {
      track("email_booking_click");
      window.location.href = `mailto:${BUSINESS_EMAIL}?subject=${encodeURIComponent(
        "Table Booking Request — Maharana Express"
      )}&body=${encodeURIComponent(text)}`;
    }
    setMessage(
      "Your booking request has been prepared. Please send the message to complete your enquiry."
    );
  };

  return (
    <form className="booking-form" onFocus={() => track("booking_form_start")}>
      <div className="form-grid">
        <label>
          FULL NAME
          <input
            required
            placeholder="Your Name"
            value={data.name}
            onChange={(e) => update("name", e.target.value)}
          />
        </label>
        <label>
          PHONE NUMBER
          <input
            required
            type="tel"
            placeholder="e.g. 088099 85776"
            value={data.phone}
            onChange={(e) => update("phone", e.target.value)}
          />
        </label>
        <label>
          DATE
          <input
            required
            type="date"
            value={data.date}
            onChange={(e) => update("date", e.target.value)}
          />
        </label>
        <label>
          TIME
          <input
            required
            type="time"
            value={data.time}
            onChange={(e) => update("time", e.target.value)}
          />
        </label>
        <label>
          GUESTS
          <input
            required
            type="number"
            min="1"
            placeholder="2"
            value={data.guests}
            onChange={(e) => update("guests", e.target.value)}
          />
        </label>
        <label>
          PREFERENCE
          <select
            value={data.preference}
            onChange={(e) => update("preference", e.target.value)}
          >
            <option value="">Choose an option</option>
            <option>Family Dining</option>
            <option>Birthday / Anniversary</option>
            <option>Special Gathering</option>
            <option>Corporate Lunch/Dinner</option>
            <option>Other</option>
          </select>
        </label>
        <label className="full">
          SPECIAL REQUEST
          <textarea
            rows={3}
            value={data.request}
            onChange={(e) => update("request", e.target.value)}
            placeholder="Tell us anything helpful for your visit (decorations, seating preferences, etc.)."
          />
        </label>
      </div>
      <div className="form-actions">
        <button
          onClick={send("whatsapp")}
          className="button whatsapp"
          type="submit"
        >
          <MessageCircle size={17} />
          WHATSAPP BOOKING
        </button>
        <button
          onClick={send("email")}
          className="button email"
          type="submit"
        >
          <Mail size={17} />
          EMAIL BOOKING
        </button>
      </div>
      {message && (
        <p role="status" className="form-status">
          {message}
        </p>
      )}
    </form>
  );
}
import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { GA_MEASUREMENT_ID } from "@/config/business";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://devranaexpress.com"),
  title: "Devrana Express Siwan | Restaurant in Siwan",
  description:
    "Devrana Express Siwan is a restaurant in Siwan, Bihar serving Indian cuisine including paneer dishes, dal, rice and biryani.",
  keywords: [
    "Devrana Express Siwan",
    "देवरानी एक्सप्रेस सीवान",
    "Restaurant in Siwan",
    "Best Restaurant Siwan Bihar",
    "Downtown City Square Mall Siwan",
    "Tarwara More Siwan Restaurant",
    "North Indian Food Siwan",
    "Paneer Butter Masala Siwan",
    "Family Restaurant Siwan",
    "Biryani in Siwan",
    "Dal Devrana Siwan",
  ],
  openGraph: {
    title: "Devrana Express Siwan | Restaurant in Siwan",
    description:
      "Devrana Express Siwan is a restaurant in Siwan, Bihar serving Indian cuisine including paneer dishes, dal, rice and biryani.",
    url: "https://maps.app.goo.gl/12Xte3H9UxxPRvQ69",
    siteName: "Devrana Express Siwan",
    images: [
      {
        url: "/images/devrana-dining-hall.jpeg",
        width: 1200,
        height: 800,
        alt: "Devrana Express Siwan Restaurant",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
      {GA_MEASUREMENT_ID && <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />}
    </html>
  );
}
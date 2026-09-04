import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { GA_MEASUREMENT_ID } from "@/config/business";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://maharanaexpress.com"),
  title: "MAHARANAEXPRESS | Restaurant in Siwan",
  description:
    "MAHARANAEXPRESS is a premier family restaurant in Siwan, Bihar serving authentic North Indian cuisine including paneer dishes, dal, rice and biryani at Downtown City Square Mall.",
  keywords: [
    "MAHARANAEXPRESS",
    "Maharana Express",
    "महाराणा एक्सप्रेस",
    "Restaurant in Siwan",
    "Best Restaurant Siwan Bihar",
    "Downtown City Square Mall Siwan",
    "Tarwara More Siwan Restaurant",
    "North Indian Food Siwan",
    "Paneer Butter Masala Siwan",
    "Family Restaurant Siwan",
    "Biryani in Siwan",
    "Maharana Express Siwan",
  ],
  openGraph: {
    title: "MAHARANAEXPRESS | Restaurant in Siwan",
    description:
      "MAHARANAEXPRESS is a premier family restaurant in Siwan, Bihar serving authentic North Indian cuisine including paneer dishes, dal, rice and biryani at Downtown City Square Mall.",
    url: "https://maps.app.goo.gl/12Xte3H9UxxPRvQ69",
    siteName: "MAHARANAEXPRESS",
    images: [
      {
        url: "/images/logo.jpeg",
        width: 1200,
        height: 800,
        alt: "Maharana Express Restaurant",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: "/images/logo.jpeg",
    apple: "/images/logo.jpeg",
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
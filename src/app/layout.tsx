import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat, Yesteryear , Great_Vibes} from "next/font/google";
import "./globals.css";
import MusicPlayer from "@/components/MusicPlayer";

const cormorant = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: ["400"],           // Great Vibes only has 400
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ashmitha & Rahul",
  description:
    "Join Ashmitha and Rahul as they celebrate their wedding on 12 July 2026 at Vasava Cliff House.",
  openGraph: {
    title: "Ashmitha & Rahul — Wedding Invitation",
    description:
      "Join us on 12 July 2026 at Vasava Cliff House. Muhurtham: 9:30 AM – 10:40 AM.",
    type: "website",
  },
};

export const yesteryear = Yesteryear({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-yesteryear",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${montserrat.variable} ${yesteryear.variable} ${greatVibes.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="font-body bg-accent-light text-dark">
        {children}
        <MusicPlayer />
      </body>
    </html>
  );
}

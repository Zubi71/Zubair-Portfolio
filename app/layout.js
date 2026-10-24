import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Zubair Bin Zahid — Web Developer, WordPress Specialist, SEO & AI Solutions",
  description:
    "I help businesses build modern websites, improve search visibility, optimise performance, and integrate intelligent digital solutions that support real business goals.",
  alternates: { canonical: "https://zubair.dyznoai.com/" },
  openGraph: {
    title: "Zubair Bin Zahid — High-Performance Websites That Help Businesses Grow",
    description:
      "Web development, WordPress, SEO, performance optimisation and AI integrations. Build first, pay after approval.",
    url: "https://zubair.dyznoai.com/",
    siteName: "Zubair Bin Zahid",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Zubair Bin Zahid",
  url: "https://zubair.dyznoai.com/",
  jobTitle: "Web Developer, WordPress Specialist, SEO Expert and AI Solutions Developer",
  email: "zahidzubair489@gmail.com",
  sameAs: [],
  knowsAbout: ["Web Development", "WordPress", "SEO", "Website Performance Optimisation", "AI Integrations"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}

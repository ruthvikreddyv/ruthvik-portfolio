import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const siteUrl = "https://ruthvik-portfolio-gules.vercel.app";
const title =
  "Ruthvik Reddy Veerannagari — Software Engineer & AI/ML Researcher";
const description =
  "Computer Science graduate with a strong foundation in software engineering, backend development, and applied AI/ML — from full-stack and blockchain systems to research in computer vision, graph neural networks, and wireless communications at IIIT Naya Raipur. Open to software engineering roles, AI/ML positions, research internships, and graduate study.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Ruthvik Reddy Veerannagari",
    "Software Engineer",
    "AI/ML Engineer",
    "Machine Learning Engineer",
    "Computer Science Researcher",
    "Graph Neural Networks",
    "Deep Reinforcement Learning",
    "Wireless Communications Research",
    "Blockchain Developer",
    "Full-Stack Developer",
  ],
  authors: [{ name: "Ruthvik Reddy Veerannagari", url: siteUrl }],
  robots: { index: true, follow: true },
  openGraph: {
    title,
    description,
    type: "profile",
    url: siteUrl,
    siteName: "Ruthvik Reddy Veerannagari — Portfolio",
    images: [{ url: "/profile.jpg", width: 800, height: 1030, alt: "Ruthvik Reddy Veerannagari" }],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: ["/profile.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ruthvik Reddy Veerannagari",
  url: siteUrl,
  image: `${siteUrl}/profile.jpg`,
  jobTitle: "Software Engineer & AI/ML Researcher",
  description,
  email: "mailto:ruthvikreddyv@gmail.com",
  sameAs: [
    "https://github.com/ruthvikreddyv",
    "https://linkedin.com/in/ruthvik-reddy-v",
  ],
  affiliation: {
    "@type": "CollegeOrUniversity",
    name: "IIIT Naya Raipur",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Chhattisgarh Swami Vivekanand Technical University",
  },
  knowsAbout: [
    "Artificial Intelligence",
    "Machine Learning",
    "Graph Neural Networks",
    "Deep Reinforcement Learning",
    "5G/6G Wireless Communications",
    "Computer Vision",
    "Natural Language Processing",
    "Extended Reality",
    "Blockchain",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark');}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased bg-paper text-ink font-body`}
      >
        {children}
      </body>
    </html>
  );
}

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
  "Ruthvik Reddy Veerannagari — AI Researcher, Software Engineer & Future PhD Researcher";
const description =
  "Computer Science (Data Science) graduate researching AI-driven wireless communications, graph neural networks, and extended reality at IIIT Naya Raipur. Software engineer experienced in Django, FastAPI, and blockchain systems, seeking fully funded PhD opportunities in AI and Wireless Communications.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Ruthvik Reddy Veerannagari",
    "AI Researcher",
    "Machine Learning Engineer",
    "Software Engineer",
    "PhD Wireless Communications",
    "Graph Neural Networks",
    "Deep Reinforcement Learning",
    "5G 6G Research",
    "Blockchain Developer",
    "Extended Reality Research",
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
  jobTitle: "AI Researcher & Software Engineer",
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

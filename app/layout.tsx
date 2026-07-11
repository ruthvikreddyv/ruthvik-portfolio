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

export const metadata: Metadata = {
  title: "Ruthvik Reddy Veerannagari — Software Developer & Data Science Engineer",
  description:
    "Portfolio of Ruthvik Reddy Veerannagari — Computer Science (Data Science) undergraduate building fintech, blockchain, AI/ML, and XR systems. Software Developer Intern at Cypwng, Research Intern at IIIT Naya Raipur.",
  keywords: [
    "Ruthvik Reddy Veerannagari",
    "Software Developer",
    "Data Science",
    "Full Stack Developer",
    "Django Developer",
    "Blockchain Developer",
    "Machine Learning",
  ],
  authors: [{ name: "Ruthvik Reddy Veerannagari" }],
  openGraph: {
    title: "Ruthvik Reddy Veerannagari — Software Developer & Data Science Engineer",
    description:
      "Computer Science (Data Science) undergraduate building fintech, blockchain, AI/ML, and XR systems.",
    type: "website",
  },
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
      </head>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased bg-paper text-ink font-body`}
      >
        {children}
      </body>
    </html>
  );
}

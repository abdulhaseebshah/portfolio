import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Abdul Haseeb | Front-End Developer in Nashik, India | React & Next.js Expert",
  description:
    "I'm Abdul Haseeb, a front-end developer based in Nashik, Maharashtra. I build modern, responsive, and accessible websites using React.js, Next.js, and Tailwind CSS.",
  keywords:
    "Abdul Haseeb, frontend developer Nashik, React developer Maharashtra, Next.js developer India, web developer in India, JavaScript developer, portfolio developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

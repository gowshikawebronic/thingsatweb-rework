import type { Metadata } from "next";
import { Poppins, Syne, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/UI/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { LanguageProvider } from "@/i18n/LanguageProvider";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Things at Web | Enterprise Digital Transformation",
  description: "Things at Web Next.js App",
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${poppins.variable} ${syne.variable} ${outfit.variable} antialiased font-body relative text-foreground bg-background`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            {/* --- GLOBAL FIXED BACKGROUND --- */}
            <div className="fixed inset-0 z-[-1] pointer-events-none">
              <div className="absolute inset-0 bg-noise opacity-100"></div>
              <div className="absolute inset-0 overflow-hidden mix-blend-multiply dark:mix-blend-screen">
                <div className="absolute -top-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-brand-blue/10 blur-[120px]"></div>
                <div className="absolute top-[40%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-brand-green/10 blur-[150px]"></div>
              </div>
            </div>

            {/* --- MAIN APP CONTENT --- */}
            <div className="relative z-0">
              <Navbar />
              <main>
                {children}
              </main>
              <Footer />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
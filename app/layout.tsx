import type { Metadata } from "next";
import "./globals.css";
import { Alumni_Sans, Poppins } from "next/font/google";
import { Toaster } from "sonner";

const alumniSans = Alumni_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Pr3cio - Discover Music That Speaks You",
  description: "Play What Moves You,Discover Music That Speaks You.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${alumniSans.className} ${poppins.variable} antialiased`}
      >
        <div className="bg__texture"></div>
        <Toaster theme="dark" visibleToasts={3} duration={2000} richColors />
        {children}
      </body>
    </html>
  );
}

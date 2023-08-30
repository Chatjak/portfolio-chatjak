import LiftSidebar from "@/components/LiftSidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Topbar from "@/components/Topbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chatjak",
  description: "This is my profile",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white`}>
        <Topbar />
        <main className="">{children}</main>
      </body>
    </html>
  );
}

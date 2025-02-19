import { Geist, Geist_Mono, Open_Sans } from "next/font/google";

import "./globals.css";
import { PrismicPreview } from "@prismicio/next";
import { createClient, repositoryName } from "@/prismicio";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Announcement from "./components/Announcement";
import AgeVerification from "./components/AgeVarification";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const headerData = async () => {
  let client = createClient();
  const response = await client.getByUID("navigation", "navigation-uid");
  const announcementBar = await client.getByUID(
    "announcement_bar",
    "announcement-bar-uid"
  );
  return { response, announcementBar };
};

export default async function RootLayout({ children }) {
  const { response, announcementBar } = await headerData();
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${openSans.variable} antialiased`}
      >
        <Announcement data={announcementBar.data} />
        <Navigation data={response.data} />
        {children}
        <Footer />
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}

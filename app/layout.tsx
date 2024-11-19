import type { Metadata } from "next";
import { Assistant } from 'next/font/google'
import "./globals.css";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";

const assistant = Assistant({
  subsets: ['hebrew'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-assistant',
})

export const metadata: Metadata = {
  title: "אפליקציית Next.js",
  description: "נוצר על ידי create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body
        className={`${assistant.variable} ${assistant.className} antialiased`}
      >

        <Navbar />
          {children}
          <Footer />
      </body>
    </html>
  );
}

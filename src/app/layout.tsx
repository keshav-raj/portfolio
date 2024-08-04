import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@/app/providers";
import Meteors from "@/components/magicui/meteors";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Keshav Raj",
  description:
    "Lead Fullstack Developer | Expert in React/React Native | RoR Fundamentals | Proficient in Cloud Tech (AWS, GCP, Azure)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>
          <div
            id='rootElementItem'
            className='root dark relative bg-background overflow-x-hidden'
          >
            <Meteors />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}

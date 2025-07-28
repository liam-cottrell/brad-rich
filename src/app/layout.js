import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "BR Accountancy Services - Accountant in Northumberland, North East of England",
  description: "Experienced North East Accountant Bradley Richardson provides expert financial services for individuals & businesses in Ashington, Blyth, Bedlington & Morpeth.",
    verification: {
    google: "GNyt0vI4QnZsdJVOKwgjSbQx8QXNfhYQrY3wGv7GI5M",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

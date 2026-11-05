import type { Metadata } from "next";
import { pixelify } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "digihome",
  description: "Hi! digitale connected",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <head>
            <meta property="og:title" content="digihome" />
            <meta property="og:description" content="My dev portfolio" />
            <meta property="og:image" content="/og.png" />
            <meta property="og:url" content="https://digihome.vercel.app" />
        </head>
        <body className={`antialiased ${pixelify.className}`}>
            {children}
        </body>
    </html>
  );
}

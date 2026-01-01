import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DOSREB LTD",
  description: "Clarity, structure, and intelligent workflow guidance.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

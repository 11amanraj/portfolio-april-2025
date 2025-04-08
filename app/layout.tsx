import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./Components/Navigation/NavBar";

export const metadata: Metadata = {
  title: "Aman's Portfolio",
  description: "Aman Raj's Design Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased px-8"
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}

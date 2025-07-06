import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./Components/Navigation/NavBar";
import Footer from "./Components/Footer/Footer";

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
        className="antialiased min-h-screen"
      >
        {/* <NavBar /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}

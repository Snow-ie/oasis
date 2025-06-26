import "./globals.css";
import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Oasis Task Manager",
  description: "Effectively handle your projects and boost productivity",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col antialiased text-gray-900 bg-white">
        <Header />

        <main className="flex-grow">{children}</main>

        <Footer />
      </body>
    </html>
  );
}

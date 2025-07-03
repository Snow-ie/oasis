import "./globals.css";
import type { Metadata } from "next";

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
        {children}
      </body>
    </html>
  );
}

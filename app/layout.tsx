import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"], // Add 'latin' or any subset you want
  weight: ["400", "700"], // Specify weights like '400', '700', etc.
  style: ["normal", "italic"], // Choose styles like 'normal' or 'italic'
  display: "swap", // Recommended for better performance
});

export const metadata: Metadata = {
  title: "Chatbot powered by ChatGPT and Azure AI Search",
  description: "A chatbot powered by ChatGPT and Azure AI Search",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}

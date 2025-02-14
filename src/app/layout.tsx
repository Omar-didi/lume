import type { Metadata } from "next";
import { Caveat, Kalam } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const kalam = Kalam({
  subsets: ["latin"], // Define el idioma
  weight: ["400", "700"], // Opcional: selecciona los pesos
  variable: "--font-secundary", // Define la variable CSS
});
const caveat = Caveat({
  variable: "--font-primary",
  subsets: ["latin"]
})


export const metadata: Metadata = {
  title: "Lume",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={`${kalam.variable} ${caveat.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

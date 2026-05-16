import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./components/providers";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fantasmo",
  description:
    "Fantasmo Shop é uma loja online moderna com uma experiência rápida, intuitiva e elegante. Explore produtos incríveis, adicione ao carrinho e finalize pedidos com praticidade em uma interface escura e premium pensada para web e mobile.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

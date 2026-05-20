import { CartProvider } from "@/app/contexts/cart-context/CartContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <CartProvider>{children}</CartProvider>;
}

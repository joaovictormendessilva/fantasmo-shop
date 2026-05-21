"use client";

import { useCartContext } from "@/app/contexts/cart-context/CartContext";
import Button from "@mui/material/Button";
import { OrderModal } from "../order-modal";
import { useState } from "react";

export function RequestProductsButton() {
  const { cartItems, formattedTotalPrice } = useCartContext();

  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  const toggleModal = () => setIsOrderModalOpen(!isOrderModalOpen);

  return (
    <>
      <Button fullWidth variant="contained" onClick={toggleModal}>
        Solicitar Produtos
      </Button>

      {isOrderModalOpen && (
        <OrderModal
          cartItems={cartItems}
          formattedTotalPrice={formattedTotalPrice}
          isOpen={isOrderModalOpen}
          onClose={toggleModal}
        />
      )}
    </>
  );
}

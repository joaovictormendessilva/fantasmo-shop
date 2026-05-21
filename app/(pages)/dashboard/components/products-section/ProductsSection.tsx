"use client";

import Box from "@mui/material/Box";
import { useMemo, useState } from "react";
import products from "@/app/data/products.json";
import { FilterProducts } from "@/app/components/filter-products";
import { ProductCard } from "@/app/components/product-card";
import { IProductsDto } from "@/app/components/product-card/ProductCard.types";
import { useCartContext } from "@/app/contexts/cart-context/CartContext";

export function ProductsSection() {
  const { handleAddItemToCart, handleRemoveItemFromCart, cartIds } = useCartContext();

  const [filter, setFilter] = useState("");

  const handleFilterProducts = (e: string) => setFilter(e);

  const filteredProducts: IProductsDto[] = useMemo(
    () =>
      filter.length > 0 && filter !== "all" ? products.filter((product) => product.categorie === filter) : products,
    [filter],
  );

  return (
    <Box>
      <FilterProducts onHandleFilterProducts={handleFilterProducts} resultsQuantity={filteredProducts.length} />

      <Box
        sx={{
          mt: "40px",
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          },
          gap: "32px",
        }}
      >
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAdd={handleAddItemToCart}
            onRemove={handleRemoveItemFromCart}
            isAddedToCart={cartIds.has(product.id)}
          />
        ))}
      </Box>
    </Box>
  );
}

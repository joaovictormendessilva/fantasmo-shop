import { IProductsDto } from "@/app/components/product-card/ProductCard.types";

export interface CartContextProps {
  cartItems: IProductsDto[];
  handleAddItemToCart: (item: IProductsDto) => void;
  handleRemoveItemFromCart: (id: number) => void;
  cartIds: Set<number>;
}

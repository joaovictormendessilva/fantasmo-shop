import { IProductsDto } from "../product-card/ProductCard.types";

export type OrderModalProps = {
  cartItems: IProductsDto[];
  formattedTotalPrice: string;
  isOpen: boolean;
  onClose: VoidFunction;
};

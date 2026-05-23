import { IOrderDto } from "@/server/services/email/emai.types";
import { IProductsDto } from "../product-card/ProductCard.types";

export type OrderModalProps = {
  cartItems: IProductsDto[];
  formattedTotalPrice: string;
  isOpen: boolean;
  onClose: VoidFunction;
};

export interface IOrderFormValues extends Omit<IOrderDto, "products"> {}

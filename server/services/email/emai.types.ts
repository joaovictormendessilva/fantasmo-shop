import { IProductsDto } from "@/app/components/product-card/ProductCard.types";

interface IOderedProductsDto extends IProductsDto {}

export interface IOrderDto {
  to: string;
  customerName: string;
  customerPhoneNumber: string;
  products: IOderedProductsDto[];
}

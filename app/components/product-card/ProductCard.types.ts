export interface IProductsDto {
  id: number;
  title: string;
  description: string;
  price: number;
  categorie: string;
  imagePath: string;
}

export type ProductCardProps = {
  product: IProductsDto;
};

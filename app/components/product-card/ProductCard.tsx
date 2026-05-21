import { formartToCurrencyBRL } from "@/app/helpers/format-currency";
import Button, { ButtonProps } from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { memo } from "react";
import { ProductCardProps } from "./ProductCard.types";

function ProductCardComponent({ product, onAdd, onRemove, isAddedToCart }: ProductCardProps) {
  const handleAddItem = () => {
    onAdd(product);
  };

  const handleRemoveItem = () => {
    onRemove(product.id);
  };

  const isAvailableButtonProps = {
    text: "Adicionar ao carrinho",
    color: "primary",
    fn: handleAddItem,
  };

  const isAddedButtonProps = {
    text: "Remover do carrinho",
    color: "error",
    fn: handleRemoveItem,
  };

  const buttonProps = isAddedToCart ? isAddedButtonProps : isAvailableButtonProps;

  return (
    <Card sx={{ maxWidth: { xs: "100%", sm: 390 }, width: "100%" }}>
      <CardMedia image={product.imagePath} sx={{ height: { xs: 270, sm: 200, md: 250, lg: 292 } }}></CardMedia>

      <CardContent>
        <Typography sx={{ fontWeight: "bold", fontSize: 20, mb: "8px" }}>{product.title}</Typography>
        <Typography color="textSecondary" sx={{ fontSize: 14, mb: "12px" }}>
          {product.description}
        </Typography>
        <Typography sx={{ fontWeight: "bold", fontSize: 20 }}>{formartToCurrencyBRL(product.price)}</Typography>
      </CardContent>

      <CardActions>
        <Button
          fullWidth
          variant="contained"
          color={buttonProps.color as ButtonProps["color"]}
          onClick={buttonProps.fn}
        >
          {buttonProps.text}
        </Button>
      </CardActions>
    </Card>
  );
}

export const ProductCard = memo(ProductCardComponent);

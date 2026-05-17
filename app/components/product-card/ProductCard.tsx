import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { ProductCardProps } from "./ProductCard.types";

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card sx={{ maxWidth: { xs: "100%", sm: 390 }, width: "100%" }}>
      <CardMedia image={product.imagePath} sx={{ height: { xs: 270, sm: 200, md: 250, lg: 292 } }}></CardMedia>

      <CardContent>
        <Typography sx={{ fontWeight: "bold", fontSize: 20, mb: "8px" }}>{product.title}</Typography>
        <Typography color="textSecondary" sx={{ fontSize: 14, mb: "12px" }}>
          {product.description}
        </Typography>
        <Typography sx={{ fontWeight: "bold", fontSize: 20 }}>
          {product.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
        </Typography>
      </CardContent>

      <CardActions>
        <Button fullWidth variant="contained">
          Adicionar ao carrinho
        </Button>
      </CardActions>
    </Card>
  );
}

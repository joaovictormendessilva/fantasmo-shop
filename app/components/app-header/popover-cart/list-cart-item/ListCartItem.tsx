import { useCartContext } from "@/app/contexts/cart-context/CartContext";
import { formartToCurrencyBRL } from "@/app/helpers/format-currency";
import ListItem from "@mui/material/ListItem";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Trash2 } from "lucide-react";
import { ListCartItemProps } from "./ListCartItem.types";

export function ListCartItem({ product }: ListCartItemProps) {
  const { handleRemoveItemFromCart } = useCartContext();

  const handleRemoveItem = () => handleRemoveItemFromCart(product.id);

  return (
    <ListItem sx={{ gap: 1, borderRadius: 2 }}>
      <Trash2 size={16} style={{ cursor: "pointer", color: "#e14c4c" }} onClick={handleRemoveItem} />
      <Stack sx={{ flexDirection: "row", justifyContent: "space-between", width: "100%", alignItems: "center" }}>
        <Typography sx={{ fontSize: 14 }}>{product.title}</Typography>

        <Typography sx={{ fontSize: 15, fontWeight: "bold" }}>{formartToCurrencyBRL(product.price)}</Typography>
      </Stack>
    </ListItem>
  );
}

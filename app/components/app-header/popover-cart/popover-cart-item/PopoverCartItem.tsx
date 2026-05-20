import { useCartContext } from "@/app/contexts/cart-context/CartContext";
import { formartToCurrencyBRL } from "@/app/helpers/format-currency";
import ListItem from "@mui/material/ListItem";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Trash2 } from "lucide-react";
import { PopoverCartItemProps } from "./PopoverCartItem.types";

export function PopoverCartItem({ product }: PopoverCartItemProps) {
  const { handleRemoveItemFromCart } = useCartContext();

  const handleRemoveItem = () => handleRemoveItemFromCart(product.id);

  return (
    <ListItem sx={{ gap: 1, borderRadius: 2 }}>
      <Trash2 size={16} style={{ cursor: "pointer", color: "#e14c4c" }} onClick={handleRemoveItem} />
      <Stack sx={{ flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
        <Typography sx={{ fontSize: 14 }}>{product.title}</Typography>

        <Typography sx={{ fontSize: 14, fontWeight: "bold" }}>{formartToCurrencyBRL(product.price)}</Typography>
      </Stack>
    </ListItem>
  );
}

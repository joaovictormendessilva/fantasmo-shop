import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Popover from "@mui/material/Popover";
import { MouseEvent, PropsWithChildren, useState } from "react";
import { PopoverCartItem } from "./popover-cart-item";
import { useCartContext } from "@/app/contexts/cart-context/CartContext";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import { formartToCurrencyBRL } from "@/app/helpers/format-currency";
import Button from "@mui/material/Button";

export function PopoverCart({ children }: PropsWithChildren) {
  const { cartItems } = useCartContext();

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const open = Boolean(anchorEl);

  function handleOpen(event: MouseEvent<HTMLElement>) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const totalPrice = formartToCurrencyBRL(cartItems.reduce((acc, current) => acc + current.price, 0));

  return (
    <>
      <Box
        onClick={handleOpen}
        sx={{
          display: "flex",
        }}
      >
        {children}
      </Box>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        slotProps={{
          paper: {
            sx: {
              mt: 1,
              maxWidth: 360,
              width: "100%",
              borderRadius: 3,
            },
          },
        }}
      >
        {cartItems.length === 0 && <Typography sx={{ p: 2, textAlign: "center" }}>Lista vazia.</Typography>}

        {cartItems.length > 0 && (
          <List sx={{ p: 1 }}>
            {cartItems.map((product) => (
              <PopoverCartItem key={product.id} product={product} />
            ))}

            <Divider />

            <ListItem sx={{ justifyContent: "space-between", py: 2 }}>
              <Typography>Total:</Typography>
              <Typography sx={{ fontWeight: "bold" }}>{totalPrice}</Typography>
            </ListItem>

            <Button fullWidth variant="contained">
              Solicitar Produtos
            </Button>
          </List>
        )}
      </Popover>
    </>
  );
}

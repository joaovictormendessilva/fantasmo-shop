import { useCartContext } from "@/app/contexts/cart-context/CartContext";
import { formartToCurrencyBRL } from "@/app/helpers/format-currency";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { MouseEvent, PropsWithChildren, useState } from "react";
import { RequestProductsButton } from "../../request-products-button";
import { ListCartItem } from "./list-cart-item";

export function PopoverCart({ children }: PropsWithChildren) {
  const { cartItems, formattedTotalPrice } = useCartContext();

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const open = Boolean(anchorEl);

  function handleOpen(event: MouseEvent<HTMLElement>) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

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
              <ListCartItem key={product.id} product={product} />
            ))}

            <Divider />

            <ListItem sx={{ justifyContent: "space-between", py: 2 }}>
              <Typography>Total:</Typography>
              <Typography sx={{ fontWeight: "bold" }}>{formattedTotalPrice}</Typography>
            </ListItem>

            <RequestProductsButton />
          </List>
        )}
      </Popover>
    </>
  );
}

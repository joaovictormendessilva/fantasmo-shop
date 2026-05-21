"use client";

import { authService } from "@/app/client/services/auth/auth.service";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import { CircleUser, Ghost, LogOut, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useMemo } from "react";
import { type IPopoverMenuItem, PopoverMenu } from "../popover-menu";
import { PopoverCart } from "./popover-cart";
import Badge from "@mui/material/Badge";
import { useCartContext } from "@/app/contexts/cart-context/CartContext";

export function AppHeader() {
  const { cartItems } = useCartContext();

  const router = useRouter();

  const handleLogout = async () => {
    await authService().logout();

    router.push("/login");
  };

  const menuOptions: IPopoverMenuItem[] = useMemo(
    () => [
      {
        title: "Sair",
        icon: <LogOut size={18} />,
        onClick: handleLogout,
      },
    ],
    [],
  );

  return (
    <Box
      sx={{
        display: "flex",
        borderBottom: "1px solid",
        borderColor: "divider",
        height: "80px",
      }}
    >
      <Stack
        sx={{
          px: "26px",
          flexDirection: "row",
          maxWidth: "1230px",
          margin: "auto",
          justifyContent: "space-between",
          alignItems: "center",
          flex: 1,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box
            sx={{
              height: 40,
              width: 40,
              backgroundColor: "white",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Ghost size={24} color="#131313" />
          </Box>
          <Box sx={{ fontSize: 24, fontWeight: "bold" }}>Fantasmo Shop</Box>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <PopoverCart>
            <IconButton>
              <Badge badgeContent={cartItems.length} color="primary">
                <ShoppingCart size={22} />
              </Badge>
            </IconButton>
          </PopoverCart>

          <PopoverMenu items={menuOptions}>
            <IconButton>
              <CircleUser size={22} />
            </IconButton>
          </PopoverMenu>
        </Box>
      </Stack>
    </Box>
  );
}

"use client";

import { MouseEvent, PropsWithChildren, useState } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Popover from "@mui/material/Popover";
import { PopoverMenuProps } from "./PopoverMenu.types";
import { PopoverMenuItem } from "./popover-menu-item";

export function PopoverMenu({ items, children }: PropsWithChildren<PopoverMenuProps>) {
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
              width: 220,
              borderRadius: 3,
            },
          },
        }}
      >
        <List sx={{ p: 1 }}>
          {items.map((item) => (
            <PopoverMenuItem key={item.title} item={item} onClose={handleClose} />
          ))}
        </List>
      </Popover>
    </>
  );
}

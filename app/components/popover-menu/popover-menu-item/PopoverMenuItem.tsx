import Link from "next/link";
import Box from "@mui/material/Box";
import ListItemButton from "@mui/material/ListItemButton";
import { PopoverMenuItemProps } from "./PopoverMenuItem.types";

export function PopoverMenuItem({ item, onClose }: PopoverMenuItemProps) {
  const isHrefItem = "href" in item;
  const listItemContent = (
    <ListItemButton
      sx={{
        gap: 1,
        borderRadius: 2,
      }}
    >
      {item.icon}
      {item.title}
    </ListItemButton>
  );

  if (isHrefItem) {
    return (
      <Link
        href={item.href!}
        style={{
          textDecoration: "none",
          color: "inherit",
        }}
      >
        {listItemContent}
      </Link>
    );
  }

  const handleClick = () => {
    item.onClick();
    onClose();
  };

  return <Box onClick={handleClick}>{listItemContent}</Box>;
}

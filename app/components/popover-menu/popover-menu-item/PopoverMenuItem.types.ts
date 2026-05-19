import { IPopoverMenuItem } from "../PopoverMenu.types";

export interface PopoverMenuItemProps {
  item: IPopoverMenuItem;
  onClose: () => void;
}

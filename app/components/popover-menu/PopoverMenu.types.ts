import { ReactNode } from "react";

interface IBasePopoverMenuItem {
  title: string;
  icon: ReactNode;
}

interface IHrefPopoverMenuItem extends IBasePopoverMenuItem {
  href: string;
  onClick?: never;
}

interface IOnClickPopoverMenuItem extends IBasePopoverMenuItem {
  onClick: () => void;
  href?: never;
}

export type IPopoverMenuItem = IHrefPopoverMenuItem | IOnClickPopoverMenuItem;

export interface PopoverMenuProps {
  items: IPopoverMenuItem[];
}

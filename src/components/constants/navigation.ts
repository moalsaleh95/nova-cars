import randomId from "../../common/randomId";
import { NavigationItemType } from "../../types/menus/menus";

export const NAVIGATION_MENU: NavigationItemType[] = [
  {
    id: randomId(),
    href: "/about",
    name: "Hakkımızda",
  },
  {
    id: randomId(),
    href: "/#services-tabs",
    name: "Hizmetlerimiz",
  },
  {
    id: randomId(),
    href: "/contact",
    name: "İletişim",
  }
];

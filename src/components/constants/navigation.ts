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
    href: "/",
    name: "Hizmetlerimiz",
  },
  {
    id: randomId(),
    href: "/",
    name: "SSS",
  },
  {
    id: randomId(),
    href: "/contact",
    name: "İletişim",
  },

];

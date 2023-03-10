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
  // {
  //   id: randomId(),
  //   href: "/",
  //   name: "Corporate",
  // },
  // {
  //   id: randomId(),
  //   href: "/",
  //   name: "Reservations",
  // },
  {
    id: randomId(),
    href: "/contact",
    name: "İletişim",
  }
];

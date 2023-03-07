import React, { FC } from "react";
import { NavLink , useNavigate } from "react-router-dom";
import { goToPage } from "../../common/goToPage";
import { NavigationItemType } from "../../types/menus/menus";

interface MenuItemsProps {
  menuItem: NavigationItemType;
  located?: string;
  itemColor?: string;
};

const MenuItems: FC<MenuItemsProps> = ({
  menuItem,
  located,
  itemColor = '#ffffff'
}) => {

  const urlNavigate = useNavigate();

  const handleNavLink = (item: NavigationItemType) => {
    // urlNavigate(item.href)
    // if(item.href == '/about') goToPage(item.href);
    // if(item.href == '/contact') goToPage(item.href);
    // else goToPage('/');
    urlNavigate(item.href)
  };

  const RenderItem = (item: NavigationItemType) => {
    return (
      <div className="flex items-center">
        <NavLink
          // exact
          // strict
          target={item.targetBlank ? "_blank" : undefined}
          rel="noopener noreferrer"
          className={`inline-flex items-center xl:text-xs whitespace-nowrap text-xl my-[34px] xl:my-0 font-medium text-[${itemColor}] py-2 px-[.1vw]`}
          to={ item.href }
          onClick={(e: any) => { handleNavLink(item) }}
        >
            <span className={`font-poppins font-medium text-base lg:text-xl xl:px-4 `}>
             { item.name }
            </span>
        </NavLink>
      </div>
    );
  };

  return <li className="menu-item nav-item relative">{RenderItem(menuItem)}</li>;
};

export default MenuItems;
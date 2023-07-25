import { isAbsolute } from "path";
import React, { FC } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { goToPage } from "../../common/goToPage";
import { NavigationItemType } from "../../types/menus/menus";

interface MenuItemsProps {
  menuItem: NavigationItemType;
  located?: string;
  itemColor?: string;
  onClick?: any;
};

const MenuItems: FC<MenuItemsProps> = ({
  menuItem,
  located,
  itemColor = '#fff',
  onClick
}) => {

  const urlNavigate = useNavigate();

  const activeLink = window.location.pathname.split('/')[1];

  const handleNavLink = (item: NavigationItemType) => {
    // urlNavigate(item.href)
    // if(item.href == '/about') goToPage(item.href);
    // if (item.href === '/#services-tabs') {
    //   const services_tabs = document.getElementById('services-tabs');
    //   if (services_tabs) {
    //     services_tabs.scrollIntoView({ behavior: 'smooth' });
    //   }
    // }
    // else goToPage('/');
    urlNavigate(item.href)
    onClick && onClick()
  };

  const RenderItem = (item: NavigationItemType) => {
    return (
      <div className="flex items-center">
        <NavLink
          // exact
          // strict
          target={item.targetBlank ? "_blank" : undefined}
          rel="noopener noreferrer"
          className={`inline-flex items-center xl:text-xs whitespace-nowrap text-xl my-[34px] xl:my-0 font-medium py-2 px-[.1vw] ${located === 'footer' ? 'text-black dark:text-white' : 'text-white'}`}
          to={item.href}
          onClick={(e: any) => { handleNavLink(item) }}
        >
          <span className={`${'/' + activeLink === item.href ? 'active-nav-item' : ''} font-poppins font-medium text-base lg:text-xl xl:px-4 `}>
            {item.name}
          </span>
        </NavLink>
      </div>
    );
  };

  return <li className="menu-item nav-item relative">{RenderItem(menuItem)}</li>;
};

export default MenuItems;


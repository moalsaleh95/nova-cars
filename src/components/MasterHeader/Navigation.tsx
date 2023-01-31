import React, { FC } from "react";
import { Logo } from "../../lib";
import { NAVIGATION_MENU } from "../constants/navigation";
import MenuItems from "./MenuItems";
import logo from "../../assets/logo/MechanicsLogo.svg";
import logoFooter from "../../assets/logo/logoFooter.svg";

export interface NavigationProps {
  located?: string;
  itemColor?: string;
  isScrollTop?: boolean;
};

const Navigation: FC<NavigationProps> = ({located = 'header', itemColor, isScrollTop = false}) => {
  return (
    <div className={`relative z-10 ${isScrollTop && 'topnotreach backdrop-filter'}`}>
      <div className="container py-5 relative flex justify-between items-center ≈">
        <div className="flex justify-start flex-grow items-center space-x-3 sm:space-x-8 lg:space-x-10">
          <Logo img={located == 'header' ? logo : logoFooter} />
        </div>
        <div className="flex-shrink-0 flex items-center justify-end text-neutral-700 space-x-1">
          <div className="hidden items-center xl:flex space-x-1">
            <ul className={`navigation p-0 xl:flex xl:justify-between w-[60%] xl:items-center xl:space-x-0 relative`}>
             {
               NAVIGATION_MENU?.map((item: any) => (
                 <MenuItems key={item.id} menuItem={item} itemColor = { itemColor } />
               ))
             }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;

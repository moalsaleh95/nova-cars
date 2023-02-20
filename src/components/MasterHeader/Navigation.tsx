import React, { FC } from "react";
import { Logo } from "../../lib";
import { NAVIGATION_MENU } from "../constants/navigation";
import MenuItems from "./MenuItems";
import MechanicsLogo from "../../assets/logo/MechanicsLogo.svg";
import MechanicsLogoFooter from "../../assets/logo/MechanicsLogoFooter.svg";
import DetailingLogo from "../../assets/logo/DetailingLogo.svg";
import DetailingLogoFooter from "../../assets/logo/DetailingLogoFooter.svg";

export interface NavigationProps {
  located?: string;
  itemColor?: string;
  isScrollTop?: boolean;
  activeHeadingTab?: string;
};

const Navigation: FC<NavigationProps> = ({ located = 'header', itemColor, isScrollTop = false, activeHeadingTab = 'mechanics' }) => {

  const whichLogo = localStorage.theme === 'dark' ? MechanicsLogo : MechanicsLogoFooter

  const HeadingLogo = () => {
    return activeHeadingTab === 'mechanics' ? MechanicsLogo : DetailingLogo;
  };

  const FooterLogo = () => {
    return activeHeadingTab === 'mechanics' ? whichLogo : DetailingLogoFooter;
  };

  return (
    <div className={`relative z-10 ${isScrollTop && 'topnotreach backdrop-filter'}`}>

      <div className="container py-5 relative flex justify-between items-center overflow-hidden">

        <div className="hidden md:flex justify-start flex-grow items-center space-x-3 sm:space-x-8 lg:space-x-10">
          {/* <Logo img={located === 'header' ? HeadingLogo() : FooterLogo()}  /> */}
          {localStorage.theme === 'dark' ? <Logo img={HeadingLogo()} /> : <Logo img={located === 'header' ? HeadingLogo() : FooterLogo()} />}

        </div>

        <div className="flex-shrink-0 hidden md:flex items-center justify-end text-neutral-700 space-x-1 ">
          <div className="items-center flex space-x-1">
            <ul className={`navigation p-0 flex flex-col md:flex-row justify-between items-center space-x-2 relative dark:text-white`}>
              {
                NAVIGATION_MENU?.map((item: any) => (
                  <MenuItems key={item.id} menuItem={item} itemColor={itemColor} />
                ))
              }
            </ul>
          </div>
        </div>

        <div className="w-full flex md:hidden justify-center items-center px-5 ">
          <div className="w-[352px] flex md:pt-6 justify-center flex-grow items-center space-x-3 sm:space-x-8 lg:space-x-10">
            <Logo img={located === 'header' ? HeadingLogo() : FooterLogo()} />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Navigation;

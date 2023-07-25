import React, { FC, useState } from "react";
import { Logo } from "../../lib";
import { NAVIGATION_MENU } from "../constants/navigation";
import MenuItems from "./MenuItems";
import MechanicsLogo from "../../assets/logo/MechanicsLogo.svg";
import MechanicsLogoFooter from "../../assets/logo/MechanicsLogoFooter.svg";
import DetailingLogo from "../../assets/logo/DetailingLogo.svg";
import DetailingLogoFooter from "../../assets/logo/DetailingLogoFooter.svg";
import { HashLink } from 'react-router-hash-link';

export interface NavigationProps {
  located?: string;
  itemColor?: string;
  isScrollTop?: boolean;
  activeHeadingTab?: string;
  dummyState?: boolean
};

const Navigation: FC<NavigationProps> = ({ located = 'header', itemColor, isScrollTop = false, activeHeadingTab = 'mechanics', dummyState }) => {
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

        <div className="flex-shrink-0 hidden md:flex items-center justify-end space-x-1 ">
          <div className="items-center flex space-x-1">
            <ul className={`navigation p-0 flex flex-col md:flex-row justify-between items-center space-x-2 relative dark:text-white`}>
              {
                NAVIGATION_MENU?.map((item: any) => (
                  item.name === 'Hizmetlerimiz' ?
                    <HashLink smooth to="/#services-tabs">
                      <span className={`font-poppins font-medium text-base lg:text-xl xl:px-4 ${located === 'footer' ? '!text-black dark:!text-white' : 'text-white'}`}>
                        {item.name}
                      </span>
                    </HashLink>
                    :
                    item.name === 'SSS' ?
                      <HashLink smooth to="/#faq">
                        <span className={`font-poppins  font-medium text-base lg:text-xl xl:px-4 ${located === 'footer' ? '!text-black dark:!text-white' : 'text-white'}`}>
                          {item.name}
                        </span>
                      </HashLink>
                      :
                      <MenuItems key={item.id} menuItem={item} itemColor={itemColor} located={located} />
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

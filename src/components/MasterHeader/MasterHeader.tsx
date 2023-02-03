import React, { FC, useEffect, useState } from 'react';
import useIsMobile from '../../hooks/useIsMobile';
import { MainColor } from '../constants/colors';
import MobileHeader from '../MobileHeader/MobileHeader';
import Navigation from './Navigation';
import SocialHeading from './SocialHeading';

interface MasterHeaderProps {
};

const MasterHeader: FC<MasterHeaderProps> = () => {
    const [isScrollTop, setIsScrollTop] = useState(true);
    const [activeHeadingTab, setActiveHeadingTab] = useState<string>('mechanics');
    const isMobile = useIsMobile()

    useEffect(() => {
      console.log('responsive header: isMobile:', isMobile)
    }, 
    [isMobile])
    useEffect(() => {
      window.onscroll = function () {
        scrollFunction();
      };
    }, []);
  
    function scrollFunction() {
      const head = document.getElementsByClassName("header");

      if (!head) return;

      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20       
      ) {
        !!isScrollTop && setIsScrollTop(false);
      } else {
        setIsScrollTop(true);
      }
    };

    return (
      <>
       
          {
          !isMobile && <SocialHeading activeHeadingTab = { activeHeadingTab } setActiveHeadingTab = { setActiveHeadingTab }  />
          }
          <div className={`header bg-[#d81212] h-[520px] relative lg:top-0 w-full lg:left-0 lg:right-0 z-40`}>
            {
              isMobile 
              ? 
              <MobileHeader />
              : 
              <Navigation isScrollTop = { isScrollTop} activeHeadingTab = { activeHeadingTab } />

            }
          </div>
      
    </>
    )
};

export default MasterHeader;
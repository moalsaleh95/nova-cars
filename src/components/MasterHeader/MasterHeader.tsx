import React, { FC, useEffect, useState } from 'react';
import useIsMobile from '../../hooks/useIsMobile';
import { MainColor } from '../constants/colors';
import MobileHeader from '../MobileHeader/MobileHeader';
import HeadingTaxonomy from './HeadingTaxonomy';
import Navigation from './Navigation';
import SocialHeading from './SocialHeading';

interface MasterHeaderProps {
};

const MasterHeader: FC<MasterHeaderProps> = () => {
    const [isScrollTop, setIsScrollTop] = useState(true);
    const [activeHeadingTab, setActiveHeadingTab] = useState<string>('mechanics');
    const isMobile = useIsMobile()
    const page = window.location.pathname.split('/').filter((_, idx) => _ != '');
    const pageLen = page?.length;
    const currentPage = pageLen > 0 && page[pageLen - 1];

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
          <div className={`header bg-[#d81212] ${pageLen > 0 ? 'h-[120px]' : 'h-[520px]'} relative lg:top-0 w-full lg:left-0 lg:right-0`}>
            {
              isMobile 
              ? 
              <MobileHeader />
              : <>
                <Navigation isScrollTop = { isScrollTop} activeHeadingTab = { activeHeadingTab } />
                  <div>
                  { pageLen > 0 && 
                    <HeadingTaxonomy 
                        currentPage = { currentPage } 
                    />
                  }
                </div>
              </>
              }
            </div>
      
    </>
    )
};

export default MasterHeader;
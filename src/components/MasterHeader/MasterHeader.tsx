import React, { FC, useEffect, useState } from 'react';
import Navigation from './Navigation';

interface MasterHeaderProps {
};

const MasterHeader: FC<MasterHeaderProps> = () => {
    const [isScrollTop, setIsScrollTop] = useState(true);

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
      <div className='header bg-[#d81212] h-[520px] relative lg:sticky lg:top-0 w-full lg:left-0 lg:right-0 z-40'>
        <Navigation isScrollTop = { isScrollTop} />
      </div>
    )
};

export default MasterHeader;
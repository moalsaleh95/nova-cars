import React, { FC, useEffect, useState } from 'react';
import useIsMobile from '../../hooks/useIsMobile';
import { MainColor } from '../constants/colors';
import MobileHeader from '../MobileHeader/MobileHeader';
import HeadingTaxonomy from './HeadingTaxonomy';
import Navigation from './Navigation';
import SocialHeading from './SocialHeading';
import { useLocation } from "react-router-dom";
import { click } from '@testing-library/user-event/dist/click';

interface MasterHeaderProps {
  activeHeadingTab?: string;
  setActiveHeadingTab?: any;
};

const MasterHeader: FC<MasterHeaderProps> = ({ activeHeadingTab, setActiveHeadingTab }) => {
  const [isScrollTop, setIsScrollTop] = useState(true);
  const isMobile = useIsMobile()
  const [ isHeaderTransparent, setIsHeaderTransparent ] = useState(false)
  const [page, setPage] = useState(window.location.pathname.split('/').filter((_, idx) => _ != ''));
  const pageLen = page?.length;
  const currentPage = pageLen > 0 && page[pageLen - 1];

  useEffect(() => {
    setPage(window.location.pathname.split('/').filter((_, idx) => _ != ''))
  }, [window.location.pathname])
  useEffect(() => {
    // console.log('responsive header: isMobile:', isMobile)
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

  const location = useLocation();

  useEffect(()=> {
    if (location.pathname !== '/') {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
  }, [location])


  useEffect(() => {
    window.addEventListener('scroll', () => {
    if(isMobile && window.scrollY > 88 ){
      setIsHeaderTransparent(true);
    } else if (!isMobile && window.scrollY > 127){
      setIsHeaderTransparent(true);
    } else {setIsHeaderTransparent(false);}
    });
}, [isMobile]);
  
  const [dummyState, setDummyState ] = useState(false)
  useEffect(() => {
    window.matchMedia("(prefers-color-scheme: dark)").matches ? setDummyState(!dummyState) : setDummyState(!dummyState);
  }, [dummyState])

  return (
    <>

      {
        !isMobile && <SocialHeading activeHeadingTab={activeHeadingTab} setActiveHeadingTab={setActiveHeadingTab} />
      }

      <div className={`header sticky top-0 left-0 z-[1000] bg-[#d81212]  md:h-[120px] lg:top-0 w-full lg:left-0 lg:right-0 
      ${isHeaderTransparent && !isMobile ? 'bg-opacity-75 backdrop-saturate-150 backdrop-blur-sm border-b border-[#d81212]' : ''}
      ${isHeaderTransparent && isMobile ? '!bg-transparent' : ''}      
      `}>
        {
          isMobile
            ?
            <MobileHeader isHeaderTransparent={isHeaderTransparent}/>
            :
            <>
              <Navigation isScrollTop={isScrollTop} activeHeadingTab={activeHeadingTab} dummyState={dummyState} />
            </>
        }
      </div>

      {
        page[0] === 'about' ?
          <>
            <div className='bg-white px-5 md:px-9 lg:px-0  dark:bg-[#0B0B0B]'>
              <p className='container text-4xl font-extrabold pb-3 pt-6  dark:text-[#fff]'>Hakkımızda</p>
            </div>

            <div>
              {pageLen > 0 &&
                <HeadingTaxonomy
                  currentPage={currentPage}
                />
              }
            </div>
          </> :
          null
      }

      {
        page[0] === 'services' || page[0] === 'contact' ?
          <>
            <div className='bg-white px-5 md:px-9 lg:px-0  dark:bg-[#0B0B0B]'>
              <p className='container text-4xl font-extrabold pb-3 pt-6  dark:text-[#fff]'>İletişim</p>
            </div>

            <div>
              {pageLen > 0 &&
                <HeadingTaxonomy
                  currentPage={currentPage}
                />
              }
            </div>
          </> :
          null
      }
    </>
  )
};

export default MasterHeader;
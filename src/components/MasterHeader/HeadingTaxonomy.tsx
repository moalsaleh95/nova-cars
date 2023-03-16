import React, { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import chevron_black from '../../assets/icons/chevron-down.svg';
import chevron_white from '../../assets/icons/chevron-left-white.svg';
import { HashLink } from 'react-router-hash-link';
import { capitalizeFirstLetter } from '../../common/capitalizeFirstLetter';

interface HeadingTaxonomyProps {
  currentPage?: string | boolean;
};

const HeadingTaxonomy: FC<HeadingTaxonomyProps> = ({ currentPage }) => {
  const page = window.location.pathname.split('/').filter((_, idx) => _ != '');
  // const pageLen = page?.length;
  // const currpage = pageLen > 0 && page[pageLen - 1];


  const capitalizeText = (text: string) => {
    
    return capitalizeFirstLetter(text.split('-').join(' ').split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' '))
  }

  const formatBreadCrumb = (text: string) => {
    const translation = labels[text]
    return capitalizeText(translation ?? text)
  }


  return (
    <div className='bg-white pb-6 font-poppins  px-5 md:px-9 lg:px-0 dark:bg-[#0B0B0B]'>
      <div className='container text-lg dark:text-[#fff]'>
        <>
          <Link to="/">Home</Link>

          {page.map((e, index) => {
            return (
              <>
                <img className='inline px-6 w-[54px]' src={localStorage.theme === "dark" ? chevron_white : chevron_black} alt=""></img>

                {index < page.length - 1 ?
                  <HashLink smooth to={e === 'services' ? '/#services-tabs' : formatBreadCrumb(e)} >
                    {formatBreadCrumb(e)}
                  </HashLink>
                  :
                  formatBreadCrumb(e)
                }

              </>
            )
          })}
        </>
      </div>
    </div>
  )
};




const labels: Record<string, string> = {
  "services": "servislerimiz",
  "Home": "ana sayfa",
  "motor-repair": "motor onarim",
  "contact": "İletişim",
  "about": "Hakkımızda",
  "car-wash": "Oto Yıkama",
  "interrior-cleaning": "Detaylı İç Temizlik",
  "mechanical-maintenance": "Mekanik Bakım",
  "paint-repair": "Boya Onarımı",
  "body-repair": "Kaporta Onarımı",
  "polish-paste": "Pasta Cila",
  "paintless-dent-repair":"Boyasız Göçük Onarımı",
  "motor-cleaning":"Detaylı Motor Temizlik"   

}



export default HeadingTaxonomy;
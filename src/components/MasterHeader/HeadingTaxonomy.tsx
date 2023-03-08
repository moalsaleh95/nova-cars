import React, { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import chevron_black from '../../assets/icons/chevron-down.svg';
import chevron_white from '../../assets/icons/chevron-left-white.svg';

import { capitalizeFirstLetter } from '../../common/capitalizeFirstLetter';

interface HeadingTaxonomyProps {
  currentPage?: string | boolean;
};

const HeadingTaxonomy: FC<HeadingTaxonomyProps> = ({ currentPage }) => {
  const page = window.location.pathname.split('/').filter((_, idx) => _ != '');
  // const pageLen = page?.length;
  // const currpage = pageLen > 0 && page[pageLen - 1];

  return (
    <div className='bg-white pb-6 font-poppins  px-5 md:px-9 lg:px-0 dark:bg-[#0B0B0B]'>
      <div className='container text-lg dark:text-[#fff]'>
        <>
          <Link to="/">Home</Link>
          {page.map(e => {
            return (
              <>
                <img className='inline px-6 w-[54px]' src={localStorage.theme === "dark" ? chevron_white : chevron_black} alt=""></img>
                {capitalizeFirstLetter(e.split('-').join(' ').split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' '))}
              </>
            )
          })}
        </>
      </div>
    </div>
  )
};

export default HeadingTaxonomy;
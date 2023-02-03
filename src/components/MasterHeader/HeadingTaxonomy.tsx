import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import chevron_down from '../../assets/icons/chevron-down.svg';
import { capitalizeFirstLetter } from '../../common/capitalizeFirstLetter';

interface HeadingTaxonomyProps {
    currentPage?: string | boolean;
};

const HeadingTaxonomy: FC<HeadingTaxonomyProps> = ({currentPage}) => {
  const page = window.location.pathname.split('/').filter((_, idx) => _ != '');
  const pageLen = page?.length;
  const currpage = pageLen > 0 && page[pageLen - 1];

  
  return (
    <div className='container h-[700px] text-lg'>

      <>
        <Link to="/">Home</Link> 
        <img className='inline px-6 w-[54px]' src={chevron_down} alt=""></img>
      </>
        {typeof currentPage == "string" && capitalizeFirstLetter(currentPage)}
    </div>
  )
};

export default HeadingTaxonomy;
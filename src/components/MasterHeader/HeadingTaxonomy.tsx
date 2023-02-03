import React, { FC } from 'react';

interface HeadingTaxonomyProps {
    currentPage?: string | boolean;
};

const HeadingTaxonomy: FC<HeadingTaxonomyProps> = ({currentPage}) => {
  return (
    <div className='container h-[700px]'>
        {currentPage}
    </div>
  )
};

export default HeadingTaxonomy;
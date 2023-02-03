import React, { FC } from 'react';
import HeadingTaxonomy from '../../components/MasterHeader/HeadingTaxonomy';

interface AboutProps {

};

const About: FC<AboutProps> = () => {
  const page = window.location.pathname.split('/').filter((_, idx) => _ != '');
  const pageLen = page?.length;
  const currentPage = pageLen > 0 && page[pageLen - 1];
  
  return (
    <div>
    </div>
  )
};

export default About;
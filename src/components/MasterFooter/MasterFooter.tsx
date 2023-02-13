import React, { FC } from 'react'
import Navigation from '../MasterHeader/Navigation';
import FooterContact from './FooterContact';

interface MasterFooterProps {
  activeHeadingTab?: string;
  setActiveHeadingTab?: string;
};

const MasterFooter: FC<MasterFooterProps> = ({ activeHeadingTab}) => {


  return (
    <div className='py-8 bg-white'>
      <FooterContact />
      <div className='container divide-x-4 w-full mt-6 h-[1px] bg-black bg-opacity-[0.05]'></div>
      <Navigation located = 'footer' itemColor = '' activeHeadingTab = { activeHeadingTab }  />
    </div>
  )
};

export default MasterFooter;
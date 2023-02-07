import React from 'react'
import { MasterHeader } from '../MasterHeader';
import Navigation from '../MasterHeader/Navigation';
import SocialHeading from '../MasterHeader/SocialHeading';
import FooterContact from './FooterContact';

const MasterFooter = () => {
  return (
    <div className='py-8 bg-white'>
      <FooterContact />
      <div className='divide-x-4 w-full mt-6 h-[1px] bg-black bg-opacity-[0.05]'></div>
      <Navigation located = 'footer' itemColor = '' />
    </div>
  )
};

export default MasterFooter;
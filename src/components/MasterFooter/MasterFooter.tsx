import React from 'react'
import { MasterHeader } from '../MasterHeader';
import Navigation from '../MasterHeader/Navigation';
import SocialHeading from '../MasterHeader/SocialHeading';
import FooterContact from './FooterContact';

const MasterFooter = () => {
  return (
    <div>
      <FooterContact />
      <div className='divide-x-4'></div>
      <Navigation located = 'footer' itemColor = '' />
    </div>
  )
};

export default MasterFooter;
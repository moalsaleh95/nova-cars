import React, { FC, useState, useEffect } from 'react'
import Navigation from '../MasterHeader/Navigation';
import FooterContact from './FooterContact';

interface MasterFooterProps {
  activeHeadingTab?: string;
  setActiveHeadingTab?: string;
};

const MasterFooter: FC<MasterFooterProps> = ({ activeHeadingTab}) => {

  const [dummyState, setDummyState ] = useState(false)
  useEffect(() => {
    // window.matchMedia("(prefers-color-scheme: dark)").matches ? setDummyState(!dummyState) : setDummyState(!dummyState);
  }, [dummyState])
  

  return (
    <div className='py-8 bg-white dark:bg-[#141414]'>
      <FooterContact />
      <div className='container divide-x-4 w-full mt-6 h-[1px] bg-black bg-opacity-[0.05] dark:bg-[#141414]'></div>
      <Navigation located = 'footer' itemColor = '' activeHeadingTab = { activeHeadingTab } dummyState={dummyState} />
    </div>
  )
};

export default MasterFooter;
import React, { FC, useEffect, useState } from 'react';
import HeadingTaxonomy from '../../components/MasterHeader/HeadingTaxonomy';
import about_img_light from '../../../src/assets/images/about_img_1.png';
import about_img_dark from '../../../src/assets/images/about_img_dark.png';
import { Helmet } from "react-helmet";
import AboutComponent from '../../components/About/About'; 
interface AboutProps {

};

const About: FC<AboutProps> = () => {

  const [darkMode, setDarkMode ] = useState<string>(localStorage.theme)

  useEffect(()=> {
    const mode = localStorage.theme;
    // console.log("current theme is ",localStorage.theme)
    if (mode === 'dark') {
      setDarkMode('dark')
    }
    else {
      setDarkMode('light')
    }
  }, [localStorage.theme])
  
  return (
    <AboutComponent />
  )
};

export default About;
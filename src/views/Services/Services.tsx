import React, { FC, useEffect, useState } from 'react';
import ServicesDetails from '../../components/ServicesDetails/ServicesDetails';

interface AboutProps {

};

const About: FC<AboutProps> = () => {

  const [darkMode, setDarkMode] = useState<string>(localStorage.theme)

  useEffect(() => {
    const mode = localStorage.theme;
    console.log("current theme is ", localStorage.theme)
    if (mode === 'dark') {
      setDarkMode('dark')
    }
    else {
      setDarkMode('light')
    }
  }, [localStorage.theme])

  return (
    <ServicesDetails />
  )
};

export default About;
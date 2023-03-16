import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ServicesDetails from '../../components/ServicesDetails/ServicesDetails';
import { ServicesData } from '../../lib';
import { ErrorPage } from '../404';

interface AboutProps {

};

const About: FC<AboutProps> = () => {

  const [darkMode, setDarkMode] = useState<string>(localStorage.theme)
  const params = useParams()
  const pageExists = ServicesData.filter(service => service.id === params.id)[0]

  useEffect(() => {
    const mode = localStorage.theme;
    // console.log("current theme is ", localStorage.theme)
    if (mode === 'dark') {
      setDarkMode('dark')
    }
    else {
      setDarkMode('light')
    }
  }, [localStorage.theme])

  return (
    <>
      {
        pageExists 
        ? <ServicesDetails service={pageExists} /> 
        : <ErrorPage />
      }
      
    </>
  )
};

export default About;
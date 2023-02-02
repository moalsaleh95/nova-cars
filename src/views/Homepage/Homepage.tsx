import React from 'react';
import { Helmet } from "react-helmet";
import ServicesTabs from '../../components/ServicesTabs/ServicesTabs';
import Faq from "../../components/Faq/Faq";

const Homepage = () => {
  return (
    <div className="relative overflow-hidden">
      <Helmet>
        <title>Nova Car Care || Homepage</title>
      </Helmet>
      <ServicesTabs />
      <div className='h-[500px]'>
        {/*  div free */}
        <Faq />
      </div>
    </div>
  )
};

export default Homepage;
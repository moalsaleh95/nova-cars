import React from 'react';
import { Helmet } from "react-helmet";
import { CustomerReviews } from '../../components/CustomerReviews';
import ServicesTabs from '../../components/ServicesTabs/ServicesTabs';
import Faq from "../../components/Faq/Faq";
import { Video } from '../../components/Video';

const Homepage = () => {
  return (
    <div className="relative overflow-hidden">
      <Helmet>
        <title>Nova Car Care || Homepage</title>
      </Helmet>
      <div className='border-2 border-black'>
        <Video />
      </div>
      <CustomerReviews />
      <Faq />
      <ServicesTabs />
    </div>
  )
};

export default Homepage;
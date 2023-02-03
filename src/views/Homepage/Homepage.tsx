import React from 'react';
import { Helmet } from "react-helmet";
import { CustomerReviews } from '../../components/CustomerReviews';
import ServicesTabs from '../../components/ServicesTabs/ServicesTabs';
import Faq from "../../components/Faq/Faq";
import { Video } from '../../components/Video';

const Homepage = () => {
  return (
    <div>
      <Helmet>
        <title>Nova Car Care || Homepage</title>
      </Helmet>
      
      <Video />
      <ServicesTabs />
      <CustomerReviews />
      <Faq />
    </div>
  )
};

export default Homepage;
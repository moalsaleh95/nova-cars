import React from 'react';
import { Helmet } from "react-helmet";
import { CustomerReviews, Faq, ServicesTabs } from '../../components';
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
import React from 'react';
import { Helmet } from "react-helmet";
import { CustomerReviews, Faq, ServicesTabs } from '../../components';

const Homepage = () => {
  return (
    <div className="relative overflow-hidden">
      <Helmet>
        <title>Nova Car Care || Homepage</title>
      </Helmet>
      <ServicesTabs />
      <CustomerReviews />
      <Faq />
    </div>
  )
};

export default Homepage;
import React from 'react';
import { Helmet } from "react-helmet";
import { CustomerReviews, Faq, ServicesTabs } from '../../components';
import { HeroVideo } from '../../components/HeroVideo';

const Homepage = () => {
  return (
    <div>
      <Helmet>
        <title>Nova Car Care</title>
      </Helmet>
      
      <HeroVideo />
      <ServicesTabs />
      <CustomerReviews />
      <Faq />
    </div>
  )
};

export default Homepage;
import React from 'react';
import { Helmet } from "react-helmet";
import { CustomerReviews } from '../../components/CustomerReviews';
import ServicesTabs from '../../components/ServicesTabs/ServicesTabs';
import Faq from "../../components/Faq/Faq";

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
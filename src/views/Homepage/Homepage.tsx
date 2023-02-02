import React from 'react';
import { Helmet } from "react-helmet";
import { CustomerReviews } from '../../components/CustomerReviews';
import { Faq } from '../../components/Faq';

const Homepage = () => {
  return (
    <div className="relative overflow-hidden">
      <Helmet>
        <title>Nova Car Care || Homepage</title>
      </Helmet>
      <CustomerReviews />
      <Faq />
    </div>
  )
};

export default Homepage;
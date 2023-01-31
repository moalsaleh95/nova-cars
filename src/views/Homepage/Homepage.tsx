import React from 'react';
import { Helmet } from "react-helmet";
import ServicesTabs from '../../components/ServicesTabs/ServicesTabs';

const Homepage = () => {
  return (
    <div className="relative overflow-hidden">
      <Helmet>
        <title>Nova Car Care || Homepage</title>
      </Helmet>
      <ServicesTabs />
    </div>
  )
};

export default Homepage;
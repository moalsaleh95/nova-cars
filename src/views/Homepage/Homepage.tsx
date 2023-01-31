import React from 'react';
import { Helmet } from "react-helmet";
import Faq from "../../components/Faq/Faq";

const Homepage = () => {
  return (
    <div className="relative overflow-hidden">
      <Helmet>
        <title>Nova Car Care || Homepage</title>
      </Helmet>
      <Faq />
    </div>
  )
};

export default Homepage;
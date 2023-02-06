import React from 'react';
import FaqAccordion from '../FaqAccordion/FaqAccordion';

const Faq = () => {
  return (
    <div className='bg-[#f9f9f9] overflow-hidden'>
      <div className='container py-20 flex flex-col lg:flex-row justify-between poppins px-5 md:px-9 lg:px-0'>
        <div className=''>
          <p className='text-4xl font-bold pt-10 pr-6'>Frequently Asked Questions</p>
          <p className='mt-3 pr-6'>Here you can find the answers to frequently asked questions</p>
        </div>
        <div className='w-full max-w-[930px]'>
          <FaqAccordion />
        </div>
      </div>
    </div>
  )
}

export default Faq
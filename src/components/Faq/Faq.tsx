import React from 'react';
import FaqAccordion from '../FaqAccordion/FaqAccordion';

function Faq() {
  return (
    <div className='mx-auto px-10 py-12 flex flex-row flex-wrap justify-center bg-[#f9f9f9]'>
      <div className='container mx-auto basis-2/6 '>
        <p className='text-4xl w-72 font-bold py-8'>Frequently Asked Questions</p>
        <p className='w-72 mt-3'>Here you can find the answers to frequently asked questions</p>
      </div>
      <div className='basis-4/6 '>
        <FaqAccordion />
      </div>
    </div>
  )
}

export default Faq
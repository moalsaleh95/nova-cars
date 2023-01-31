import React from 'react';
import FaqAccordion from '../FaqAccordion/FaqAccordion';

function Faq() {
  return (
    <div className='py-20 flex flex-row justify-center bg-[#f9f9f9]'>
      <div className='basis-2/5'>
        <p className='text-4xl w-72 font-bold'>Frequently Asked Questions</p>
        <p className='w-72 mt-3'>Here you can find the answers to frequently asked questions</p>
      </div>
      <div className='bsis-3/5'>
        <FaqAccordion />
      </div>
    </div>
  )
}

export default Faq
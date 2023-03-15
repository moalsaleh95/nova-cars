import React from 'react';
import FaqAccordion from '../FaqAccordion/FaqAccordion';
import { DarkModeSwitch } from '../DarkModeSwitch';

const Faq = () => {
  return (
    <div className='bg-[#f9f9f9] dark:bg-[#222222] overflow-hidden' id="faq">
      <div className='container py-20 flex flex-col lg:flex-row justify-between font-poppins px-5 md:px-0 lg:px-9 xl:px-0'>
        <div className='w-[330px] lg:w-auto'>
          <h2 className='text-2xl md:text-[34px] lg:text-[40px] leading-[42px] font-bold lg:font-black pt-10 pr-6 dark:text-white'>SIKÇA SORULAN SORULAR</h2>
          <p className='mt-6 pr-6 dark:text-white'>Buradan sıkça sorulan sorulara ulaşabilirsiniz</p>
        </div>
        <div className='w-full max-w-[930px] mt-6 md:mt-0'>
          <FaqAccordion />
          <DarkModeSwitch />
        </div>
      </div>
    </div>
  )
}

export default Faq
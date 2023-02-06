import React from 'react';
import { CustomerReviewsCarousel } from '../CustomerReviewsCarousel';

function CustomerReviews() {

  return (
    <div className='bg-[#D81212] overflow-hidden px-5 pb-[61px]'>
        <div className='container poppins flex flex-col md:flex-row justify-center pt-[72px] md:pt-24 bg-[#D81212] md:h-96'>
            <div className='basis-2/5 text-white '>
                <p className='md:text-4xl w-72 text-[24px] font-black md:font-bold'>Our Customer Reviews</p>
                <p className='md:w-72 mt-4 mb-6'>From its medieval origins to the digital era, learn everything there is to know about the ubiquitous lorem ipsum passage.</p>
            </div>

            <div className='basis-3/5 bg-[#D81212] rounded-md'>
                <CustomerReviewsCarousel />
            </div>
        </div>
    </div>
  )
}

export default CustomerReviews
import React from 'react';
import { CustomerReviewsCarousel } from '../CustomerReviewsCarousel';

const CustomerReviews = () => {

  return (
    <div className='bg-[#D81212] overflow-hidden px-5 md:px-9 pb-[61px] md:pb-0'>
        <div className='container poppins grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:flex-row justify-center pt-[72px] md:pt-24 bg-[#D81212] md:h-96'>
            <div className='text-white '>
                <p className='md:text-4xl w-72 text-[24px] font-black md:font-bold'>Our Customer Reviews</p>
                <p className='lg:w-72 mt-4 mb-6'>From its medieval origins to the digital era, learn everything there is to know about the ubiquitous lorem ipsum passage.</p>
            </div>

            <div className='w-full max-w-full bg-[#D81212] rounded-md lg:col-span-2 flex justify-end'>
                <CustomerReviewsCarousel />
            </div>
        </div>
    </div>
  )
}

export default CustomerReviews
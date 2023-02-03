import React from 'react';
import { CustomerReviewsCarousel } from '../CustomerReviewsCarousel';

function CustomerReviews() {

  return (
    <div className='bg-[#D81212]'>
        <div className='container poppins flex flex-row justify-center pt-24 bg-[#D81212] h-96'>
            <div className='basis-2/5 text-white '>
                <p className='text-4xl w-72 font-bold'>Our Customer Reviews</p>
                <p className='w-72'>From its medieval origins to the digital era, learn everything there is to know about the ubiquitous lorem ipsum passage.</p>
            </div>

            <div className='basis-3/5 bg-[#D81212] rounded-md'>
                <CustomerReviewsCarousel />
            </div>
        </div>
    </div>
  )
}

export default CustomerReviews
import React from 'react';
import useAppearance from '../../hooks/useAppearance';
import { CustomerReviewsCarousel } from '../CustomerReviewsCarousel';

const CustomerReviews = () => {

  // const appearance = useAppearance();
  // console.log({appearance});
  
  return (
    <div className='bg-[#D81212] overflow-hidden px-5 md:px-9 pb-[61px] md:pb-0'>
        <div className='container font-poppins grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:flex-row justify-center pt-[72px] md:pt-24 bg-[#D81212] md:h-96'>
            <div className='text-white '>
                <p className='md:text-4xl w-72 text-[24px] font-black md:font-bold'>Müşteri Yorumları</p>
                <p className='mt-4 mb-6 pr-6 mr-4'>Nova Car Care olarak verdiğimiz hizmetlerle siz değerli müşterilerimizin daima yanındayız.</p>
            </div>

            <div className='w-full max-w-full bg-[#D81212] rounded-md lg:col-span-2 flex justify-end'>
                <CustomerReviewsCarousel />
            </div>
        </div>
    </div>
  )
}

export default CustomerReviews
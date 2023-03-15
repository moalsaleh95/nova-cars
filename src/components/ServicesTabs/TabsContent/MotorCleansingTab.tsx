import React from 'react';
import { Link } from 'react-router-dom';
import carWashBanner from '../../../assets/images/car-wash-banner.png';

const MotorCleansingTab = () => {
  return (

    <div className='md:min-h-[620px] max-h-full flex flex-col lg:flex-row justify-between pl-5 xl:pl-0 pr-5 md:pr-7 pt-8 pb-5 xl:pb-0  md:pt-[37px] relative dark:bg-[#141414] dark:text-white'>
      <div className='h-full flex items-center'>
        <img src={carWashBanner} className='hidden lg:inline-block min-w-[580px] min-h-[289px] mt-36' alt='car wash banner' />
      </div>
      <div className='content w-full'>
        <h2 className='text-[26px] mb-[22px]'>Detaylı Motor Temizlik</h2>
        <p className='text-lg'>
          Otomobilin motor kısmında zamanla toz, yağ katmanları, çamur, kireç, zift, demir tozları ve
          pas birikir. Bu nedenle araç motorunun temizliği çok önemlidir. Motor temizleme işleminde
          önce çok amaçlı konsantre temizleyiciler ile motor yağı, toz ve kirden arındırılarak temizlenir.
          Daha sonra kirin nüfuz etmesini zorlaştıran ve motora parlaklık veren özel motor ve plastik
          aksam koruyucu ile kaplanır..
        </p>
        <div className='absolute lg:bottom-[6rem] bottom-[-6rem] mt-10 flex justify-start space-x-8 '>
          <Link to='/services/motor-cleaning' ><button className='px-10 py-4 bg-[#D81212] border-2 border-[#D81212] transition-all text-white rounded-[10px] text-lg hover:text-black hover:bg-white'>Daha fazla bilgi</button></Link>
          <a target="_blank" rel="noreferrer" href="https://wa.me/905433297151"><button className='px-10 py-4 hidden md:inline-block rounded-[10px] text-lg border-2 border-[#707070] hover:bg-[#D81212] hover:text-white transition-all hover:border-[#D81212]'>Bize ulaşın</button></a>
        </div>
      </div>
    </div>
  )
}

export default MotorCleansingTab
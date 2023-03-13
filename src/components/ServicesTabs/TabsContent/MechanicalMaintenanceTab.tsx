import React from 'react';
import { Link } from 'react-router-dom';
import carWashBanner from '../../../assets/images/car-wash-banner.png';

const MechanicalMaintenanceTab = () => {
  return (

    <div className='md:min-h-[620px] max-h-full flex flex-col lg:flex-row justify-between pl-5 xl:pl-0 pr-5 md:pr-7 pt-8 pb-5 xl:pb-0  md:pt-[37px] relative dark:bg-[#141414] dark:text-white'>
      <div className='h-full flex items-center'>
        <img src={carWashBanner} className='hidden lg:inline-block min-w-[580px] min-h-[289px] mt-36' alt='car wash banner' />
      </div>
      <div className='content w-full'>
        <h2 className='text-[26px] mb-[22px]'>Mekanik Bakım</h2>
        <p className='text-lg'>
          Mekanik sistemler içerisinde meydana gelebilecek aşınmadan kaynaklı problemleri ortadan
          kaldırmak ve sistemin sağlığını korumak için düzenli olarak mekanik bakım yapılması
          gerekmektedir. Mekanik bakım hizmetlerimiz kapsamında otomobilin tüm mekanik aksamları
          ile ilgili sorunlar tespit edilerek son teknolojiler kullanılarak değişim ve bakımı yapılır.
        </p>
        <div className='absolute lg:bottom-[6rem] bottom-[-6rem] mt-10 flex justify-start space-x-8 '>
          <Link to='/services/mechanical-maintenance' ><button className='px-10 py-4 bg-[#D81212] border-2 border-[#D81212] transition-all text-white rounded-[10px] text-lg hover:text-black hover:bg-white'>Learn More</button></Link>
          <a target="_blank" rel="noreferrer" href="https://wa.me/905549867024"><button className='px-10 py-4 hidden md:inline-block rounded-[10px] text-lg border-2 border-[#707070] hover:bg-[#D81212] hover:text-white transition-all hover:border-[#D81212]'>Contact Now</button></a>
        </div>
      </div>
    </div>
  )
}

export default MechanicalMaintenanceTab
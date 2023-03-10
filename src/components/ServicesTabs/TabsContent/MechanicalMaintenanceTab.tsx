import React from 'react';
import { Link } from 'react-router-dom';

const MechanicalMaintenanceTab = () => {
  return (
    <div className='w-full min-h-[600px] flex flex-col pt-8 items-center dark:bg-[#141414] dark:text-white'>
      <div className='text-start w-1/2'>
        <h2 className='text-[26px] mb-[22px]'>Mekanik Bakım</h2>
        <p className=''>
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
import React, {FC} from 'react';
import { Link } from 'react-router-dom';


const InterriorCleaningTab: FC = () => {
  return (
    <div className='w-full min-h-[600px] flex flex-col pt-8 items-center dark:bg-[#141414] dark:text-white'>
      <div className='text-start w-1/2'>
        <h2 className='text-[26px] mb-[22px]'>Detaylı İç Temizlik</h2>
        <p className=''>
          Detaylı iç temizlik uygulamasında araç içerisinde temas edilen direksiyon, vites, ayna, kapı
          kolları, ön gögüs, torpido ve bütün plastik aksam gibi sürücü ve yolcuların sürekli temas ettiği
          yüzeylerin yanı sıra tavan ve koltuk döşemeleri detaylı bir şekilde anti-bakteriyel temizlik
          ürünleriyle temizlenerek dezenfekte edilmektedir. Aracınız ilk aldığınız günkü temizliğine ve
          kokusuna kavuşur.
        </p>

        <div className='absolute lg:bottom-[6rem] bottom-[-6rem] mt-10 flex justify-start space-x-8 '>
          <Link to='/services/interrior-cleaning' ><button className='px-10 py-4 bg-[#D81212] border-2 border-[#D81212] transition-all text-white rounded-[10px] text-lg hover:text-black hover:bg-white'>Learn More</button></Link>
          <a target="_blank" rel="noreferrer" href="https://wa.me/905549867024"><button className='px-10 py-4 hidden md:inline-block rounded-[10px] text-lg border-2 border-[#707070] hover:bg-[#D81212] hover:text-white transition-all hover:border-[#D81212]'>Contact Now</button></a>
        </div>
      </div>
    </div>
  )
}

export default InterriorCleaningTab
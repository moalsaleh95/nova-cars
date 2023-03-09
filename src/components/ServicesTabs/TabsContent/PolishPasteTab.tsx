import React from 'react';
import { Link } from 'react-router-dom';

const PolishPasteTab = () => {
  return (
    <div className='w-full min-h-[600px] flex flex-col pt-8 items-center dark:bg-[#141414] dark:text-white'>
      <div className='text-start w-1/2'>
        <h2 className='text-[26px] mb-[22px]'>Pasta Cila</h2>
        <p className=''>
          Aracınızın yüzeyinde zamanla çevresel etmenlerle birlikte çizikler, lekeler ve boya
          matlaşmaları oluşur. Araç yüzeyinde oluşan bu tarz küçük deformasyonlar pasta ve cila
          işlemleri ile giderilmektedir. Kaliteli ürünler kullanılarak yapılan pasta işleminde öncesinde
          yüzeydeki çizikler kapatılarak temiz ve pürüzsüz bir yüzey oluşturulur. Ardından yapılan cila
          işlemiyle ise yüzeyde oluşturulan ince ve şeffaf tabakayla aracınız derin bir parlaklık
          kazanarak ilk günkü ışıltısına kavuşur.
        </p>
        <div className='absolute lg:bottom-[6rem] bottom-[-6rem] mt-10 flex justify-start space-x-8 '>
          <Link to='/services/polish-paste'><button className='px-10 py-4 bg-[#D81212] border-2 border-[#D81212] transition-all text-white rounded-[10px] text-lg hover:text-black hover:bg-white'>Learn More</button></Link>
          <a target="_blank" rel="noreferrer" href="https://wa.me/905549867024"><button className='px-10 py-4 hidden md:inline-block rounded-[10px] text-lg border-2 border-[#707070] hover:bg-[#D81212] hover:text-white transition-all hover:border-[#D81212]'>Contact Now</button></a>
        </div>
      </div>
    </div>
  )
}

export default PolishPasteTab
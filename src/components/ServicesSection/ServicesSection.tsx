import React from 'react';
import logo_1 from "../../../src/assets/icons/about_logo_1.svg";
import logo_2 from "../../../src/assets/icons/about_logo_2.svg";
import logo_3 from "../../../src/assets/icons/about_logo_3.svg";
import logo_4 from "../../../src/assets/icons/about_logo_4.svg";
import logo_5 from "../../../src/assets/icons/about_logo_5.svg";
import logo_6 from "../../../src/assets/icons/about_logo_6.svg";
import logo_7 from "../../../src/assets/icons/about_logo_7.svg";
import logo_8 from "../../../src/assets/icons/about_logo_8.svg";
import car_image from "../../../src/assets/icons/car_image.png";

const ServicesSection = () => {
    return (
        <div className='bg-[#222222] px-5  md:px-9 lg:px-0'>
            <div className='container grid grid-cols-1 md:grid-cols-2 justify-items-center content-start gap-12 py-10 md:py-[120px] text-white relative'>

                <div className='w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between gap-6 mg:gap-8 lg:gap-28 bg-[#0B0B0B] rounded-2xl p-4 lg:p-14'>

                    <div className='grid justify-items-center'>
                        <img className='h-10 mb-4' src={logo_1} alt="logo_1" />
                        <p className='text-center'>Detaylı İç<br />Temizlik </p>
                    </div>

                    <div className='grid justify-items-center'>
                        <img className='h-10 mb-4' src={logo_2} alt="logo_1" />
                        <p className='text-center'>Oto <br /> Yıkama</p>
                    </div>

                    <div className='grid justify-items-center'>
                        <img className='h-10 mb-4' src={logo_3} alt="logo_1" />
                        <p className='text-center'>Mekanik <br /> Onarımı</p>
                    </div>

                    <div className='grid justify-items-center'>
                        <img className='h-10 mb-4' src={logo_4} alt="logo_1" />
                        <p className='text-center'>Boya <br /> Onarımı</p>
                    </div>

                    <div className='grid justify-items-center'>
                        <img className='h-10 mb-4' src={logo_5} alt="logo_1" />
                        <p className='text-center'>Kaporta <br /> Onarımı</p>
                    </div>

                    <div className='grid justify-items-center'>
                        <img className='h-10 mb-4' src={logo_6} alt="logo_1" />
                        <p className='text-center'>Pasta <br /> Cila</p>
                    </div>

                    <div className='grid justify-items-center'>
                        <img className='h-10 mb-4' src={logo_7} alt="logo_1" />
                        <p className='text-center'>Göçük <br /> Onarımı</p>
                    </div>

                    <div className='grid justify-items-center'>
                        <img className='h-10 mb-4' src={logo_8} alt="logo_1" />
                        <p className='text-center'>Detaylı Motor<br /> Temizlik </p>
                    </div>

                </div>

                <div>
                    <div className='font-poppins'>
                        <p className='py-3 font-semibold text-2xl my-4'>Kalite ve Güvenin Adresi </p>

                        <p className='pb-3'>
                            Kalite ve güvenin adresi sloganı ile yola çıkan Nova Car Care, alanında uzman teknik 
                            kadrosu ve kurumsal yapısıyla İstanbul’un en nitelikli oto bakım ve onarım servisi olarak 
                            sektöre yeni bir bakış açısı getirmek için çalışmalarına devam etmektedir.
                            Kalitemizi, birinci sınıf ürünlerin, profesyonel servisin ve müşteri beklentilerinin 
                            karşılanmasının bir toplamı olarak tanımlamaktayız.
                        </p>
                        <p className='pb-3'>
                            en iyi çözümü sunabilmemizi sağlar. Düzenli kalite kontrolleri ile standartlarımızın 
                            korunmasını garanti altına alırız. Denetlemelerimiz, servis kalitesini iyileştirmeye devam 
                            etme çabamızın temelidir.
                        </p>
                        <p>
                            Her iş kolumuzda, en kaliteli ürün ve hizmetleri çözüm ortaklarımız ile beraber 
                            müşterilerimize sunar, daima rekabetten bir adım önde olmaya çalışırız. İş ortaklarımızın ve 
                            müşterilerimizin taleplerini önceden tespit eder, hızla yararlı çözüm üretmeye çalışıyoruz.
                        </p>

                    </div>
                </div>

                <img className='hidden md:inline-block absolute w-[650px] top-[-125px] right-[100px]' src={car_image} alt="car_image" />

            </div>
        </div>
    )
}

export default ServicesSection
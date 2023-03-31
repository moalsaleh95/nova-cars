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
import ServicesGrid from '../ServicesGrid/ServicesGrid';

const ServicesSection = () => {
    return (
        <div className='bg-[#222222] px-5  md:px-9 lg:px-0'>
            <div className='container grid grid-cols-1 md:grid-cols-2 justify-items-center content-start gap-12 py-10 md:py-[120px] text-white relative'>

                <ServicesGrid />

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
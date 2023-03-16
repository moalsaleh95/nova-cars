import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from "react-helmet";
import services_img from '../../../src/assets/images/services.png'
import services_img_mobile from '../../../src/assets/images/services_mobile.png';
import services_img_tablet from '../../../src/assets/images/services_tablet.png';
import logo_1 from "../../../src/assets/icons/about_logo_1.svg";
import logo_2 from "../../../src/assets/icons/about_logo_2.svg";
import logo_3 from "../../../src/assets/icons/about_logo_3.svg";
import logo_4 from "../../../src/assets/icons/about_logo_4.svg";
import logo_5 from "../../../src/assets/icons/about_logo_5.svg";
import logo_6 from "../../../src/assets/icons/about_logo_6.svg";
import logo_7 from "../../../src/assets/icons/about_logo_7.svg";
import logo_8 from "../../../src/assets/icons/about_logo_8.svg";

const ServicesDetails = () => {

    const { id } = useParams();

    return (
        <div>
            <div className='container poppins dark:text-white dark:bg-[#222222] bg-[#f9f9f9] px-5 md:px-9 lg:px-0 grid lg:grid-cols-2 grid-cols-1 justify-items-center content-start lg:gap-[29px] pt-[34px] font-poppins'>
                <Helmet>
                    <title>Nova Car Care || Services</title>
                </Helmet>

                <div className='xl:text-[18px] text-[16px] max-lg:text-[16px] justify-self-center font-normal leading-[28px] xl:pt-[31px] lg:pb-[65px] lg:mb-[96px] max-lg:pt-[21px]'>
                    <p className='py-3 font-semibold text-2xl pb-[21px] xl:text-[26px] text-[24px]'>From its medieval origins to the digital era</p>
                    <p className='pb-3'>
                        So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero’s De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book.
                    </p>
                    <p className='pb-3'>
                        It’s difficult to find examples of lorem ipsum in use before Letraset made it popular as a dummy text in the 1960s, although McClintock says he remembers coming across the lorem ipsum passage in a book of old metal type samples. So far he hasn’t relocated where he once saw the passage, but the popularity of Cicero in the 15th century supports the theory that the filler text has been used for centuries.
                    </p>
                    <p className='pb-3'>
                        And anyways, as Cecil Adams reasoned, “[Do you really] think graphic arts supply houses were hiring classics scholars in the 1960s?”
                    </p>
                </div>

                <div className=''>
                    <img src={services_img} alt="services" className='xl:w-[690px] block max-xl:hidden' />
                    <img src={services_img_tablet} alt="" className='xl:hidden block max-lg:hidden w-[565px]' />                     
                    <img src={services_img_mobile} alt="" className='lg:hidden block' />
                </div>
            </div>


            <div className='bg-[#222222] px-5 md:px-9 lg:px-0 xl:mt-[-6rem] max-xl:mt-[-4rem] max-lg:pt-[6rem] '>
                <div className='lg:pb-[58px] container grid max-xl:grid-cols-1 grid-cols-2 justify-items-center content-start gap-12 xl:pt-[119px] lg:pt-[5rem] text-white relative '>

                    <div className='w-full grid grid-cols-2 md:grid-cols-4 justify-between gap-6 mg:gap-8 lg:gap-28 bg-[#0B0B0B] rounded-2xl p-4 lg:p-14'>

                        <div className='grid justify-items-center'>
                            <img className='h-10 mb-4' src={logo_1} alt="logo_1" />
                            <p className='text-center'>Roadside <br /> Assistance</p>
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
                            <p className='text-center'>Seramik <br /> kaplama</p>
                        </div>

                    </div>

                    <div className='max-lg:pb-[48px] pb-[58px]'>
                        <div className='font-poppins'>
                            <p className='py-3 font-semibold text-2xl my-4'>Kalite ve Güvenin Adresi</p>

                            <p className='pb-3'>
                                kalite ve güvenin adresi sloganı ile yola çıkan Nova Car Care, alanında uzman teknik kadrosu ve kurumsal yapısıyla İstanbul’un en nitelikli oto bakım ve onarım servisi olarak sektöre yeni bir bakış açısı getirmek için çalışmalarına devam etmektedir. Kalitemizi, birinci sınıf ürünlerin, profesyonel servisin ve müşteri beklentilerinin karşılanmasının bir toplamı olarak tanımlamaktayız.
                            </p>
                            <p className='pb-3'>
                                en iyi çözümü sunabilmemizi sağlar. Düzenli kalite kontrolleri ile standartlarımızın korunmasını garanti altına alırız. Denetlemelerimiz, servis kalitesini iyileştirmeye devam etme çabamızın temelidir.
                            </p>
                            <p>
                              Her iş kolumuzda, en kaliteli ürün ve hizmetleri çözüm ortaklarımız ile beraber müşterilerimize sunar, daima rekabetten bir adım önde olmaya çalışırız. İş ortaklarımızın ve müşterilerimizin taleplerini önceden tespit eder, hızla yararlı çözüm üretmeye çalışıyoruz.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesDetails
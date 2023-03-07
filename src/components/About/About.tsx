import React from 'react';
import { Helmet } from "react-helmet";
import about_img_light from '../../../src/assets/images/about_img_1.png';
import about_img_dark from '../../../src/assets/images/about_img_dark.png';
import ServicesSection from '../ServicesSection/ServicesSection';

const About = () => {
    return (
        <div>
            <div className='container dark:text-white px-5 md:px-9 lg:px-0 flex flex-col-reverse grid-cols-1 lg:grid lg:grid-cols-2 justify-items-center content-start gap-12 py-6 md:pb-[300px] font-poppins'>
                <Helmet>
                    <title>Nova Car Care || About</title>
                </Helmet>

                <div>
                    <p className='py-3 font-semibold text-2xl '>About Nova Car Care</p>
                    Nova Car Care otomobil ile ilgili tüm ihtiyaçlarınıza yönelik bir çözüm noktası olarak hizmet
                    vermektedir. Uzun yıllara dayanan tecrübesini, son teknolojiyi içeren detaycı hizmet anlayışı
                    ile bir arada sunan Nova Car Care verdiği tüm hizmetlerde müşteri memnuniyetini ön planda
                    tutmaktadır.
                    {/*   
        <p className='pb-3'>
          So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero’s De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book. 
        </p>
        <p className='pb-3'>  
          It’s difficult to find examples of lorem ipsum in use before Letraset made it popular as a dummy text in the 1960s, although McClintock says he remembers coming across the lorem ipsum passage in a book of old metal type samples. So far he hasn’t relocated where he once saw the passage, but the popularity of Cicero in the 15th century supports the theory that the filler text has been used for centuries. 
        </p>
        <p>  
          And anyways, as Cecil Adams reasoned, “[Do you really] think graphic arts supply houses were hiring classics scholars in the 1960s?” Perhaps. But it seems reasonable to imagine that there was a version in use far before the age of Letraset.
        </p> */}
                </div>
                <div className='self-center'>
                    <img src={localStorage.theme === 'dark' ? about_img_dark : about_img_light} alt="logo_about" className='max-w-[250px] md:max-w-[377px] mt-[80px]' />
                </div>
            </div>
            <ServicesSection />
        </div>
    )
}

export default About;
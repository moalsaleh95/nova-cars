import React, { FC } from 'react';
import HeadingTaxonomy from '../../components/MasterHeader/HeadingTaxonomy';
import about_img_1 from '../../../src/assets/images/about_img_1.png';
import { Helmet } from "react-helmet";

import logo_1 from "../../../src/assets/icons/about_logo_1.png";
import logo_2 from "../../../src/assets/icons/about_logo_2.png";
import logo_3 from "../../../src/assets/icons/about_logo_3.png";
import logo_4 from "../../../src/assets/icons/about_logo_4.png";
import logo_5 from "../../../src/assets/icons/about_logo_5.png";
import logo_6 from "../../../src/assets/icons/about_logo_6.png";
import logo_7 from "../../../src/assets/icons/about_logo_7.png";
import logo_8 from "../../../src/assets/icons/about_logo_8.png";
import car_image from "../../../src/assets/icons/car_image.png";
interface AboutProps {

};

const About: FC<AboutProps> = () => {
  
  return (
    <div>
      <div className='container px-5 md:px-9 lg:px-0 flex flex-col-reverse grid-cols-1 lg:grid lg:grid-cols-2 justify-items-center content-start gap-12 py-14 font-poppins'>
      <Helmet>
        <title>Nova Car Care || About</title>
      </Helmet>

      <div>
        <p className='py-3 font-semibold text-2xl'>From its medieval origins to the digital era</p>

        <p className='pb-3'>
          So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero’s De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book. 
        </p>
        <p className='pb-3'>  
          It’s difficult to find examples of lorem ipsum in use before Letraset made it popular as a dummy text in the 1960s, although McClintock says he remembers coming across the lorem ipsum passage in a book of old metal type samples. So far he hasn’t relocated where he once saw the passage, but the popularity of Cicero in the 15th century supports the theory that the filler text has been used for centuries. 
        </p>
        <p>  
          And anyways, as Cecil Adams reasoned, “[Do you really] think graphic arts supply houses were hiring classics scholars in the 1960s?” Perhaps. But it seems reasonable to imagine that there was a version in use far before the age of Letraset.
        </p>

      </div>

      <div className='self-center max-w-'> 
        <img src={about_img_1} alt="logo_about" className='max-w-[250px] md:max-w-[unset]'/>
      </div>
    </div>



    <div className='bg-[#222222] px-5  md:px-9 lg:px-0'>
      <div className='container grid grid-cols-1 md:grid-cols-2 justify-items-center content-start gap-12 py-20 text-white'>

        <div className='w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between gap-6 mg:gap-8 lg:gap-28 bg-[#0B0B0B] rounded-2xl p-4 lg:p-14'>

          <div className='grid justify-items-center'>
            <img className='h-10 mb-4' src={logo_1} alt="logo_1" />
            <p className='text-center'>Roadside <br/> Assistance</p>
          </div>

          <div className='grid justify-items-center'>
            <img className='h-10 mb-4' src={logo_2} alt="logo_1" />
            <p className='text-center'>Car <br/> Washing</p>
          </div>

          <div className='grid justify-items-center'>
            <img className='h-10 mb-4' src={logo_3} alt="logo_1" />
            <p className='text-center'>Mechanical <br/> Maintenance</p>
          </div>

          <div className='grid justify-items-center'>
            <img className='h-10 mb-4' src={logo_4} alt="logo_1" />
            <p className='text-center'>Paint <br/> Repair</p>
          </div>

          <div className='grid justify-items-center'>
            <img className='h-10 mb-4' src={logo_5} alt="logo_1" />
            <p className='text-center'>Body <br/> Repair</p>
          </div>

          <div className='grid justify-items-center'>
            <img className='h-10 mb-4' src={logo_6} alt="logo_1" />
            <p className='text-center'>Expertise <br/> Report</p>
          </div>

          <div className='grid justify-items-center'>
            <img className='h-10 mb-4' src={logo_7} alt="logo_1" />
            <p className='text-center'>Mechanical <br/> Maintenance</p>
          </div>

          <div className='grid justify-items-center'>
            <img className='h-10 mb-4' src={logo_8} alt="logo_1" />
            <p className='text-center'>Paint <br/> Repair</p>
          </div>

        </div>

        <div>
        <div className='font-poppins'>
          <p className='py-3 font-semibold text-2xl my-4'>From its medieval origins to the digital era</p>

          <p className='pb-3'>
            So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero’s De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book. 
          </p>
          <p className='pb-3'>  
            It’s difficult to find examples of lorem ipsum in use before Letraset made it popular as a dummy text in the 1960s, although McClintock says he remembers coming across the lorem ipsum passage in a book of old metal type samples. So far he hasn’t relocated where he once saw the passage, but the popularity of Cicero in the 15th century supports the theory that the filler text has been used for centuries. 
          </p>
          <p>  
            And anyways, as Cecil Adams reasoned, “[Do you really] think graphic arts supply houses were hiring classics scholars in the 1960s?” Perhaps. But it seems reasonable to imagine that there was a version in use far before the age of Letraset.
          </p>

        </div>
        </div>

        <img className='absolute w-[650px] top-[-135px] right-[100px]' src={car_image} alt="car_image" />

      </div>
    </div>
  </div>
  )
};

export default About;
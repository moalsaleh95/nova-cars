import React, { FC } from 'react';
import HeadingTaxonomy from '../../components/MasterHeader/HeadingTaxonomy';
import about_img_1 from '../../../src/assets/images/about_img_1.png';
import { Helmet } from "react-helmet";
interface AboutProps {

};

const About: FC<AboutProps> = () => {
  const page = window.location.pathname.split('/').filter((_, idx) => _ != '');
  const pageLen = page?.length;
  const currentPage = pageLen > 0 && page[pageLen - 1];
  
  return (
    <div>
      <div className='container grid grid-cols-2 justify-items-center content-start gap-12 py-14 font-poppins'>
      <Helmet>
        <title>Nova Car Care || About</title>
      </Helmet>
      <div>
        <p className='py-3 font-semibold text-xl'>From its medieval origins to the digital era</p>

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

      <div className='self-center'> 
        <img src={about_img_1} alt="logo_about" />
      </div>
    </div>



    <div className='bg-[#222222]'>
      <div className='container grid grid-cols-2 justify-items-center content-start gap-12 font-poppins py-20 text-white'>
        <div className='grid grid-cols-4 grid-rows2'>
          <div>
            
          </div>
        </div>

        <div>
        <div>
          <p className='py-3 font-semibold text-xl'>From its medieval origins to the digital era</p>

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

      </div>
    </div>
  </div>
  )
};

export default About;
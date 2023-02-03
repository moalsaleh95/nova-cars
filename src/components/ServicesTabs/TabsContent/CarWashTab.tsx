import React, {FC} from 'react'
import carWashBanner from '../../../assets/images/car-wash-banner.png'


const CarWashTab: FC = () => {
  return (
    <div className='md:min-h-[680px] max-h-full flex flex-col lg:flex-row   justify-between px-5 md:pr-7 pt-8  md:pt-10 py-10 '>
        <div className='h-full flex items-center'>
            <img src={carWashBanner} className='hidden md:inline-block min-w-[580px] min-h-[289px] mt-36' alt='car wash banner' />
        </div>
        <div className='content w-full'>
            <h2 className='text-[26px] mb-[22px]'>From its medieval origins to the digital era</h2>
            <p className='text-lg'> So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero’s De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book.<br /> <br /> It’s difficult to find examples of lorem ipsum in use before Letraset made it popular as a dummy text in the 1960s, although McClintock says he remembers coming across the lorem ipsum passage in a book of old metal type samples. So far he hasn’t relocated where he once saw the passage, but the popularity of Cicero in the 15th century supports the theory that the filler text has been used for centuries. ,<br /> <br />And anyways, as Cecil Adams reasoned, “[Do you really] think graphic arts supply houses were hiring classics scholars in the 1960s?” Perhaps. But it seems reasonable to imagine that there was a version in use far before the age of Letraset.</p>
            <div className='mt-10 flex justify-center md:justify-start space-x-8'>
                <button className='px-10 py-4 bg-[#D81212] border-2 border-[#D81212] transition-all text-white rounded-[10px] text-lg hover:text-black hover:bg-white'>Learn More</button>
                <button className='px-10 py-4 rounded-[10px] text-lg border-2 border-[#707070] hover:bg-[#D81212] hover:text-white transition-all hover:border-[#D81212]'>Contact Now</button>

            </div>
        </div>
    </div>
  )
}

export default CarWashTab
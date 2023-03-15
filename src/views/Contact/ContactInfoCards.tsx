import React from 'react'
import { ReactComponent as PhoneIcon } from '../../assets/icons/PhoneIcon.svg'
import { ReactComponent as LocationIcon } from '../../assets/icons/LocationIcon.svg'
import { ReactComponent as MailIcon } from '../../assets/icons/MailIcon.svg'
import ContactInfoCard from '../../components/ContactInfoCard/ContactInfoCard'


const ContactInfoCards = () => {
  return (
    <div className='px-5 lg:px-9 2xl:px-0 grid lg:grid-cols-3 gap-y-5 gap-x-4 xl:gap-x-[30px] container -mt-[50px] '>
        {
            contactInfoData.map(item => {
                return (
                    <ContactInfoCard {...item} />
                )
            })
        }
    </div>
  )
}


const contactInfoData = [
    {
        title: 'Phone',
        subtitle: '+44 781-824-4483',
        Icon: PhoneIcon,
        id: '1'
    },
    {
        title: 'E-mail',
        subtitle: 'info@novacarscare.com',
        Icon: MailIcon,
        id: '2'
    },
    {
        title: 'Location',
        subtitle: 'Merkez Mh. Şişli - İstanbul, Turkey',
        Icon: LocationIcon,
        id: '3'
    },
  
]

export default ContactInfoCards
import React from 'react'
import { ReactComponent as PhoneIcon } from '../../assets/icons/PhoneIcon.svg'
import { ReactComponent as LocationIcon } from '../../assets/icons/LocationIcon.svg'
import { ReactComponent as MailIcon } from '../../assets/icons/MailIcon.svg'
import ContactInfoCard from '../../components/ContactInfoCard'


const ContactInfoCards = () => {
  return (
    <div className='w-full grid grid-cols-3 gap-x-[30px] container border border-rose-600'>
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
        subtitle: 'info@novacar.com',
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
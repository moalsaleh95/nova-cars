import React, { ReactNode } from 'react';
import { ReactComponent as phone } from "../../assets/icons/phone.svg";
import { ReactComponent as email } from "../../assets/icons/email.svg";
import { ReactComponent as location } from "../../assets/icons/location.svg";
import { ReactComponent as clock } from "../../assets/icons/clock.svg";

interface Contacts {
    name?: string;
    content?: string;
    Icon?: any;
};

const Contacts: Contacts[] = [
    {
        name: 'Telefon',
        content:'+90 541 335 37 13',
        Icon: phone
    },
    {
        name: 'E-Posta',
        content: 'info@novacarscare.com',
        Icon: email
    },
    {
        name: 'Lokasyon',
        content: 'Merkez Mh. Şişli - İstanbul, Turkey',
        Icon: location
    },
    {
        name: 'Çalışma Saatleri',
        content:'Pazartesi-Cuma: 10:00 - 18:00',
        Icon: clock
    }
];

const FooterContact = () => {
  return (
    <div className='container'>
        <div className='flex flex-col md:flex-row justify-between px-5 md:px-9 space-y-12 md:space-y-0'>
            {
                Contacts.map((contact: any) => { 
                    const { Icon } = contact
                    return (
                 <div className='flex md:flex-row space-x-5 md:space-x-2'>
                    <span className=''>
                       {/* <img src={contact.icon} alt={contact.name} className='dark:fill-[#6c3c68]' /> */}
                       <Icon  className='text-black dark:text-white'/>
                    </span>
                   <div className='flex flex-col'>
                    <span className='font-poppins font-normal text-[18px] text-[#000000] dark:text-[#fff]'>{contact.name}</span>
                    <span className='font-poppins font-light text-[16px] text-[#000000] dark:text-[#fff]'>{contact.content}</span>
                   </div> 
                </div>
                )})
            }

        </div>
    </div>
  )
};

export default FooterContact
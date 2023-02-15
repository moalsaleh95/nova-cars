import React, { ReactNode } from 'react';
import phone from "../../assets/icons/phone.svg";
import email from "../../assets/icons/email.svg";
import location from "../../assets/icons/location.svg";
import clock from "../../assets/icons/clock.svg";

interface Contacts {
    name?: string;
    content?: string;
    icon?: ReactNode;
};

const Contacts: Contacts[] = [
    {
        name: 'Phone',
        content:'+44 781-824-4483',
        icon: phone
    },
    {
        name: 'Email',
        content: 'info@novacar.com',
        icon: email
    },
    {
        name: 'Location',
        content: 'Merkez Mh. Şişli - İstanbul, Turkey',
        icon: location
    },
    {
        name: 'Opening Hours',
        content:'Mo-Fr: 10 - 6',
        icon: clock
    }
];

const FooterContact = () => {
  return (
    <div className='container'>
        <div className='flex flex-col md:flex-row justify-between px-5 md:px-9 space-y-12 md:space-y-0'>
            {
                Contacts.map((contact: any) => (
                 <div className='flex md:flex-row space-x-5 md:space-x-2'>
                    <span className=''>
                       <img src={contact.icon} alt={contact.name} className='dark:fill-[#6c3c68]' />
                    </span>
                   <div className='flex flex-col'>
                    <span className='font-poppins font-normal text-[18px] text-[#000000] dark:text-[#fff]'>{contact.name}</span>
                    <span className='font-poppins font-light text-[16px] text-[#000000] dark:text-[#fff]'>{contact.content}</span>
                   </div> 
                </div>
                ))
            }

        </div>
    </div>
  )
};

export default FooterContact
import React, { ReactNode, FC, ReactComponentElement } from 'react'


interface ContactInfoCardProps {
    title: string,
    subtitle: string,
    Icon: any
}


const ContactInfoCard: FC<ContactInfoCardProps> = ({title, subtitle, Icon}) => {
  return (
    <div className='py-[40px] xl:py-[57px] px-[50px] flex items-center space-x-5 bg-white rounded-[20px]'>
        <Icon className="w-[30px] lg:w-auto" />
        <div className='flex flex-col'>
            <span className='text-xl lg:text-2xl'>{title}</span>
            <span className='text-lg opacity-50'>{subtitle}</span>
        </div>
    </div>
  )
}

export default ContactInfoCard
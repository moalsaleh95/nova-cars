import React, { ReactNode, FC, ReactComponentElement } from 'react'


interface ContactInfoCardProps {
    title: string,
    subtitle: string,
    Icon: any
}


const ContactInfoCard: FC<ContactInfoCardProps> = ({title, subtitle, Icon}) => {
  return (
    <div className='py-[40px] xl:py-[57px] px-[50px] flex items-center space-x-5 bg-white dark:bg-[#0b0b0b] rounded-[20px]'>
        <Icon className="w-[30px] lg:w-auto dark:text-white" />
        <div className='flex flex-col'>
            <span className='text-xl lg:text-2xl dark:text-white'>{title}</span>
            <span className='text-lg opacity-50 dark:text-white'>{subtitle}</span>
        </div>
    </div>
  )
}

export default ContactInfoCard
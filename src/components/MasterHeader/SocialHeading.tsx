import React, { FC, ReactNode, useState } from 'react'
import logo from "../../assets/logo/logo.png";
import instagram from '../../assets/socials/instagram.svg';
import facebook from '../../assets/socials/facebook.svg';
import twitter from '../../assets/socials/twitter.svg';
import youtube from '../../assets/socials/youtube.svg';
import whatsapp from '../../assets/socials/whatsapp.svg';
import ButtonPrimary from '../../lib/Button/ButtonPrimary';
import { MainColor } from '../constants/colors';


interface SocialHeadingProps {

};

interface SocialIconsProps {
    name: string;
    icon: ReactNode;
};

export const SocialIcons: SocialIconsProps[] = [
    {
        name: 'Instagram',
        icon: instagram
    },
    {
        name: 'Facebook',
        icon: facebook
    },
    {
        name: 'Twitter',
        icon: twitter
    },
    {
        name: 'Youtube',
        icon: youtube
    },
    {
        name: 'Whatsapp',
        icon: whatsapp
    }
];

// TODO: on Mechanics or Detailing active, use ButtonPrimary
const SocialHeading: FC<SocialHeadingProps> = () => {

    return (
        <>
            <div className="container h-[70px] lg:flex bottom-0 w-full items-center min-h-[50px] bg-[#fff]">
                <div className='w-full flex justify-between my-4'>

                    <div className='flex items-end'>
                        <div className='flex items-center justify-center h-full'>
                            <span className='whitespace-nowrap mr-4 mt-5'>
                                <ButtonPrimary className={`w-full rounded-t-[10px] bg-[${MainColor}] h-[60px] text-[18px]`} >
                                  <span className='font-poppins font-normal text-[18px] text-[#ffffff] whitespace-nowrap mr-4'> Mechanics </span>
                                </ButtonPrimary>
                            </span>
                            <span className='font-poppins font-normal text-[18px] text-[#222222] whitespace-nowrap mr-4 mt-5'>
                                Detailing
                            </span>
                        </div>
                    </div>

                    <div className='flex justify-end items-center'>
                        <div className="flex justify-between space-x-4">
                            {
                               SocialIcons?.map((social: any) => (
                                 <section><img src={social.icon} /></section>
                               )) 
                            }
                            <section className='text-[#43AF77] text-[14px] font-medium flex items-center whitespace-nowrap'>+90 212 344 xx xx</section>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default SocialHeading;

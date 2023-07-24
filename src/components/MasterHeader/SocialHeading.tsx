import React, { FC, ReactNode } from 'react'
import { ReactComponent as Instagram } from '../../assets/socials/instagram-logo-black.svg';
import { ReactComponent as Facebook } from '../../assets/socials/facebook-logo-black.svg';
import { ReactComponent as Twitter } from '../../assets/socials/twitter-logo-black.svg';
import { ReactComponent as Youtube } from '../../assets/socials/youtube-logo-black.svg';
import { ReactComponent as LinkedIn } from '../../assets/socials/linkedin-logo-black.svg';
import { ReactComponent as Phone } from '../../assets/socials/phone.svg';
import ButtonPrimary from '../../lib/Button/ButtonPrimary';
import { MainColor } from '../constants/colors';



interface SocialHeadingProps {
    activeHeadingTab?: string;
    setActiveHeadingTab?: any;
    activeTabClassNames?: string;
    phoneNumberClassNames?: string;
};

interface SocialIconsProps {
    name: string;
    Icon: any;
};

export const SocialIcons: SocialIconsProps[] = [
    {
        name: 'Instagram',
        Icon: Instagram
    },
    {
        name: 'Facebook',
        Icon: Facebook
    },
    // {
    //     name: 'Twitter',
    //     Icon: Twitter
    // },
    {
        name: 'Youtube',
        Icon: Youtube
    },
    // {
    //     name: 'LinkedIN',
    //     Icon: LinkedIn
    // },
    {
        name: 'phone',
        Icon: Phone
    }
];

// TODO: on Mechanics or Detailing active, use ButtonPrimary
const SocialHeading: FC<SocialHeadingProps> = ({ activeHeadingTab, setActiveHeadingTab, activeTabClassNames, phoneNumberClassNames}) => {

    // active heading
    const ActiveHeading = ( heading: any ) => (
        <>
            <ButtonPrimary className={`w-full rounded-t-[10px] bg-[${MainColor}] h-[60px] text-[18px]`} >
                <span className='font-poppins font-normal text-[18px] text-[#ffffff] whitespace-nowrap mr-4'>
                    {heading}
                </span>
            </ButtonPrimary>
        </>
    );

    // inactive heading
    const InactiveHeading = ( heading: any ) => (
        <>
            <span 
              className='font-poppins font-normal text-[18px] text-[#222222] whitespace-nowrap mr-4 mt-5 cursor-pointer dark:text-[#fff]' 
              onClick={() => handleHeadingTab(heading)}
            >
                { heading }
            </span>
        </>
    );

    const handleHeadingTab = ( heading: string ) => {
        setActiveHeadingTab(heading?.toLowerCase());
    }; 

    return (
        <div className='w-full bg-white  dark:bg-[#0B0B0B]'>
            <div className="container h-[70px] lg:flex bottom-0 w-full items-center min-h-[50px] bg-[#fff] dark:bg-[#0B0B0B]">
                <div className='w-full flex justify-between my-4'>

                    <div className={`flex items-end ${activeTabClassNames}`}>
                        <div className='flex items-center justify-center h-full'>
                            {/* <span className='whitespace-nowrap mr-4 mt-5'>
                                { activeHeadingTab === 'mechanics' ? ActiveHeading('Mechanics') : InactiveHeading('Mechanics') }
                            </span> */}

                            <span className='mt-5'>
                                { activeHeadingTab === 'detailing' ? ActiveHeading('Detailing') : InactiveHeading('Detailing') }
                            </span>
                        </div>
                    </div>

                    <div className='flex justify-end items-center'>
                        <div className="flex justify-between items-center space-x-[40px]">
                            {
                               SocialIcons?.map((social: any) => {
                                const {Icon} = social
                                return (
                                 <section >
                                    {/* <img src={social.icon} className='cursor-pointer' /> */}
                                    <Icon className="text-black dark:text-white cursor-pointer" />
                                </section>
                               )}) 
                            }
                            <section className={`text-black dark:text-white text-[14px] font-medium flex items-center whitespace-nowrap ${phoneNumberClassNames}`}>+90 541 335 37 13</section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SocialHeading;

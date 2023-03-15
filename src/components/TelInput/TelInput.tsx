import React, { FC, useEffect } from 'react';
import { useState } from 'react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

interface TooglePropsType {
    onInputChange?: any;
};

interface TelInputProps {
    onInputChange?: any;
    errors?: any;
    inputName?: string;
    values?: any;
};

const TelInput: FC<TelInputProps> = ({ onInputChange, inputName, values }) => {


    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        localStorage.theme === 'light' ? setIsDark(false) : setIsDark(true);
    }, [])


    const input = document.querySelector('react-international-phone-input-container .react-international-phone-input') as HTMLElement
    const button = document.querySelector('.react-international-phone-input-container .react-international-phone-country-selector-button');
    const dropdown = document.querySelector('.react-international-phone-country-selector-dropdown');
    const dropdown_hover = document.querySelector('.react-international-phone-country-selector-dropdown__list-item:hover');

    if (isDark && input && input?.style) {
        input.style.cssText += 'background:black!important;color:white!important'
     } 

    const [phone, setPhone] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    const onChange = (e: any) => {
        setPhone(e)
        console.log('phone :', phone)
        onInputChange && onInputChange(e);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    const onBlur = () => {
        setIsFocused(false);
    };

    useEffect(() => {
        console.log('focus is: ', isFocused);
    }, [isFocused])

    return (
        <div className={`dark:bg-[#0b0b0b] rounded-2xl flex justify-start items-center relative w-full border-[#DDDDDD] dark:border-[#222222] border h-[50px] lg:h-[70px] cursor-pointer`} >
            <div className='relative flex items-center' style={{ padding: "0px 12px 12px 20px" }}>
                <label className={`${isFocused || phone ? "-translate-y-[10px] lg:translate-y-[-12px] text-sm" : "text-lg"} ${!isFocused || phone ? "transition ease-out" : ""}  text-[#0D2C3B] absolute top-[10px] left-3 transition-all z-[9] font-medium  px-2 opacity-50 dark:text-white cursor-pointer`}>
                    Phone Number
                </label>
                <div
                    onFocus={() => onFocus()}
                    onBlur={() => onBlur()}
                    className={`${isFocused || phone ? "opacity-100" : "opacity-0"} cursor-pointer translate-y-4 z-[11] transition ease-out`}
                >
                    <PhoneInput
                        defaultCountry="tr"
                        value={phone}
                        onChange={(e) => onChange(e)}
                    />
                </div>
            </div>
        </div>
    )
}

export default TelInput;
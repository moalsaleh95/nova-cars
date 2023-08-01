import React, { FC, useEffect } from 'react';
import { useState } from 'react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

interface TooglePropsType {
    onInputChange?: any;
};

interface TelInputProps {
    onInputChange?: any;
    errors?: Record<string, string>;
    inputName?: string;
    values?: any;
};

const TelInput: FC<TelInputProps> = ({ onInputChange, inputName, values, errors }) => {

    const [isDark, setIsDark] = useState(true);

    const input = document.querySelector('.react-international-phone-input-container .react-international-phone-input') as HTMLElement
    const button = document.querySelector('.react-international-phone-input-container .react-international-phone-country-selector-button') as HTMLElement;
    const dropdown = document.querySelector('.react-international-phone-country-selector-dropdown') as HTMLElement;
    const dropdown_hover = document.querySelectorAll('.react-international-phone-country-selector-dropdown__list-item') as any as Array<HTMLElement>;

    useEffect(() => {
        localStorage.theme === 'light' ? setIsDark(false) : setIsDark(true);
        // console.log('isDark: ', isDark);
        // console.log('input: ', input);
        // console.log('button: ', button);
        // console.log('dropdown: ', dropdown);
        // console.log('dropdown_hover: ', dropdown_hover);


        if (isDark && input && button && dropdown) {
            input.style.cssText += 'background:#0b0b0b!important;color:white!important';
            button.style.cssText += 'background:#0b0b0b !important;';
            dropdown.style.cssText += 'border: none !important;background-color: #000 !important;color: #fff !important;'
            // dropdown_hover.forEach(e => e.style.cssText += 'color: #000 !important;')
            dropdown_hover?.forEach(e=> e.addEventListener('mouseover', () => e.style.cssText += 'color: #000 !important;'))
            dropdown_hover?.forEach(e=> e.addEventListener('mouseleave', () => e.style.cssText += 'color: #fff !important;'))
        }
    }, [isDark, input, button, dropdown, dropdown_hover])


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


    return (
        <div className={`dark:bg-[#0b0b0b] rounded-2xl flex justify-start items-center relative w-full border-[#DDDDDD] dark:border-[#222222] border h-[50px] lg:h-[70px] cursor-pointer`} >
            <div className='relative flex items-center' style={{ padding: "0px 12px 12px 20px" }}>
                <label className={`${isFocused || phone ? "-translate-y-[10px] lg:translate-y-[-12px] text-sm" : "text-lg"} ${!isFocused || phone ? "transition ease-out" : ""}  text-[#0D2C3B] absolute top-[10px] left-3 transition-all z-[9] font-medium  px-2 opacity-50 dark:text-white cursor-pointer`}>
                    Telefon Numaranız
                </label>
                {errors && errors?.[inputName as string]?.length > 0 && <span className='absolute right-[-13px] top-[-20px] bg-red-600 rounded-lg text-white p-2'>{errors && errors[inputName as string]}</span>}

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
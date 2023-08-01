import React, { FC, InputHTMLAttributes, useEffect, useState } from 'react'

interface InfoProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  inputType: string;
  name?: string;
  onChange?: any;
  value?: any;
  wrapperClassName?: string;
  errors?: Record<string, string>
};

const AnimatedInput: FC<InfoProps> = (props) => {

  const { label, inputType, name, onChange, value, wrapperClassName, errors } = props

  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);


  const onInputChange = (e: any) => {
    setInputValue(e.target.value);
    onChange && onChange(e)
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    setIsFocused(false);
  };



  return (
    <div className={`${wrapperClassName} relative w-full flex items-center rounded-[10px] border-[#DDDDDD] dark:border-[#222222] border 
                    ${inputType === 'textArea' ? 'h-[110px] ' : ' h-[50px] lg:h-[70px] '}
    `}>

      <label className={`absolute top-0 left-3 transition-all  font-medium  px-2 opacity-50 dark:text-white 
                        ${isFocused || value ? "translate-y-[10px] text-sm z-[3]" : "translate-y-[10px] lg:translate-y-5 text-lg text-[#0D2C3B]   z-[1]"}`}>
        {label}
      </label>

      {errors && errors?.[name as string]?.length > 0 && <span className='absolute right-[5px] top-[-20px] bg-red-600 rounded-lg text-white p-2 z-10'>{errors && errors[name as string]}</span>}


      {
        inputType === 'textArea'
          ?
          <textarea
            value={value ?? inputValue}
            onChange={(event) => onInputChange(event)}
            onFocus={() => onFocus()}
            onBlur={() => onBlur()}
            name={name}
            className={`border-none w-full h-full cursor-pointer transition ease-out bg-transparent focus:ring-0 relative z-[2] resize-none pl-5 pt-5 text-lg dark:text-white`}
            cols={30}
            rows={10}

          />
          :
          <input
            value={value ?? inputValue}
            onChange={(event) => onInputChange(event)}
            onFocus={() => onFocus()}
            onBlur={() => onBlur()}
            type={inputType}
            name={name}
            className={`border-none w-full h-full cursor-pointer transition ease-out bg-transparent focus:ring-0 relative z-[2] pt-5 pl-5 text-lg dark:text-white`
            }
            
          />
      }
    </div>
  )
}

export default AnimatedInput
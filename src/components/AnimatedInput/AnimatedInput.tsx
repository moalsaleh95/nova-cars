import React, { FC, InputHTMLAttributes, useEffect, useState } from 'react'

interface InfoProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  inputType: string;
  name?: string;
  onChange?: any;
  value?: any;
  wrapperClassName?: string;
};

const AnimatedInput: FC<InfoProps> = (props) => {

  const { label, inputType, name, onChange, value, wrapperClassName } = props

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
    <div className={`${wrapperClassName} relative w-full flex items-center rounded-[10px] border-[#DDDDDD] border 
                    ${inputType === 'textArea' ? 'h-[120px]' : ' h-[50px] lg:h-[70px] '}
    `}>

      <label className={`absolute top-0 left-3 transition-all  font-medium  px-2 opacity-50
                        ${isFocused || value ? "translate-y-[10px] text-sm z-[3]" : "translate-y-4 lg:translate-y-5 text-lg text-[#0D2C3B] z-[1]"}`}>
        {label}
      </label>
      {
        inputType === 'textArea'
          ?
          <textarea
            value={value ?? inputValue}
            onChange={(event) => onInputChange(event)}
            onFocus={() => onFocus()}
            onBlur={() => onBlur()}
            name={name}
            className={`border-none w-full h-full cursor-pointer transition ease-out bg-transparent focus:ring-0 relative z-[2] resize-none pl-5 pt-5 text-lg`}
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
            className={`border-none w-full h-full cursor-pointer transition ease-out bg-transparent focus:ring-0 relative z-[2] pt-5 pl-5 text-lg`
            }
            
          />
      }
    </div>
  )
}

export default AnimatedInput
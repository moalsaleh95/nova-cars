import React, { FC, useEffect, useState } from 'react'
import AnimatedInput from '../AnimatedInput/AnimatedInput'

const ContactForm: FC = () => {
    const [ values, setValues ] = useState({
      nameSurname: null,
      email: null,
      phoneNo: null,
      message: null

    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, name?: string) => {
      const value = e?.target?.value ?? e;
      const inputName = e?.target?.name ?? name;
      setValues((prevState) => ({...prevState, [inputName] : value }))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      // console.log(values)
    }
  

    useEffect(() => {
      // console.log('the form values are : ', values)
    } ,
    [values])


  return (
    <div className='w-full lg:w-[450px] rounded-[30px] py-[37px] px-[30px] bg-white' style={{"height":"min-content"}}>
        <span className='text-2xl font-normal'>
            Send a Message
        </span>
          <form className='w-full space-y-[30px] mt-6' onSubmit={ handleSubmit } >
              <AnimatedInput value={values.nameSurname} inputType='text' label='Name, Surname' name='nameSurname' onChange={(e: any) => handleChange(e)}/>
              <AnimatedInput value={values.phoneNo} inputType='text' label='Phone Number' name='phoneNo' onChange={(e: any) => handleChange(e, 'phoneNo')} />
              <AnimatedInput value={values.email} inputType='text' label='E-Mail Address' name='email' onChange={(e: any) => handleChange(e)}/>
              {/* <AnimatedInput value={values.phoneNo} inputType='text' label='Phone Number' name='phoneNo' onChange={(e: any) => handleChange(e)}/> */}
              <AnimatedInput value={values.message} inputType='textArea' label='Your Message' name='message' onChange={(e: any) => handleChange(e)} wrapperClassName='h-[150px]'/>
              <button className='w-full bg-[#D81212] flex justify-center items-center px-[30px] py-3 lg:py-[18px] text-white text-base rounded-[10px]'> Send Form </button>
          </form>
    </div>
  )
}

export default ContactForm
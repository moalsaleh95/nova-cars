import React, { FC, useEffect, useState } from 'react'
import AnimatedInput from '../AnimatedInput/AnimatedInput'
import TelInput from '../TelInput/TelInput'
import emailjs from '@emailjs/browser'
import { useNavigate } from 'react-router-dom'
 

const ContactForm: FC = () => {
  const [values, setValues] = useState({
    nameSurname: null,
    email: null,
    phoneNo: null,
    message: null

  })
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, name?: string) => {
    const value = e?.target?.value ?? e;
    const inputName = e?.target?.name ?? name;
    setValues((prevState) => ({ ...prevState, [inputName]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    console.log(values)
    emailjs.init(process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY as string);
    emailjs.send(process.env.REACT_APP_EMAIL_JS_SERVICE_ID as string,"template_y596dpw",{
      nameSurname: values.nameSurname,
      admin: "Nova Car Care",
      message: values.message,
      email: values.email,
      phoneNo: values.phoneNo
      }).then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        setIsLoading(false)
        navigate('/thank-you')

     }, function(error) {
        console.log('FAILED...', error);
        alert(`an error occured please try again later.`)
        setIsLoading(false)
     });
  }


  useEffect(() => {
    // console.log('the form values are : ', values)
    
  },
    [values])


  return (
    <div className='w-full xl:w-[450px] rounded-[30px] pt-[37px] pb-[30px] px-[30px] bg-white dark:bg-[#0b0b0b]' style={{"height":"min-content"}}>
        <span className='text-2xl font-normal dark:text-white'>
           Mesaj Gönderin
        </span>
          <form className='w-full space-y-[30px] md:space-y-0 2xl:space-y-[30px] md:gap-4 2xl:gap-0 mt-6 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-1' onSubmit={ handleSubmit } >
              <AnimatedInput value={values.nameSurname} inputType='text' label='İsim, Soyadı' name='nameSurname' onChange={(e: any) => handleChange(e)}/>
              <TelInput onInputChange={(e: any) => handleChange(e, 'phoneNo')} inputName='phoneNo' values={values} />
              <AnimatedInput value={values.email} inputType='text' label='E-Posta Adresi ' name='email' onChange={(e: any) => handleChange(e)}/>
              {/* <AnimatedInput value={values.phoneNo} inputType='text' label='Phone Number' name='phoneNo' onChange={(e: any) => handleChange(e)}/> */}
              <AnimatedInput value={values.message} inputType='textArea' label='Mesajınız' name='message' onChange={(e: any) => handleChange(e)} wrapperClassName='h-[150px] md:col-span-3 xl:col-span-1'/>
              <button id="send-message-button" className='w-full bg-[#D81212] flex justify-center items-center px-[30px] py-3 lg:py-[18px] text-white text-base rounded-[10px] md:col-span-3 xl:col-span-1' disabled={isLoading}> 
              
               Mesajı  Gönderin
               
              </button>
          </form>
    </div>
  )
}

export default ContactForm
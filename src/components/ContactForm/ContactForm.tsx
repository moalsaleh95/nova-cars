import React, { FC, useEffect, useState } from 'react'
import AnimatedInput from '../AnimatedInput/AnimatedInput'
import TelInput from '../TelInput/TelInput'
import emailjs from '@emailjs/browser'
import { useNavigate } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import useValidate from '../../lib/helpers/Validate'
import Validate from '../../lib/helpers/Validate'
import MoonLoader from 'react-spinners/MoonLoader'

const ContactForm: FC = () => {
  const [values, setValues] = useState({
    nameSurname: null,
    email: null,
    phoneNo: null,
    message: null

  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [ShouldRunValidation, setShouldRunValidation ] = useState(false)

  const navigate = useNavigate()


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    console.log(values)
    setShouldRunValidation(true)
    // check for errors
    setErrors(Validate(values, 'contactForm'))
    
  }

  const sendContactEmail = () => {
    emailjs.init(process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY as string);
    emailjs.send(process.env.REACT_APP_EMAIL_JS_SERVICE_ID as string,"template_y596dpw",{
      nameSurname: values.nameSurname,
      admin: "Nova Car Care",
      message: values.message,
      email: values.email,
      phoneNo: values.phoneNo
      }).then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        setIsSubmitting(false)
        navigate('/thank-you')

     }, function(error) {
        console.log('FAILED...', error);
        alert(`an error occured please try again later.`)
        setIsSubmitting(false)
  })
}

  useEffect(() => {
    // because of the asynchronous nature of the setState in react here we seubmit the values :(
    // console.log('errors are: ', errors)
    if(Object.keys(errors).length > 0){
      setIsSubmitting(false)
      return
    }
    if(Object.keys(errors).length === 0 && isSubmitting) {
      sendContactEmail()
    }
    // setIsSubmitting(false)
  }, [errors, isSubmitting])
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, name?: string) => {
    const value = e?.target?.value ?? e;
    const inputName = e?.target?.name ?? name;
    setValues((prevState) => ({ ...prevState, [inputName]: value }))
    if(ShouldRunValidation){
      setErrors(Validate(values, 'contactForm'))

    }
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
              <AnimatedInput value={values.nameSurname} inputType='text' label='İsim, Soyadı' name='nameSurname' onChange={(e: any) => handleChange(e)} errors={errors}/>
              <TelInput onInputChange={(e: any) => handleChange(e, 'phoneNo')} inputName='phoneNo' values={values} errors={errors}/>
              <AnimatedInput value={values.email} inputType='text' label='E-Posta Adresi ' name='email' onChange={(e: any) => handleChange(e)} errors={errors}/>
              {/* <AnimatedInput value={values.phoneNo} inputType='text' label='Phone Number' name='phoneNo' onChange={(e: any) => handleChange(e)}/> */}
              <AnimatedInput value={values.message} inputType='textArea' label='Mesajınız' name='message' onChange={(e: any) => handleChange(e)} wrapperClassName='h-[150px] md:col-span-3 xl:col-span-1' errors={errors}/>
              <button id="send-message-button" className={`w-full bg-[#D81212] flex justify-center items-center px-[30px] py-3 lg:py-[18px] text-white text-base rounded-[10px] md:col-span-3 xl:col-span-1 ${isSubmitting && 'opacity-70'}`} disabled={isSubmitting}> 
              {
                isSubmitting && <MoonLoader size={20} color="#fff" className='mr-2'/>
              }
               Mesajı  Gönderin
               
              </button>
          </form>
    </div>
  )
}

export default ContactForm
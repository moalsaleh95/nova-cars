import React from 'react'
import ContactForm from '../../components/ContactForm/ContactForm'
import Map from '../../components/Map/Map'
import ContactInfoCards from './ContactInfoCards'
import PageTitleBar from './PageTitleBar'

const Contact = () => {
  return (
    <div className='min-h-screen'>
        <PageTitleBar />
        <ContactInfoCards />
        <div className='container grid grid-cols-3'>
          <Map wrapperClassNames='col-span-2'/>
          <ContactForm />
        </div>
    </div>
  )
}

export default Contact
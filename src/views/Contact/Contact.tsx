import React from 'react'
import ContactInfoCards from './ContactInfoCards'
import PageTitleBar from './PageTitleBar'

const Contact = () => {
  return (
    <div className='min-h-screen'>
        <PageTitleBar />
        <ContactInfoCards />
    </div>
  )
}

export default Contact
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { tabsData } from '../../lib'

const ServicesGrid = () => {

    const navigate = useNavigate()
    
    const handleServiceSelect = (e: string) => {
        localStorage.setItem('activeTab', `${Number(e) - 1 }` )
        navigate('/#services-tabs')
    }

  return (
    <div className='w-full grid grid-cols-2 md:grid-cols-4 justify-between gap-6 mg:gap-8 lg:gap-28 bg-[#0B0B0B] rounded-2xl p-4 lg:p-14'>
    {
        tabsData.map(tab => {
            const {Icon, id, name} = tab
            return (
                <HashLink smooth to="/#services-tabs">
                    <div className='grid justify-items-center cursor-pointer' key={id} onClick={() => handleServiceSelect(id)}>
                        {/* <img className='h-10 mb-4' src={Icon as unknown as string} alt="logo_1" /> */}
                        <Icon />
                        <p className='text-center'> {name} </p>
                    </div>

                </HashLink>
                )
        })
    }</div>
  )
}

export default ServicesGrid
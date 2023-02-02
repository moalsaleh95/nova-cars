import { Transition } from '@headlessui/react'
import React, { FC, useState } from 'react'
import { ReactComponent as Hamburger } from '../../assets/icons/Hamburger.svg'


const MobileMenu: FC = () => {
    const [ isMenuOpen, setIsMenuOpen ] = useState<boolean>(false)


    const handleClick = () => {
        setIsMenuOpen(prevState => !prevState)
    }
 


  return (
    <div>
        <Hamburger onClick={handleClick} />
        <Transition
        show={isMenuOpen}
        enter="transition-opacity transition-[transform_,_opacity] duration-500"
        enterFrom="opacity-50 -translate-x-[100%]"
        enterTo="opacity-100 translate-x-0"
        leave="transition-opacity duration-500 transition-[transform_,_opacity]"
        leaveFrom="opacity-100 translate-x-0"
        leaveTo="opacity-0 -translate-x-[100%]"
        className='absolute top-0 left-0 h-[calc(100%)] w-2/3 min-w-[250px] min-w- border-2 border-orange-400  z-[100] bg-white'
        >
            <div className=''>

            </div>
        </Transition>
        
    </div>
  )
}

export default MobileMenu
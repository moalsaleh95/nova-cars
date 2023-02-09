import { Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/20/solid'
import React, { FC, useEffect, useRef, useState } from 'react'
import { ReactComponent as Hamburger } from '../../assets/icons/Hamburger.svg'
import { NAVIGATION_MENU } from '../constants/navigation'

const MobileMenu: FC = () => {
    const [ isMenuOpen, setIsMenuOpen ] = useState<boolean>(false)
    const drawerRef = useRef<any>()


    const handleClick = () => {
        setIsMenuOpen(prevState => !prevState)
    }

      
  const eventClickOutsideDrawer = (event: MouseEvent) => {
    if (!drawerRef.current) return;

    // click inside
    if (drawerRef.current.contains(event.target as Node)) {
      return;
    }

    // click outside
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (eventClickOutsideDrawer) {
      document.removeEventListener("click", eventClickOutsideDrawer);
    }
    document.addEventListener("click", eventClickOutsideDrawer);
    return () => {
      document.removeEventListener("click", eventClickOutsideDrawer);
    };
  }, []);

  useEffect(() => { 
    if (typeof window != 'undefined' && window.document) {
      if(isMenuOpen) {

        // document.body.style.height = '100vh'
        // document.body.style.overflowY = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.width = '100vw'
        document.body.style.top = `-${window.scrollY}px`;

      }
      if(!isMenuOpen){
        // document.body.style.height = 'unset'
          // document.body.style.overflowY = 'unset';
          document.body.style.position = '';
          document.body.style.top = '';
          document.body.style.width = 'auto'
        }
    }
  } ,[isMenuOpen]) 


  return (
    <div>
        <Hamburger onClick={handleClick} />
        <Transition
        show={isMenuOpen}
        enter="transition-opacity transition-[transform_,_opacity] duration-500"
        enterFrom="opacity-50 translate-x-[100%]"
        enterTo="opacity-100 translate-x-0"
        leave="transition-opacity duration-500 transition-[transform_,_opacity]"
        leaveFrom="opacity-100 translate-x-0"
        leaveTo="opacity-0 translate-x-[100%]"
        className='absolute top-0 right-0 h-screen w-2/3 min-w-[250px] z-[100] bg-white'
        ref={drawerRef}

        >
            <div className='w-full h-full mobileMenuShadow' ref={drawerRef} >   
                <div className='w-full border-b h-10'>    
                    <XMarkIcon className='h-9' onClick={() => {setIsMenuOpen(false)}}/>
                </div>    
                <div className='pt-8 px-2'>
                    <ul className='space-y-4'>
                        {
                            NAVIGATION_MENU.map(menuItem => {
                                const {href, name, id, targetBlank} = menuItem
                                return (
                                    <li key={id}>
                                        <a href={href} target={targetBlank ? "_blank" : ""}>
                                            {name}
                                        </a> 
                                    </li>
                                )
                            })
                        }

                    </ul>
                </div>        
            </div>
        </Transition>
        
    </div>
  )
}

export default MobileMenu
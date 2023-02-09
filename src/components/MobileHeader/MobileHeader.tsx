import React, {FC} from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo/logoFooter.svg'
import MobileMenu from '../MobileMenu/MobileMenu'

const MobileHeader: FC = () => {
  return (
    <div className='w-full py-6 px-5 bg-white'>
        <div className='flex justify-between items-center'>
          <Link
          to="/"
          className='inline-block'
        
        >
            <img src={Logo} className='w-[156px] h-[53px]' />
         </Link>
            <MobileMenu />
        </div>

    </div>
  )
}

export default MobileHeader
import React, {FC} from 'react'
import { Link } from 'react-router-dom'
import MechanicsLogo from "../../assets/logo/MechanicsLogo.svg";
import MechanicsLogoFooter from "../../assets/logo/MechanicsLogoFooter.svg";
import MobileMenu from '../MobileMenu/MobileMenu'

const MobileHeader: FC = () => {
  return (
    <div className='w-full py-6 px-5 bg-white dark:bg-[black]'>
        <div className='flex justify-between items-center'>
          <Link
          to="/"
          className='inline-block'
        
        >
            <img src={localStorage.theme === 'dark' ?  MechanicsLogo: MechanicsLogoFooter} alt='logo' className='w-[156px] h-[53px]' />
         </Link>
            <MobileMenu />
        </div>

    </div>
  )
}

export default MobileHeader
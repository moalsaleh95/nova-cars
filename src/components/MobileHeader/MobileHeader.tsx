import React, {FC} from 'react'
import { Link } from 'react-router-dom'
import MechanicsLogo from "../../assets/logo/MechanicsLogo.svg";
import MechanicsLogoFooter from "../../assets/logo/MechanicsLogoFooter.svg";
import MobileMenu from '../MobileMenu/MobileMenu'

interface MobileHeader {
  isHeaderTransparent?: boolean
}


const MobileHeader: FC<MobileHeader> = (props) => {
  const { isHeaderTransparent } = props
  return (
    <div className={`w-full py-6 px-5 bg-white dark:bg-[black]  ${isHeaderTransparent ? 'bg-opacity-75 backdrop-saturate-150 backdrop-blur-sm border-b-2 border-blak' : ''}`}>
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
import React, {FC} from 'react'
import Logo from '../../assets/logo/logoFooter.svg'
import MobileMenu from '../MobileMenu/MobileMenu'

const MobileHeader: FC = () => {
  return (
    <div className='w-full py-6 px-5'>
        <div className='flex justify-between items-center'>
            <img src={Logo} className='w-[156px] h-[53px]'/>
            <MobileMenu />
        </div>
    </div>
  )
}

export default MobileHeader
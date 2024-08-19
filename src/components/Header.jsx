import React from 'react'
import { useHref } from 'react-router-dom'

const Header = () => {

    const ref = useHref();
 

  return (
    <div className='headerWrapper'>
       <span>{ref.split('/')[1].length > 0 ? 'User profile':'DashBoard'}</span>
    </div>
  )
}

export default Header
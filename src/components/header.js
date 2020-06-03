import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'

import Avatar from '../images/avatar.png'
import MobileToggle from './mobileMenu/toggleMenu'

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    setMenuOpened( menuOpened => !menuOpened);
    window.addEventListener('scroll', setMenuOpened);
    return () => window.removeEventListener('scroll', setMenuOpened);
  }, []);
  
  return (
    <React.Fragment>
      <Link>
        <img src={Avatar} alt="Adin Jesuha"/>
        <span>Adin Jesuha.</span>
      </Link>
      <MobileToggle 
        menuOpened={menuOpened} 
        setMenuOpened={setMenuOpened}
      />
    </React.Fragment>
  )
}

export default Header
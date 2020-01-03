import React, { useState, useEffect } from 'react'
import Headroom from 'react-headroom'
import styled from 'styled-components'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import { device } from '../../utils/brakpoints'
import Logo from '../logo'
import Toggle from '../toggle'
import MobileToggle from '../mobileMenu/toggleMenu'


// if (typeof window !== 'undefined') {
//   // Make scroll behavior of internal links smooth
//   // eslint-disable-next-line global-require
//   require('smooth-scroll')('a[href*="#"]');
// }

const HeaderContainer = styled(Headroom)`
  .headroom{
    position: fixed !important;
    z-index: 100 !important;
  }
  .headroom--pinned{
    background: ${({theme}) => theme.body};
  }
`;

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1280px;
  padding: 2.5rem 2rem;
  overflow: hidden;
  .right-nav{
    display: flex;
    justify-content: space-between;
  }
`

const StyledAnchorLink = styled(AnchorLink)`
  transition: opacity 0.3s cubic-bezier(.215,.61,.355,1);
  &:hover{
    opacity: 0.5;
  }
`

const ResponsiveMenu = styled.div`
  background: ${({theme}) => theme.body};
  padding-top: 10px;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  z-index: 999;
  transform: ${({showMenu}) => showMenu ? 'translateX(100%)' : 'translateX(0%)'};
  transition: all .4s cubic-bezier(.215,.61,.355,1);
  > * {
    padding: 0.8rem;
    font-size: 3.2rem;
    line-height: 1.05;;
    opacity: ${({showMenu}) => showMenu ? 0 : 1};
    margin: 2rem 0;
    transition: all .6s ease;
    transition-delay: 0;
  }
  @media ${device.tablet}{
    background: transparent;
    position: initial;
    flex-direction: initial;
    transform: translateX(0%);
    height: auto;
    width: auto;
    padding-top: 0;
    transition: none !important;
    > * {
      opacity: 1;
      font-size: 2.2rem;
      margin: 0 2rem;
    }
  }
`




const Header = ({isDark, toggle}) => {
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    setMenuOpened( menuOpened => !menuOpened);
    window.addEventListener('scroll', setMenuOpened);
    return () => window.removeEventListener('scroll', setMenuOpened);
  }, []);
  
  return (
    <>
      <HeaderContainer>
        <Navbar>
          <Logo />
          <nav className="right-nav">
            <ResponsiveMenu showMenu={menuOpened}>
              <StyledAnchorLink offset='100' href="#about">Sobre mí</StyledAnchorLink>
              <StyledAnchorLink offset='100' href="#works">Trabajos</StyledAnchorLink>
              <StyledAnchorLink offset='100' href="#contact">Contáctame</StyledAnchorLink>
            </ResponsiveMenu>
            <Toggle 
              isDark={isDark} 
              toggle={toggle}
            />
            <MobileToggle 
              menuOpened={menuOpened} 
              setMenuOpened={setMenuOpened}
            />
          </nav>
        </Navbar>
      </HeaderContainer>
    </>
  )
}

export default Header
import React, { useState, useEffect } from 'react'
import {Link} from 'gatsby'
import Headroom from 'react-headroom'
import styled from 'styled-components'
import AnchorLink from 'react-anchor-link-smooth-scroll'

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
`

const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const ResponsiveMenu = styled.div`
  display: flex;
  align-items: center;
  > * {
    font-size: 2.2rem;
    margin: 0 2rem;
  }
  @media(max-width: 767px){
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
    transform: ${({showMenu}) => showMenu ? 'translateX(100%)' : 'translateX(0%)'};
    transition: all .4s cubic-bezier(.215,.61,.355,1);
    z-index: 999;
    > * {
      padding: 0.8rem;
      font-size: 3.2rem;
      line-height: 1.05;;
      opacity: ${({showMenu}) => showMenu ? 0 : 1};
      margin: 2rem 0;
      transition: all .6s ease;
      transition-delay: 0;
    }
  }
`

const StyledAnchorLink = styled(AnchorLink)`
  transition: opacity 0.3s cubic-bezier(.215,.61,.355,1);
  &:hover{
    opacity: 0.5;
  }
`

const BackCTA = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  a{
    padding-left: 10px;
  }
`

const Arrow = styled.div`
  background-color: ${({theme}) => theme.title};
  height: 2px;
  width: 20px;
  margin: 0 auto;
  position: relative;
  transform: rotate(-180deg);
  border-radius: 2px;
  &:before,
  &:after {
    content: "";
    background-color: ${({theme}) => theme.title};
    position: absolute;
    height: 2px;
    width: 10px;
    border-radius: 2px;
  }
  &:before {
    right: -2px;
    bottom: -3px;
    transform: rotate(-45deg);
  }
  &:after {
    right: -2px;
    top: -3px;
    transform: rotate(45deg);
  }
`

const Header = ({isDark, toggle, isOnePage}) => {
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
          <Link to="/">
            <Logo />
          </Link>
          <MenuWrapper>
          {isOnePage ? (
            <React.Fragment>
              <ResponsiveMenu showMenu={menuOpened}>
                <StyledAnchorLink offset='10' href="#about">Sobre mí</StyledAnchorLink>
                <StyledAnchorLink offset='10' href="#tech">Stack</StyledAnchorLink>
                <StyledAnchorLink offset='10' href="#works">Trabajos</StyledAnchorLink>
                <StyledAnchorLink offset='10' href="#contact">Contáctame</StyledAnchorLink>
              </ResponsiveMenu>
              <Toggle 
                isDark={isDark} 
                toggle={toggle}
              />
              <MobileToggle 
                menuOpened={menuOpened} 
                setMenuOpened={setMenuOpened}
              />
            </React.Fragment>
          ) : (
            <BackCTA>
              <Arrow />
              <Link to="/">Inicio</Link>
            </BackCTA>
          )}
          </MenuWrapper>
        </Navbar>
      </HeaderContainer>
    </>
  )
}

export default Header
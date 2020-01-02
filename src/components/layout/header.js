import React from 'react'
import { Link } from 'gatsby'
import Headroom from 'react-headroom'
import styled from 'styled-components'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import Logo from '../logo'
import Toggle from '../toggle'
import { device } from '../../utils/brakpoints'

// if (typeof window !== 'undefined') {
//   // Make scroll behavior of internal links smooth
//   // eslint-disable-next-line global-require
//   require('smooth-scroll')('a[href*="#"]');
// }

const HeaderContainer = styled(Headroom)`
  z-index: 100;
  .headroom--pinned{
    background: ${({theme}) => theme.body};
  }
`;

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 2.5rem 2rem;

  .right-nav{
    display: none;
    align-items: center;
    * {
      margin: 0 1.5rem;
      padding: 0.8rem;
      &:last-child{
        margin-right: 0;
      }
    }
    @media ${device.tablet}{
      display: flex;
    }
  }
`

const StyledAnchorLink = styled(AnchorLink)`
  transition: opacity 0.3s cubic-bezier(.215,.61,.355,1);
  &:hover{
    opacity: 0.5;
  }
`

const NavLink = styled(Link)`
  position: relative;
  &:after{
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    right: 100%;
    background-color:${({isdark}) => isdark ? 'var(--white)' : 'var(--dark-700)'};
    transition: all .4s cubic-bezier(.215,.61,.355,1);
  }
  &:hover::after{
    right: 0;
  }
  &.active::after{
    right: 0;
  }
`


const Header = ({fill, isDark, toggle}) => {
  return (
    <HeaderContainer>
      <Navbar>
        <Logo fill={fill}/>
        <nav className="right-nav">
          <StyledAnchorLink offset='100' href="#about">Sobre mí</StyledAnchorLink>
          <StyledAnchorLink offset='100' href="#works">Trabajos</StyledAnchorLink>
          <NavLink 
            to="/contact"
            isdark={isDark}
            activeClassName="active"
          >
            Contáctame
          </NavLink>
          <Toggle isDark={isDark} toggle={toggle}/>
        </nav>
      </Navbar>
    </HeaderContainer>
  )
}

export default Header
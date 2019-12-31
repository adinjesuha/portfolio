import React from 'react'
import { Link } from 'gatsby'
import Headroom from 'react-headroom'
import styled from 'styled-components'

import Logo from '../logo'

const HeaderContainer = styled(Headroom)`
  .headroom--pinned{
    background: ${({themeBg}) => themeBg};
  }
`;

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 2.5rem 2rem;
  z-index: 100;
  .right-nav{
    display: flex;
    align-items: center;
    > * {
      padding: 0.8rem;
    }
  }
`


const Header = ({fill, themeBg}) => {
  return (
    <HeaderContainer themeBg={themeBg}>
      <Navbar>
        <Logo fill={fill}/>
        <nav className="right-nav">
          <Link>Sobre mí</Link>
          <Link>Trabajos</Link>
          <Link>Tecnologías</Link>
          <Link>Contáctame</Link>
        </nav>
      </Navbar>
    </HeaderContainer>
  )
}

export default Header
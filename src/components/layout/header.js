import React from 'react'
import styled from 'styled-components'
import Headroom from 'react-headroom'
import Fade from 'react-reveal/Fade';

const HeaderContainer = styled(Headroom)`
  .headroom--pinned {
    background: ${props => props.theme.colors.primaryDark};
  }
  position: absolute;
  width: 100%;
`;


const Header = () => {
  return (
    <HeaderContainer>
      <Fade top>
        
      </Fade>
    </HeaderContainer>
  )
}

export default Header
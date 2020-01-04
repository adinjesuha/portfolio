import React from 'react'
import styled from 'styled-components'

import { device } from '../../utils/brakpoints'

const Wrapper = styled.footer`
  text-align: center;
  border-top: 1px solid ${({theme}) => theme.borderColor};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 8rem;
  h3{
    margin: 0;
  }
  @media ${device.tablet}{
    height: 10rem;
  }
`

const Footer = () => {
  return (
    <Wrapper>
      <h3>© {new Date().getFullYear()}, Adin Jesuha</h3>
    </Wrapper>
  )
}

export default Footer;
import React from 'react'
import styled from 'styled-components'

import { device } from '../utils/brakpoints'

const Wrapper = styled.footer`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 8rem;
  h4{
    margin: 0;
  }
  @media ${device.tablet}{
    height: 10rem;
  }
`

const Footer = () => {
  return (
    <Wrapper>
      <h4>© {new Date().getFullYear()}, Adin Jesuha</h4>
    </Wrapper>
  )
}

export default Footer;
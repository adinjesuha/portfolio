import React from 'react'
import styled from 'styled-components'

import Section from '../section'
import { device } from '../../utils/brakpoints'

const H1 = styled.h1`
  font-weight: 300;
  font-size: 6rem;
  letter-spacing: -3px;
  line-height: 1.1;
  span{
    display: block;
    &:last-child{
      font-weight: 400;
    }
  }
  @media ${device.tablet}{
    font-size: 15rem;
  }
`


const Landing = () => {
  return (
    <Section.Container>
      <H1>
        <span> Hola, soy </span>
        <span>Adin Jesuha</span> 
      </H1>
    </Section.Container>
  )
}
export default Landing;
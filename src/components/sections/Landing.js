import React from 'react'
import styled from 'styled-components'

import {device} from '../../utils/brakpoints'
import Section from '../section'

const MainHeading = styled.h1`
  font-size: 3.2rem;
  font-weight: 300;
  margin: 0;
  @media ${device.tablet}{
    font-size: 6.2rem;
  }
`

const SubMainHeading = styled.h2`
  font-size: 3rem;
  font-weight: 500;
  margin: 0;
  @media ${device.tablet}{
    font-size: 6.2rem;
  } 
`

const Landing = () => {
  return (
    <Section.Container>
      <MainHeading>Hola, soy Adin Jesuha</MainHeading>
      <SubMainHeading>Desarrollador Front-end</SubMainHeading>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt voluptatibus amet quos saepe sint ut fugiat similique perspiciatis. Officiis ea accusantium amet, hic eaque ipsa. Perferendis suscipit veniam deserunt ad!  </p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt voluptatibus amet quos saepe sint ut fugiat similique perspiciatis. Officiis ea accusantium amet, hic eaque ipsa. Perferendis suscipit veniam deserunt ad!  </p>
    </Section.Container>
  )
}
export default Landing;
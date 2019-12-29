import React from 'react'
import styled from 'styled-components'

import Section from '../section'

const MainHeading = styled.h1`
  font-weight: 300;
  margin: 0;
  span{
    font-weight: 500;
  }
`

const Landing = () => {
  return (
    <Section.Container>
      <MainHeading>
        Hola, soy Adin Jesuha <br />
        <span>Desarrollador Front-end</span> 
      </MainHeading>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt voluptatibus amet quos saepe sint ut fugiat similique perspiciatis. Officiis ea accusantium amet, hic eaque ipsa. Perferendis suscipit veniam deserunt ad!  </p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt voluptatibus amet quos saepe sint ut fugiat similique perspiciatis. Officiis ea accusantium amet, hic eaque ipsa. Perferendis suscipit veniam deserunt ad!  </p>
    </Section.Container>
  )
}
export default Landing;
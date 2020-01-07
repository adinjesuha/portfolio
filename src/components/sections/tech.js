import React from 'react'

import Section from '../section'
import LogosTech from '../logosTech'

const Tech = () => {
  return (
    <Section.Container id="tech" bg={true}>
      <Section.Header name="Stack de desarrollo" />
      <Section.Content>
        <p>Para ayudar a las empresas a simplificar sus experiencias digitales, utilizo un conjunto herramientas para ofrecer el mejor rendimiento posible.</p> 
        <LogosTech />
      </Section.Content>
    </Section.Container>
  )
}
export default Tech

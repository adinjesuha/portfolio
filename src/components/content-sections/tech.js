import React from 'react'

import Section from '../section'
import LogosTech from '../logosTech'

const Tech = () => {
  return (
    <Section.Container id="tech" bg={true}>
      <Section.Header name="Stack de desarrollo" />
      <Section.Content>
        <p>Para ayudar a las empresas a simplificar sus experiencias digitales, selecciono un conjunto herramientas, las cuales se ajustan a las necesidades de cada cliente y de esta forma, poder ofrecer el mejor rendimiento posible.</p> 
        <LogosTech />
      </Section.Content>
    </Section.Container>
  )
}
export default Tech

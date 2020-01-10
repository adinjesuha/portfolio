import React from 'react'

import Section from '../section'
import LogosTech from '../logosTech'

const Tech = () => {
  return (
    <Section.Container id="tech" bg={true}>
      <Section.Header name="Stack de desarrollo" />
      <Section.Content>
        <p>Cada nuevo proyecto es una experiencia distinta a la anterior, por ello, se requiere de un stack de desarrollo que se ajuste a las necesidades y/o presupuesto del cliente, para poder ofrecer un mejor rendimiento en el proceso.</p> 
        <LogosTech />
      </Section.Content>
    </Section.Container>
  )
}
export default Tech



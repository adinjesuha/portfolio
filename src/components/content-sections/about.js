import React from 'react'

import Section from '../section'
import ExternalLink from '../styles/external-link'

const About = () => {
  return (
    <Section.Container id="about">
      <Section.Header name="Sobre mí"/>
      <Section.Content>
        <p>Hola, soy <strong>Adin Jesuha Castro</strong>, desarrollador <strong>front-end</strong> y diseñador de interfaces de usuario, apasiondo por crear productos digitales con un alto nivel de rendimiento (serverless & aplicaciones web progresivas), creando web-apps seguras y faciles de mantener aplicando la arquitectura de desarrollo <ExternalLink href="https://jamstack.org/" text="JAMstack"/>.</p>
      </Section.Content>
    </Section.Container>
  )
}
export default About;
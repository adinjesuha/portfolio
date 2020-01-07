import React from 'react'

import Section from '../section'

const About = () => {
  return (
    <Section.Container id="about">
      <Section.Header name="Sobre mí"/>
      <Section.Content>
        <p>Desarrollador <strong>front-end</strong> y diseñador de interfaces de usuario, apasiondo por crear productos digitales con un alto nivel de rendimiento (serverless & aplicaciones web progresivas), creando web-apps seguras y faciles de mantener aplicando la arquitectura de desarrollo <a href="https://jamstack.org/" target="_blank" rel="noopener noreferrer">JAMstack</a>.</p>
      </Section.Content>
    </Section.Container>
  )
}
export default About;
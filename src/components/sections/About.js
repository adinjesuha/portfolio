import React from 'react'
import styled from 'styled-components'

import Section from '../section'

const Content = styled.div`
  max-width: 56rem;
  p:first-child{
    opacity: 0.8;
  }
  strong{
    font-weight: 500;
  }
`

const About = () => {
  return (
    <Section.Container>
      <Section.Header name="Sobre mi" />
      <Content>
        <p>Desarrollador <strong>front-end</strong> y diseñador <strong>UI/UX</strong>, apasiondo por crear productos digitales con un alto nivel de rendimiento (serverless & aplicaciones web progresivas) , ofreciendo web-apps seguras y faciles de mantener, aplicando arquitecturas modernas de desarrollo como es el JAMStack.</p>
        <a href="https://jamstack.org/">Que es <span className="brand-color">JAMstack</span> <span role="img" aria-label="emoji">🤔</span>?</a>  
      </Content>
    </Section.Container>
  )
}
export default About;
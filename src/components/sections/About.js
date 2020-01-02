import React from 'react'
import styled from 'styled-components'

import Section from '../section'
import { device } from '../../utils/brakpoints'

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  p{
    max-width: 75rem;
    font-weight: 300;
    font-size: 2rem;
    line-height: 1.4;
    text-align: left;
  }
  strong{
    font-weight: 500;
  }
  a{
    text-decoration: underline;
  }
  @media ${device.tablet}{
    align-items: center;
    p{
      text-align: center;
      font-size: 2.6rem;
    }
  }
`

const About = () => {
  return (
    <Section.Container id="about">
      <Content>
        <h2>Sobre mí</h2>
        <p>Desarrollador <strong>front-end</strong> y diseñador de interfaces de usuario, apasiondo por crear productos digitales con un alto nivel de rendimiento (serverless & aplicaciones web progresivas), creando web-apps seguras y faciles de mantener aplicando la arquitectura de desarrollo <a href="https://jamstack.org/" target="_blank" rel="noopener noreferrer">JAMstack</a>, <strong>ayudando a las empresas a simplificar sus experiencias digitales para sus clientes</strong>.</p>
      </Content>
    </Section.Container>
  )
}
export default About;
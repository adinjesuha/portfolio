import React from 'react'
import styled from 'styled-components'

import { device } from '../../utils/brakpoints'
import Section from '../section'
import Form from '../form/form'


const H1 = styled.h1`
  font-weight: 300;
  text-align: center;
  line-height: 1.2;
  max-width: 82rem;
  margin: 0 auto;
  @media ${device.tablet}{
    letter-spacing: -1px;
    font-size: 6rem;
  }
`

const ContactFooter = styled.div`
  padding-top: 8rem;
  text-align: center;
  h3{
    font-weight: 300;
  }
`

const Contact = () => {
  return (
    <Section.Container id="contact" bg={true}>
      <H1>Tienes algún proyecto en mente? Trabajemos juntos.</H1>
      <span className="separator" />
      <Form />
      <ContactFooter>
        <h3>Prefieres enviar un correo?</h3>
        <a href="mailto:adinjesuha@gmail.com">adinjesuha@gmail.com</a>
      </ContactFooter>
    </Section.Container>
  )
}
export default Contact;
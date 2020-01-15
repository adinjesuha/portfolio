import React from 'react'
import styled from 'styled-components'

import { device } from '../../utils/brakpoints'
import Section from '../section'


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
  padding-top: 4rem;
  text-align: center;
  position: relative;
  a{
    display: inline-block;
  }
`

const Contact = () => {
  return (
    <Section.Container id="contact" bg={true}>
      <H1>Tienes algún proyecto en mente? Trabajemos juntos.</H1>
      <ContactFooter>
        <a href="mailto:adinjesuha@gmail.com" className="btn btn-primary   btn--fixed-width">Contáctame</a>
      </ContactFooter>
    </Section.Container>
  )
}
export default Contact;
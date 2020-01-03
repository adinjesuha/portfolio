import React from 'react'
import Section from '../section'
import styled from 'styled-components'

import { device } from '../../utils/brakpoints'
import Form from '../form/form'

const H1 = styled.h1`
  font-weight: 300;
  text-align: center;
  line-height: 1.11;
  padding-bottom: 5rem;
  @media ${device.tablet}{
    letter-spacing: -1px;
    font-size: 6rem;
  }
`
 
const ContactMe = () => {
  return (
    <Section.Container id="contact">
      <H1>Let's Get To The Next Level Together</H1>
      <Form />
    </Section.Container>
  )
}

export default ContactMe